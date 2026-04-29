<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="admin.aspx.cs" Inherits="SophonEdu.pages.admin" %>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - SophonEdu</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/admin.css">
    <style type="text/css">
        .input {}
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="logo">
                <a href="pages/admin.aspx" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 0.5rem;">
                    <img src="../images/logo.png" alt="SophonEdu" class="logo-image">
                </a>
            </div>
            <div class="admin-info">
                <span class="admin-badge">👑 Admin Panel</span>
                <span class="admin-name" id="adminName">Admin</span>
                <asp:Button ID="Logout" runat="server" Text="Logout" OnClick="btnLogout_Click" CssClass="btn-secondary" />
            </div>
        </div>
    </nav>

    <!-- Admin Dashboard -->
    <main class="admin-dashboard">
        <div class="container">
            <!-- Dashboard Header -->
            <div class="dashboard-header">
                <h1>Admin Dashboard</h1>
                <p>Manage courses, lessons, and students</p>
            </div>

            <!-- Admin Tabs -->
            <div class="admin-tabs">
                <button class="tab-btn active" data-tab="courses">
                    <span class="tab-icon">🎓</span>
                    <span>Courses</span>
                </button>
                <button class="tab-btn" data-tab="lessons">
                    <span class="tab-icon">📚</span>
                    <span>Lessons</span>
                </button>
                <button class="tab-btn" data-tab="students">
                    <span class="tab-icon">👥</span>
                    <span>Students</span>
                </button>
                <button class="tab-btn" data-tab="analytics">
                    <span class="tab-icon">📊</span>
                    <span>Analytics</span>
                </button>
            </div>
            <!-- Courses Tab -->
            <div class="tab-content active" id="coursesTab">
                <div class="content-header">
                    <div>
                        <h2>Course Management</h2>
                        <p>Create, edit, and manage all courses</p>
                        <p>
                            <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataKeyNames="CourseID" DataSourceID="SqlDataSource1" OnSelectedIndexChanged="GridView1_SelectedIndexChanged" CellPadding="4" ForeColor="#333333" GridLines="None">
                                <AlternatingRowStyle BackColor="White" />
                                <Columns>
                                    <asp:CommandField ShowSelectButton="True" />
                                    <asp:BoundField DataField="CourseID" HeaderText="CourseID" InsertVisible="False" ReadOnly="True" SortExpression="CourseID" />
                                    <asp:BoundField DataField="CourseName" HeaderText="CourseName" SortExpression="CourseName" />
                                    <asp:BoundField DataField="TotalXP" HeaderText="TotalXP" SortExpression="TotalXP" />
                                    <asp:BoundField DataField="ExpertiseLevel" HeaderText="ExpertiseLevel" SortExpression="ExpertiseLevel" />
                                    <asp:BoundField DataField="CourseDescription" HeaderText="CourseDescription" SortExpression="CourseDescription" />
                                    <asp:BoundField DataField="TotalDuration" HeaderText="TotalDuration" SortExpression="TotalDuration" />
                                </Columns>
                                <EditRowStyle BackColor="#2461BF" />
                                <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                                <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                                <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" />
                                <RowStyle BackColor="#EFF3FB" />
                                <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                                <SortedAscendingCellStyle BackColor="#F5F7FB" />
                                <SortedAscendingHeaderStyle BackColor="#6D95E1" />
                                <SortedDescendingCellStyle BackColor="#E9EBEF" />
                                <SortedDescendingHeaderStyle BackColor="#4870BE" />
                            </asp:GridView>
                        </p>
                        <p>
                            <asp:Button ID="btnAdd" runat="server" Text="Add" OnClick="btnAdd_Click" CssClass="btn-primary" />
