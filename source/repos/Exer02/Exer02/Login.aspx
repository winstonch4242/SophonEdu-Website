<%@ Page Title="Login" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Exer02.About" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <main aria-labelledby="title">
        <h1 id="title"><%: Title %></h1>
        <br />
        Email Address <asp:TextBox ID="txtEmail" runat="server" TextMode="Email"></asp:TextBox>
        <br />
        Username <asp:TextBox ID="txtUsername" runat="server"></asp:TextBox>
        <br />
        Password
        <asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>
        <br />
    </main>
    <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Login" />
</asp:Content>
