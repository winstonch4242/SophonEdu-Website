using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SophonEdu.pages
{
    public partial class profile : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // 1. Not logged in → send to login page
            if (Session["UserEmail"] == null)
            {
                Response.Redirect("~/index.aspx");
                return;
            }

            // 2. Logged in but not a Learner → send to admin panel
            if (Session["UserType"].ToString() != "Learner")
            {
                Response.Redirect("~/pages/admin.aspx");
                return;
            }

            // 3. Inject session values into the page for profile.js to use
            if (!IsPostBack)
            {
                string userEmail = Session["UserEmail"].ToString();
                string userType = Session["UserType"].ToString();

                // This creates a JS variable: var sessionEmail = 'alice@example.com';
                ClientScript.RegisterStartupScript(this.GetType(), "sessionData",
                    $"var sessionEmail = '{userEmail}'; var sessionType = '{userType}';", true);
            }
        }
    }
}
