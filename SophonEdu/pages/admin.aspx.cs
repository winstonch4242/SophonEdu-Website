using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SophonEdu.pages
{
    public partial class admin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // 1. Not logged in at all → send to login page
            if (Session["UserEmail"] == null)
            {
                Response.Redirect("~/index.aspx");
                return;
            }

            // 2. Logged in but not an admin → send to profile
            if (Session["UserType"].ToString() != "Admin")
            {
                Response.Redirect("~/index.aspx");
                return;
            }

            // 3. Logged in as admin → safe to load page
            if (!IsPostBack)
            {
                // You can use this later to display the admin's name
                string adminEmail = Session["UserEmail"].ToString();
                lblAdminEmail.Text = adminEmail; // pass to JS
            }
        }
    }
}