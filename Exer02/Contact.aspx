<%@ Page Title="Contact" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Contact.aspx.cs" Inherits="Exer02.Contact" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <main aria-labelledby="title">
        <h2 id="title"><%: Title %>.</h2>
        <address>
            极乐世界 <br />
            <abbr title="Phone">P:</abbr>
            012-345-6789
        </address>

        <address>
            <strong>Support:</strong>   <a href="mailto:Support@example.com">Support@example.com</a><br />
            <strong>Marketing:</strong> <a href="mailto:Marketing@example.com">Marketing@example.com</a>
        </address>

        <address>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.811498915842!2d101.71697307447046!3d3.1444010531828663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37dfeac91c4b%3A0x745c375350bc1ed2!2sTSLAW%20Tower!5e0!3m2!1sen!2smy!4v1773623665316!5m2!1sen!2smy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </address>
    </main>
</asp:Content>