&nbsp;<asp:Button ID="btnUpdate" runat="server" Text="Update" OnClick="btnUpdate_Click" CssClass="btn-primary" />
&nbsp;<asp:Button ID="btnDelete" runat="server" Text="Delete" OnClick="btnDelete_Click" CssClass="btn-primary" />
                        </p>
                        <p>
                            &nbsp;</p>
                        <p>
                            <b>Course Name:</b> <asp:TextBox ID="courseNameTxt" runat="server" CssClass="input" Placeholder="Course Name" Height="24px"/>
                        </p>
                        <p>
                            <b>Total XP: 
                            <asp:TextBox ID="totalXP" runat="server" Height="24px" TextMode="Number"></asp:TextBox>
                            </b> 
                        </p>
                        <p>
                            <b>Expertise Level:</b>
                            <b>
                            <asp:TextBox ID="levelTxt" runat="server" Height="24px"></asp:TextBox>
                            </b> 
                        </p>
                        <p>
                            <b>Course Description:&nbsp;
                            <asp:TextBox ID="descTxt" runat="server" Height="24px" TextMode="MultiLine"></asp:TextBox>
                            </b> 
                        </p>
                        <p>
                            <b>Total Duration:&nbsp;
                            <asp:TextBox ID="durationTxt" runat="server" Height="24px"></asp:TextBox>
                            </b>
                        </p>
                        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:SophonEduDB %>" DeleteCommand="DELETE FROM [CoursesData] WHERE [CourseID] = @CourseID" InsertCommand="INSERT INTO [CoursesData] ([CourseName], [TotalXP], [ExpertiseLevel], [CourseDescription], [TotalDuration]) VALUES (@CourseName, @TotalXP, @ExpertiseLevel, @CourseDescription, @TotalDuration)" OnSelecting="SqlDataSource1_Selecting" SelectCommand="SELECT * FROM [CoursesData]" UpdateCommand="UPDATE [CoursesData] SET [CourseName] = @CourseName, [TotalXP] = @TotalXP, [ExpertiseLevel] = @ExpertiseLevel, [CourseDescription] = @CourseDescription, [TotalDuration] = @TotalDuration WHERE [CourseID] = @CourseID">
                            <DeleteParameters>
                                <asp:SessionParameter Name="CourseID" SessionField="CourseID" Type="Int32" />
                            </DeleteParameters>
                            <InsertParameters>
                                <asp:ControlParameter ControlID="courseNameTxt" Name="CourseName" PropertyName="Text" Type="String" />
                                <asp:ControlParameter ControlID="totalXP" Name="TotalXP" PropertyName="Text" Type="Int32" />
                                <asp:ControlParameter ControlID="levelTxt" Name="ExpertiseLevel" PropertyName="Text" Type="String" />
                                <asp:ControlParameter ControlID="descTxt" Name="CourseDescription" PropertyName="Text" Type="String" />
                                <asp:ControlParameter ControlID="durationTxt" Name="TotalDuration" PropertyName="Text" Type="String" />
                            </InsertParameters>
                            <UpdateParameters>
                                <asp:ControlParameter ControlID="courseNameTxt" Name="CourseName" PropertyName="Text" Type="String" />
                                <asp:ControlParameter ControlID="totalXP" Name="TotalXP" PropertyName="Text" Type="Int32" />
                                <asp:ControlParameter ControlID="levelTxt" Name="ExpertiseLevel" PropertyName="Text" Type="String" />
                                <asp:ControlParameter ControlID="descTxt" Name="CourseDescription" PropertyName="Text" Type="String" />
                                <asp:ControlParameter ControlID="durationTxt" Name="TotalDuration" PropertyName="Text" Type="String" />
                                <asp:SessionParameter Name="CourseID" SessionField="CourseID" Type="Int32" />
                            </UpdateParameters>
                        </asp:SqlDataSource>
                        <div class="tab-content" id="lessonsTab">
                            <div class="content-header">
                                <div>
                                    <h2>Lesson Management</h2>
                                    <p>Create, edit, and manage all lessons</p>
                                </div>
                                <button class="btn-primary btn-large" id="addLessonBtn">
                                    <span>+</span> Add New Lesson
                                </button>
                            </div>
                            <p>
                            <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:SophonEduDB %>" DeleteCommand="DELETE FROM [LearnersData] WHERE [LearnerID] = @LearnerID" InsertCommand="INSERT INTO [LearnersData] ([FirstName], [LastName], [Age], [Gender], [LevelOfStudy], [EmailAddress], [Username], [Password], [Salt], [PasswordHash]) VALUES (@FirstName, @LastName, @Age, @Gender, @LevelOfStudy, @EmailAddress, @Username, @Password, @Salt, @PasswordHash)" SelectCommand="SELECT * FROM [LearnersData]" UpdateCommand="UPDATE [LearnersData] SET [FirstName] = @FirstName, [LastName] = @LastName, [Age] = @Age, [Gender] = @Gender, [LevelOfStudy] = @LevelOfStudy, [EmailAddress] = @EmailAddress, [Username] = @Username, [Password] = @Password, [Salt] = @Salt, [PasswordHash] = @PasswordHash WHERE [LearnerID] = @LearnerID">
                                <DeleteParameters>
                                    <asp:Parameter Name="LearnerID" Type="Int32" />
                                </DeleteParameters>
                                <InsertParameters>
                                    <asp:Parameter Name="FirstName" Type="String" />
                                    <asp:Parameter Name="LastName" Type="String" />
                                    <asp:Parameter Name="Age" Type="Int32" />
                                    <asp:Parameter Name="Gender" Type="String" />
                                    <asp:Parameter Name="LevelOfStudy" Type="String" />
                                    <asp:Parameter Name="EmailAddress" Type="String" />
                                    <asp:Parameter Name="Username" Type="String" />
                                    <asp:Parameter Name="Password" Type="String" />
                                    <asp:Parameter Name="Salt" Type="Object" />
                                    <asp:Parameter Name="PasswordHash" Type="Object" />
                                </InsertParameters>
                                <UpdateParameters>
                                    <asp:Parameter Name="FirstName" Type="String" />
                                    <asp:Parameter Name="LastName" Type="String" />
                                    <asp:Parameter Name="Age" Type="Int32" />
                                    <asp:Parameter Name="Gender" Type="String" />
                                    <asp:Parameter Name="LevelOfStudy" Type="String" />
                                    <asp:Parameter Name="EmailAddress" Type="String" />
                                    <asp:Parameter Name="Username" Type="String" />
                                    <asp:Parameter Name="Password" Type="String" />
                                    <asp:Parameter Name="Salt" Type="Object" />
                                    <asp:Parameter Name="PasswordHash" Type="Object" />
                                    <asp:Parameter Name="LearnerID" Type="Int32" />
                                </UpdateParameters>
                            </asp:SqlDataSource>
                        </p>
                        </div>
                        <div class="tab-content" id="studentsTab">
                            <div class="content-header">
                                <div>
                                    <h2>Student Management</h2>
                                    <p>View and manage all registered students</p>
                                </div>
                            </div>
                            <p>
                                <asp:GridView ID="GridView2" runat="server" AutoGenerateColumns="False" DataKeyNames="LearnerID" DataSourceID="SqlDataSource2" CellPadding="4" ForeColor="#333333" GridLines="None">
                                    <AlternatingRowStyle BackColor="White" />
                                    <Columns>
                                        <asp:CommandField ShowSelectButton="True" />
                                        <asp:BoundField DataField="LearnerID" HeaderText="LearnerID" InsertVisible="False" ReadOnly="True" SortExpression="LearnerID" />
                                        <asp:BoundField DataField="FirstName" HeaderText="FirstName" SortExpression="FirstName" />
                                        <asp:BoundField DataField="LastName" HeaderText="LastName" SortExpression="LastName" />
                                        <asp:BoundField DataField="Age" HeaderText="Age" SortExpression="Age" />
                                        <asp:BoundField DataField="Gender" HeaderText="Gender" SortExpression="Gender" />
                                        <asp:BoundField DataField="LevelOfStudy" HeaderText="LevelOfStudy" SortExpression="LevelOfStudy" />
                                        <asp:BoundField DataField="EmailAddress" HeaderText="EmailAddress" SortExpression="EmailAddress" />
                                        <asp:BoundField DataField="Username" HeaderText="Username" SortExpression="Username" />
                                        <asp:BoundField DataField="Password" HeaderText="Password" SortExpression="Password" />
                                        <asp:BoundField DataField="Salt" HeaderText="Salt" SortExpression="Salt" />
                                    </Columns>
                                    <EditRowStyle BackColor="#2461BF" />
                                    <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                                    <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
                                    <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" />
                                    <RowStyle BackColor="#EFF3FB" />
                                    <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                                    <SortedAscendingCellStyle BackColor="#F5F7FB" />
                                    <SortedAscendingHeaderStyle BackColor="#6D95E1" />
                                    <SortedDescendingCellStyle BackColor="#E9EBEF" />
                                    <SortedDescendingHeaderStyle BackColor="#4870BE" />
                                </asp:GridView>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </main>
    </form>
</body>
</html>
