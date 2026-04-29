using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using static System.Net.Mime.MediaTypeNames;

namespace SophonEdu
{
    public partial class index : System.Web.UI.Page
    {
        string connectionString = ConfigurationManager.ConnectionStrings["SophonEduDB"].ConnectionString;
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void LoginBtnModal(object sender, EventArgs e)
        {
            string emailAddress = loginEmail.Text;
            string password = loginPassword.Text;

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();
                string q1 = "SELECT Username FROM LearnersData WHERE EmailAddress=@EmailAddress AND Password=@Password";
                SqlCommand learnerscmd = new SqlCommand(q1, connection);
                learnerscmd.Parameters.AddWithValue("@EmailAddress", emailAddress);
                learnerscmd.Parameters.AddWithValue("@Password", password);

                SqlDataReader read1 = learnerscmd.ExecuteReader();

                if (read1.Read())
                {
                    read1.Close();
                    Session["UserEmail"] = emailAddress;
                    Session["UserType"] = "Learner";
                    Response.Redirect("~/pages/profile.aspx");
                    return;
                }

                read1.Close();
                string q2 = "SELECT Username FROM AdminData WHERE EmailAddress=@EmailAddress AND Password=@Password";
                SqlCommand admincmd = new SqlCommand(q2, connection);
                admincmd.Parameters.AddWithValue("@EmailAddress", emailAddress);
                admincmd.Parameters.AddWithValue("@Password", password);
                SqlDataReader read2 = admincmd.ExecuteReader();

                if (read2.Read())
                {
                    read2.Close();
                    Session["UserEmail"] = emailAddress;
                    Session["UserType"] = "Admin";
                    Response.Redirect("~/pages/admin.aspx");
                    return;
                }
                read2.Close();
                Response.Write("<script>alert('Invalid Credentials');</script>");
            }
        }

        protected void RegisterBtn_Click(object sender, EventArgs e)
        {
            string fullName = regName.Text.Trim();
            string email = regEmail.Text.Trim();
            string password = regPassword.Text;

            // Split Full Name into First and Last name
            string firstName = fullName.Contains(" ") ? fullName.Substring(0, fullName.IndexOf(" ")) : fullName;
            string lastName = fullName.Contains(" ") ? fullName.Substring(fullName.IndexOf(" ") + 1) : "";

            // Get selected learning path from radio buttons
            string learningPath = Request.Form["learningPath"] ?? "";

            if (string.IsNullOrEmpty(learningPath))
            {
                lblRegisterError.Text = "Please select a learning path.";
                lblRegisterError.Visible = true;
                return;
            }

            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                {
                    connection.Open();

                    // 1. Check if email already exists
                    string checkQuery = "SELECT COUNT(*) FROM LearnersData WHERE EmailAddress = @EmailAddress";
                    SqlCommand checkCmd = new SqlCommand(checkQuery, connection);
                    checkCmd.Parameters.AddWithValue("@EmailAddress", email);
                    int existingCount = (int)checkCmd.ExecuteScalar();

                    if (existingCount > 0)
                    {
                        lblRegisterError.Text = "An account with this email already exists.";
                        lblRegisterError.Visible = true;
                        return;
                    }

                    // 2. Insert new learner
                    string insertQuery = @"INSERT INTO LearnersData 
                                    (Username, FirstName, LastName, EmailAddress, Password)
                                   VALUES 
                                    (@Username, @FirstName, @LastName, @EmailAddress, @Password)";

                    SqlCommand insertCmd = new SqlCommand(insertQuery, connection);
                    insertCmd.Parameters.AddWithValue("@Username", email.Split('@')[0]); // e.g. "alice.tan" from "alice.tan@email.com"
                    insertCmd.Parameters.AddWithValue("@FirstName", firstName);
                    insertCmd.Parameters.AddWithValue("@LastName", lastName);
                    insertCmd.Parameters.AddWithValue("@EmailAddress", email);
                    insertCmd.Parameters.AddWithValue("@Password", password); // ⚠️ hash this before go-live!

                    insertCmd.ExecuteNonQuery();

                    // 3. Set session and redirect
                    Session.Clear();
                    Session["UserEmail"] = email;
                    Session["UserType"] = "Learner";
                    Response.Redirect("~/pages/profile.aspx");
                }
            }
            catch (SqlException ex)
            {
                lblRegisterError.Text = "A database error occurred. Please try again.";
                lblRegisterError.Visible = true;
                // TODO: log ex to your logging system
            }
        }
    }
}