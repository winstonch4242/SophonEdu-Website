<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="Exer02.WebForm1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div>
    <h1>Register</h1><br />
    First Name&nbsp; <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
    <br />
    Last Name&nbsp; <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
    <br />
    Age&nbsp; <asp:TextBox ID="TextBox6" runat="server"></asp:TextBox>
    <br />
    <br />
    <br />
    Email Address <asp:TextBox ID="TextBox3" runat="server" TextMode="Email"></asp:TextBox>
    <br />
    Username <asp:TextBox ID="TextBox7" runat="server"></asp:TextBox>
    <br />
    Password
    <asp:TextBox ID="TextBox5" runat="server" TextMode="Password"></asp:TextBox>
    <br />
    <br />
    <b>Gender</b> <asp:RadioButtonList ID="RadioButtonList1" runat="server">
        <asp:ListItem>Male</asp:ListItem>
        <asp:ListItem>Female</asp:ListItem>
    </asp:RadioButtonList>
    <br />
    <b>Level of Study</b><br />
    <asp:DropDownList ID="DropDownList2" runat="server">
        <asp:ListItem>Undergraduate</asp:ListItem>
        <asp:ListItem>Foundation</asp:ListItem>
        <asp:ListItem>Diploma</asp:ListItem>
        <asp:ListItem>Self-taught</asp:ListItem>
    </asp:DropDownList>
    <br />
</div>
<asp:Button ID="Button1" runat="server" Text="Register" />
</asp:Content>
