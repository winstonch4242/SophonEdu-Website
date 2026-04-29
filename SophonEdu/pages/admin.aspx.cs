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

        }

        protected void SqlDataSource1_Selecting(object sender, SqlDataSourceSelectingEventArgs e)
        {

        }

        protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
        {
            Session["CourseID"] = GridView1.SelectedRow.Cells[1].Text;
            courseNameTxt.Text = GridView1.SelectedRow.Cells[2].Text;
            totalXP.Text = GridView1.SelectedRow.Cells[3].Text;
            levelTxt.Text = GridView1.SelectedRow.Cells[4].Text;
            descTxt.Text = GridView1.SelectedRow.Cells[5].Text;
            durationTxt.Text = GridView1.SelectedRow.Cells[6].Text;
        }

        protected void btnAdd_Click(object sender, EventArgs e)
        {
            SqlDataSource1.Insert();
            Response.Write("<script>alert('Course successfully added.');</script>");
        }

        protected void btnUpdate_Click(object sender, EventArgs e)
        {
            SqlDataSource1.Update();
            Response.Write("<script>alert('Course successfully updated.');</script>");
        }

        protected void btnDelete_Click(object sender, EventArgs e)
        {
            SqlDataSource1.Delete();
            Response.Write("<script>alert('Course successfully removed.');</script>");
        }

        protected void btnLogout_Click(object sender, EventArgs e)
        {
            Response.Write("<script>alert('Logging out...');</script>");
            Response.Redirect("../index.aspx");
        }

        protected void courseNameTxt_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
