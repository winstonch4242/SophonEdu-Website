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
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string q1 = "SELECT Username FROM LearnersData WHERE EmailAddress=@EmailAddress AND Password=@Password";
                SqlCommand learnerscmd = new SqlCommand(q1, connection);
                learnerscmd.Parameters.AddWithValue("@EmailAddress", loginEmail);
                learnerscmd.Parameters.AddWithValue("@Password", loginPassword);
                connection.Open(); 
                SqlDataReader read1 = learnerscmd.ExecuteReader();
                if (read1.Read())
                {
                    read1.Close();
                    Response.Redirect("profile.aspx");
                    return;
                }
                read1.Close();
                string q2 = "SELECT Username FROM LecturersData WHERE EmailAddress=@EmailAddress AND Password=@Password";
                SqlCommand lecturerscmd = new SqlCommand(q2, connection);
                lecturerscmd.Parameters.AddWithValue("@EmailAddress", loginEmail);
                lecturerscmd.Parameters.AddWithValue("@Password", loginPassword);
                connection.Open();
                SqlDataReader read2 = lecturerscmd.ExecuteReader();
                if (read2.Read())
                {
                    read2.Close();
                    Response.Redirect("lecturerDashboard.aspx");
                    return;
                }
                read2.Close();
                Response.Write("<script>alert('Invalid Credentials');</script>");
            }
        }
    }
}