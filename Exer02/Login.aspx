<%@ Page Title="Login" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Exer02.About" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <main aria-labelledby="title">
        <h1 id="title"><%: Title %></h1>
        <br />
        Email Address <asp:TextBox ID="TextBox3" runat="server" TextMode="Email"></asp:TextBox>
        <br />
        Username <asp:TextBox ID="TextBox7" runat="server"></asp:TextBox>
        <br />
        Password
        <asp:TextBox ID="TextBox5" runat="server" TextMode="Password"></asp:TextBox>
        <br />
    </main>
</asp:Content>
