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
            string emailAddress = loginEmail.Value;
            string password = loginPassword.Value;

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
                    Response.Redirect("profile.aspx");
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
                    Response.Redirect("pages/admin.aspx");
                    return;
                }
                read2.Close();
                Response.Redirect("index.aspx");
            }
        }
    }
}
