using System;
using System.Collections.Generic;
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
            if (Session["UserEmail"] == null)
            {
                Response.Redirect("~/index.aspx");
                return;
            }

            if (Session["UserType"].ToString() != "Learner")
            {
                Response.Redirect("~/index.aspx");
                return;
            }

            if (!IsPostBack)
            {
                string userEmail = Session["UserEmail"].ToString();
                // Use userEmail later to load learner's data from DB
            }
        }
    }
}