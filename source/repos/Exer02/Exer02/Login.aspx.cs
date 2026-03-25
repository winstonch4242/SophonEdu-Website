using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Exer02
{
    public partial class About : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string email = txtEmail.Text;
            string username = txtUsername.Text;
            string password = txtPassword.Text;
            if (username == "admin" && password == "admin")
            {
                Session["role"] = "Admin";
                Response.Redirect("AdminProfile.aspx");
            } else if (username == "student" && password == "student")
            {
                Session["role"] = "Learner";
                Response.Redirect("LearnerProfile.aspx");
            } else
            {
                Session["role"] = "Guest";
                Response.Redirect("Home.aspx");
            }
        }
    }
}