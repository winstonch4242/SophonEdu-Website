<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="courses.aspx.cs" Inherits="SophonEdu.pages.courses" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Courses - SophonEdu</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/courses.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="logo">
                <a href="../index.aspx" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 0.5rem;">
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
                <button class="btn-secondary" id="loginBtn">Login</button>
                <button class="btn-primary" id="registerBtn">Get Started</button>
            </div>
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1 class="animate-fade-in">Explore Our Courses</h1>
            <p class="animate-fade-in-delay">Choose from Foundation, Diploma, or Degree level programming courses</p>
        </div>
    </section>

    <!-- Course Filters -->
    <section class="course-filters">
        <div class="container">
            <div class="filter-bar">
                <div class="filter-group">
                    <label>Level:</label>
                    <button class="filter-tag active" data-level="all">All Levels</button>
                    <button class="filter-tag" data-level="foundation">Foundation</button>
                    <button class="filter-tag" data-level="diploma">Diploma</button>
                    <button class="filter-tag" data-level="degree">Degree</button>
                </div>
                <div class="filter-group">
                    <label>Topic:</label>
                    <select id="topicFilter" class="filter-select">
                        <option value="all">All Topics</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="javascript">JavaScript</option>
                        <option value="react">React</option>
                        <option value="node">Node.js</option>
                        <option value="database">Database</option>
                    </select>
                </div>
                <div class="search-box">
                    <input type="text" id="courseSearch" placeholder="Search courses...">
                    <span class="search-icon">🔍</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Courses Grid -->
    <section class="courses-section">
        <div class="container">
            <div class="courses-grid" id="coursesGrid">
                <!-- Courses will be populated by JS -->
            </div>
        </div>
    </section>

    <!-- Course Detail Modal -->
    <div class="modal" id="courseDetailModal">
        <div class="modal-content course-detail-container">
            <button class="modal-close" id="closeCourseDetail">&times;</button>
            <div class="course-detail-header">
                <div class="course-detail-info">
                    <span class="course-level-badge" id="detailLevel">Foundation</span>
                    <h2 id="detailTitle">Course Title</h2>
                    <div class="course-meta-info">
                        <span>⏱️ <span id="detailDuration">30 min</span></span>
                        <span>📚 <span id="detailLessons">5 lessons</span></span>
                        <span>👥 <span id="detailStudents">1,234 students</span></span>
                    </div>
                </div>
                <button class="btn-large btn-primary" id="enrollBtn">Enroll Now</button>
            </div>
            
            <div class="course-detail-body">
                <div class="detail-section">
                    <h3>What You'll Learn</h3>
                    <ul id="detailObjectives">
                        <!-- Populated by JS -->
                    </ul>
                </div>
                
                <div class="detail-section">
                    <h3>Course Content</h3>
                    <div id="detailContent" class="course-curriculum">
                        <!-- Populated by JS -->
                    </div>
                </div>
                
                <div class="detail-section">
                    <h3>Prerequisites</h3>
                    <p id="detailPrerequisites">No prior experience required</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Toast Notification -->
    <div class="toast" id="toast">
        <span id="toastMessage"></span>
    </div>

    <script src="../js/auth.js"></script>
    <script src="../js/courses.js"></script>
</body>
</html>

