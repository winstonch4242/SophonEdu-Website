<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="SophonEdu.WebForm1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <h1 class="text-start">Login</h1>
    <p class="text-start">
        Username
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
    </p>
    <p class="text-start">
        Password
        <asp:TextBox ID="TextBox2" runat="server" TextMode="Password"></asp:TextBox>
    </p>
    <p class="text-start">
        Email Address
        <asp:TextBox ID="TextBox3" runat="server" TextMode="Email"></asp:TextBox>
    </p>
    <p class="text-start">
        <asp:Button ID="LoginBtn" runat="server" Text="Login" />
    </p>
</asp:Content>
