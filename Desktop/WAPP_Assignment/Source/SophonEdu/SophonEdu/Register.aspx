<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="SophonEdu.Register" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Register</h1>
    <p>
        First Name
        <asp:TextBox ID="txtFirstName" runat="server"></asp:TextBox>
    </p>
    <p>
        Last Name
        <asp:TextBox ID="txtLastName" runat="server"></asp:TextBox>
    </p>
    <p>
        Age
        <asp:TextBox ID="txtAge" runat="server"></asp:TextBox>
    </p>
    <p>
        Gender</p>
        &nbsp;<asp:DropDownList ID="DropDownList1" runat="server" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged">
            <asp:ListItem>Male</asp:ListItem>
            <asp:ListItem>Female</asp:ListItem>
        </asp:DropDownList>
    <br />
    <p>
        Level of Study</p>
        <asp:DropDownList ID="DropDownList2" runat="server">
            <asp:ListItem>Undergraduate</asp:ListItem>
            <asp:ListItem>Diploma</asp:ListItem>
            <asp:ListItem>Foundation</asp:ListItem>
            <asp:ListItem>Self-taught</asp:ListItem>
        </asp:DropDownList>
    <p>
        &nbsp;</p>
    <p>
        Email Address <asp:TextBox ID="txtEmail" runat="server" TextMode="Email"></asp:TextBox>
    </p>
    <p>
        Username
        <asp:TextBox ID="txtUsername" runat="server"></asp:TextBox>
    </p>
    <p>
        Password
        <asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>
    </p>
    <p>
        <asp:Button ID="btnRegister" runat="server" Text="Register" />
    </p>
</asp:Content>
