<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="profile.aspx.cs" Inherits="SophonEdu.profile" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Profile - SophonEdu</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/profile.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="logo">
                <a href="../indexaspx" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 0.5rem;">
                    <img src="../images/logo.png" alt="SophonEdu" class="logo-image">
                </a>
            </div>
            <ul class="nav-menu" id="navMenu">
                <li><a href="../index.aspx" class="nav-link">Home</a></li>
                <li><a href="courses.aspx" class="nav-link">Courses</a></li>
                <li><a href="tutorials.aspx" class="nav-link">Tutorials</a></li>
                <li><a href="about.aspx" class="nav-link">About</a></li>
            </ul>
            <div class="nav-actions">
                <button class="btn-secondary" id="logoutBtn">Logout</button>
            </div>
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Profile Header -->
    <section class="profile-header">
        <div class="container">
            <div class="profile-banner">
                <div class="profile-avatar">
                    <span id="avatarInitials">JD</span>
                </div>
                <div class="profile-info">
                    <h1 id="profileName">John Doe</h1>
                    <p id="profileEmail">john@example.com</p>
                    <span class="profile-level" id="profileLevel">Foundation Level</span>
                </div>
                <button class="btn-primary" id="editProfileBtn">Edit Profile</button>
            </div>
        </div>
    </section>

    <!-- Profile Content -->
    <section class="profile-content">
        <div class="container">
            <div class="profile-layout">
                <!-- Sidebar -->
                <aside class="profile-sidebar">
                    <div class="sidebar-card">
                        <h3>Quick Stats</h3>
                        <div class="quick-stats">
                            <div class="quick-stat">
                                <span class="stat-value" id="totalXP">0</span>
                                <span class="stat-label">Total XP</span>
                            </div>
                            <div class="quick-stat">
                                <span class="stat-value" id="coursesCompleted">0</span>
                                <span class="stat-label">Completed</span>
                            </div>
                            <div class="quick-stat">
                                <span class="stat-value" id="currentStreak">0</span>
                                <span class="stat-label">Day Streak</span>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar-card">
                        <h3>Achievements</h3>
                        <div class="achievement-list" id="achievementList">
                            <!-- Populated by JS -->
                        </div>
                    </div>
                </aside>

                <!-- Main Content -->
                <main class="profile-main">
                    <!-- Progress Overview -->
                    <div class="content-card">
                        <h2>Learning Progress</h2>
                        <div class="progress-overview-grid">
                            <div class="progress-item">
                                <div class="progress-circle" data-progress="35">
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45"></circle>
                                        <circle cx="50" cy="50" r="45" class="progress-ring"></circle>
                                    </svg>
                                    <span class="progress-value">35%</span>
                                </div>
                                <p>Overall Progress</p>
                            </div>
                            <div class="progress-item">
                                <div class="progress-circle" data-progress="60">
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45"></circle>
                                        <circle cx="50" cy="50" r="45" class="progress-ring"></circle>
                                    </svg>
                                    <span class="progress-value">60%</span>
                                </div>
                                <p>Foundation</p>
                            </div>
                            <div class="progress-item">
                                <div class="progress-circle" data-progress="25">
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45"></circle>
                                        <circle cx="50" cy="50" r="45" class="progress-ring"></circle>
                                    </svg>
                                    <span class="progress-value">25%</span>
                                </div>
                                <p>Diploma</p>
                            </div>
                        </div>
                    </div>

                    <!-- Recent Activity -->
                    <div class="content-card">
                        <h2>Recent Activity</h2>
                        <div class="activity-list" id="activityList">
                            <!-- Populated by JS -->
                        </div>
                    </div>

                    <!-- Enrolled Courses -->
                    <div class="content-card">
                        <h2>My Courses</h2>
                        <div class="enrolled-courses" id="enrolledCourses">
                            <!-- Populated by JS -->
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </section>

    <!-- Edit Profile Modal -->
    <div class="modal" id="editProfileModal">
        <div class="modal-content">
            <button class="modal-close" id="closeEditProfile">&times;</button>
            <h2>Edit Profile</h2>
            <form id="editProfileForm">
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" id="editName" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="editEmail" required>
                </div>
                <div class="form-group">
                    <label>Current Password</label>
                    <input type="password" id="currentPassword">
                </div>
                <div class="form-group">
                    <label>New Password</label>
                    <input type="password" id="newPassword">
                </div>
                <div class="form-actions">
                    <button type="button" class="btn-secondary" id="cancelEdit">Cancel</button>
                    <button type="submit" class="btn-primary">Save Changes</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Toast Notification -->
    <div class="toast" id="toast">
        <span id="toastMessage"></span>
    </div>

    <script src="../js/auth.js"></script>
    <script src="../js/profile.js"></script>
</body>
</html>

