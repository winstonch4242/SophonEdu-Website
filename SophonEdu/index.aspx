<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="SophonEdu.index" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SophonEdu - Interactive Learning Platform</title>
    <link rel="stylesheet" href="css/style.css">
    <style>
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 9999;
        }

        .modal-content {
            background: white;
            margin: 10% auto;
            padding: 20px;
            width: 300px;
        }
        .modal.show {
            display: block;
        }
    </style>
    </head>
    <body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="logo">
                <a href="index.aspx" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 0.5rem;">
                    <img src="images/logo.png" alt="SophonEdu" class="logo-image">
                </a>
            </div>
            <ul class="nav-menu" id="navMenu">
                <li><a href="index.aspx" class="nav-link">Home</a></li>
                <li><a href="pages/courses.aspx" class="nav-link">Courses</a></li>
                <li><a href="pages/tutorials.aspx" class="nav-link">Tutorials</a></li>
                <li><a href="pages/about.aspx" class="nav-link">About</a></li>
            </ul>
            <div class="nav-actions">
                <button type="button" class="btn-secondary" id="loginBtn">Login</button>
                <button type="button" class="btn-primary" id="registerBtn">Get Started</button>
            </div>
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Main Content Container -->
    <main id="mainContent">
        <!-- Guest View (Landing Page) -->
        <section id="guestView" class="view-section active">
            <!-- Hero Section -->
            <section class="hero" id="home">
                <div class="hero-background">
                    <div class="floating-shape shape-1"></div>
                    <div class="floating-shape shape-2"></div>
                    <div class="floating-shape shape-3"></div>
                </div>
                <div class="hero-content">
                    <h1 class="hero-title animate-fade-in">
                        Master Programming<br>
                        <span class="gradient-text">One Lesson at a Time</span>
                    </h1>
                    <p class="hero-subtitle animate-fade-in-delay">
                        Interactive learning platform with quizzes, achievements, and personalized progress tracking
                    </p>
                    <div class="hero-buttons animate-fade-in-delay-2">
                        <button class="btn-large btn-primary" id="heroRegisterBtn">Start Learning Free</button>
                        <button class="btn-large btn-outline" id="heroExploreBtn">Explore Courses</button>
                    </div>
                </div>
            </section>

            <!-- Course Overview -->
            <section class="course-overview" id="courses">
                <div class="container">
                    <h2 class="section-title">Choose Your Learning Path</h2>
                    <p class="section-subtitle">From foundation to advanced degree-level programming</p>
                    
                    <div class="course-grid">
                        <div class="course-card" data-level="foundation">
                            <div class="course-icon">🎯</div>
                            <h3>Foundation Level</h3>
                            <p>Start your programming journey with basics</p>
                            <ul class="course-features">
                                <li>HTML & CSS Fundamentals</li>
                                <li>JavaScript Basics</li>
                                <li>Problem Solving</li>
                            </ul>
                            <button class="btn-card" onclick="viewCoursesByLevel('foundation')">View Courses</button>
                        </div>
                        
                        <div class="course-card featured" data-level="diploma">
                            <div class="badge">Most Popular</div>
                            <div class="course-icon">🚀</div>
                            <h3>Diploma Level</h3>
                            <p>Build real-world applications and projects</p>
                            <ul class="course-features">
                                <li>Extended JavaScript</li>
                                <li>React & Node.js</li>
                                <li>Database Design</li>
                            </ul>
                            <button class="btn-card" onclick="viewCoursesByLevel('diploma')">View Courses</button>
                        </div>
                        
                        <div class="course-card" data-level="degree">
                            <div class="course-icon">🎓</div>
                            <h3>Degree Level</h3>
                            <p>Master advanced concepts and architectures</p>
                            <ul class="course-features">
                                <li>System Design</li>
                                <li>Data Structures & Algorithms</li>
                                <li>Cloud Architecture</li>
                            </ul>
                            <button class="btn-card" onclick="viewCoursesByLevel('degree')">View Courses</button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Sample Tutorials -->
            <section class="sample-tutorials" id="tutorials">
                <div class="container">
                    <h2 class="section-title">Try Our Sample Tutorials</h2>
                    <p class="section-subtitle">Get a taste of our interactive learning experience</p>
                    
                    <div class="tutorial-grid">
                        <div class="tutorial-card" onclick="window.location.href='pages/tutorials.aspx'">
                            <div class="tutorial-preview">
                                <div class="code-preview">
                                    <span class="code-line"><span class="keyword">function</span> <span class="function">greet</span>() {</span>
                                    <span class="code-line">  <span class="keyword">return</span> <span class="string">"Hello!"</span>;</span>
                                    <span class="code-line">}</span>
                                </div>
                            </div>
                            <div class="tutorial-content">
                                <h3>JavaScript Functions</h3>
                                <p>Learn how to create and use functions</p>
                                <span class="tutorial-duration">⏱️ 15 min</span>
                            </div>
                        </div>
                        
                        <div class="tutorial-card" onclick="window.location.href='pages/tutorials.aspx'">
                            <div class="tutorial-preview">
                                <div class="code-preview">
                                    <span class="code-line"><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"box"</span><span class="tag">&gt;</span></span>
                                    <span class="code-line">  <span class="tag">&lt;h1&gt;</span>Title<span class="tag">&lt;/h1&gt;</span></span>
                                    <span class="code-line"><span class="tag">&lt;/div&gt;</span></span>
                                </div>
                            </div>
                            <div class="tutorial-content">
                                <h3>HTML Structure</h3>
                                <p>Master the building blocks of web pages</p>
                                <span class="tutorial-duration">⏱️ 20 min</span>
                            </div>
                        </div>
                        
                        <div class="tutorial-card" onclick="window.location.href='pages/tutorials.aspx'">
                            <div class="tutorial-preview">
                                <div class="code-preview">
                                    <span class="code-line"><span class="selector">.box</span> {</span>
                                    <span class="code-line">  <span class="property">display</span>: <span class="value">flex</span>;</span>
                                    <span class="code-line">  <span class="property">gap</span>: <span class="value">20px</span>;</span>
                                    <span class="code-line">}</span>
                                </div>
                            </div>
                            <div class="tutorial-content">
                                <h3>CSS Flexbox</h3>
                                <p>Create responsive layouts with ease</p>
                                <span class="tutorial-duration">⏱️ 25 min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Registration Section -->
            <section class="registration-section">
                <div class="container">
                    <div class="registration-card">
                        <h2>Start Your Learning Journey Today</h2>
                        <p>Join thousands of students mastering programming skills</p>
                        <form id="registrationForm" class="registration-form" runat="server">
                            <div class="form-row">
                                <input type="text" id="regName" placeholder="Full Name">
                                <input type="email" id="regEmail" placeholder="Email Address">
                            </div>
                            <div class="form-row">
                                <input type="password" id="regPassword" placeholder="Password (min 6 characters)">
                                <input type="password" id="regConfirmPassword" placeholder="Confirm Password">
                            </div>
                            <div class="form-group-full">
                                <label style="color: var(--white); font-weight: 600; margin-bottom: 1rem; display: block;">Choose Your Learning Path:</label>
                                <div class="learning-path-options">
                                    <label class="path-option">
                                        <input type="radio" name="learningPath" value="foundation">
                                        <div class="path-card">
                                            <span class="path-icon">🎯</span>
                                            <h4>Foundation</h4>
                                            <p>Start from basics</p>
                                        </div>
                                    </label>
                                    <label class="path-option">
                                        <input type="radio" name="learningPath" value="diploma">
                                        <div class="path-card">
                                            <span class="path-icon">🚀</span>
                                            <h4>Diploma</h4>
                                            <p>Build real projects</p>
                                        </div>
                                    </label>
                                    <label class="path-option">
                                        <input type="radio" name="learningPath" value="degree">
                                        <div class="path-card">
                                            <span class="path-icon">🎓</span>
                                            <h4>Degree</h4>
                                            <p>Master advanced topics</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <button type="button" class="btn-large btn-primary">Create Account</button>
                        </form>
                    </div>
                </div>
            </section>
        </section>

        <!-- Member Dashboard -->
        <section id="memberView" class="view-section">
            <div class="dashboard-header">
                <div class="container">
                    <div class="welcome-section">
                        <h1>Welcome back, <span id="memberName">Student</span>! 👋</h1>
                        <p>Continue your learning journey</p>
                    </div>
                    <div class="profile-actions">
                        <button class="btn-icon" id="profileBtn">👤</button>
                        <button class="btn-secondary" id="logoutBtn">Logout</button>
                    </div>
                </div>
            </div>

            <div class="container dashboard-content">
                <!-- Progress Overview -->
                <div class="progress-overview">
                    <div class="stat-card">
                        <div class="stat-icon">📊</div>
                        <div class="stat-content">
                            <h3 id="completionRate">0%</h3>
                            <p>Completion Rate</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">⭐</div>
                        <div class="stat-content">
                            <h3 id="experiencePoints">0 XP</h3>
                            <p>Experience Points</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">🏆</div>
                        <div class="stat-content">
                            <h3 id="badgeCount">0</h3>
                            <p>Badges Earned</p>
                        </div>
                    </div>
                </div>

                <!-- Progress Bar -->
                <div class="progress-section">
                    <h3>Overall Progress</h3>
                    <div class="progress-bar-container">
                        <div class="progress-bar" id="progressBar">
                            <div class="progress-fill" id="progressFill"></div>
                        </div>
                        <span class="progress-text" id="progressText">0%</span>
                    </div>
                </div>

                <!-- Badge Gallery -->
                <div class="badge-gallery">
                    <h3>Achievement Badges</h3>
                    <div class="badge-grid" id="badgeGrid">
                        <!-- Badges will be populated by JS -->
                    </div>
                </div>

                <!-- Lessons Section -->
                <div class="lessons-section">
                    <div class="section-header">
                        <h3>Your Lessons</h3>
                        <div class="filter-buttons">
                            <button class="filter-btn active" data-filter="all">All</button>
                            <button class="filter-btn" data-filter="foundation">Foundation</button>
                            <button class="filter-btn" data-filter="diploma">Diploma</button>
                            <button class="filter-btn" data-filter="degree">Degree</button>
                        </div>
                    </div>
                    <div class="lesson-grid" id="lessonGrid">
                        <!-- Lessons will be populated by JS -->
                    </div>
                </div>
            </div>
        </section>

        <!-- Admin Panel -->
        <section id="adminView" class="view-section">
            <div class="admin-header">
                <div class="container">
                    <h1>Admin Panel</h1>
                    <button class="btn-secondary" id="adminLogoutBtn">Logout</button>
                </div>
            </div>

            <div class="container admin-content">
                <div class="admin-tabs">
                    <button class="tab-btn active" data-tab="lessons">Manage Lessons</button>
                    <button class="tab-btn" data-tab="students">Manage Students</button>
                </div>

                <!-- Lessons Management -->
                <div class="tab-content active" id="lessonsTab">
                    <div class="crud-header">
                        <h2>Lessons Management</h2>
                        <button class="btn-primary" id="addLessonBtn">+ Add New Lesson</button>
                    </div>
                    
                    <div class="crud-table">
                        <table id="lessonsTable">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Level</th>
                                    <th>Duration</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="lessonsTableBody">
                                <!-- Populated by JS -->
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Students Management -->
                <div class="tab-content" id="studentsTab">
                    <div class="crud-header">
                        <h2>Students Management</h2>
                    </div>
                    
                    <div class="crud-table">
                        <table id="studentsTable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Level</th>
                                    <th>Progress</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="studentsTableBody">
                                <!-- Populated by JS -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Lesson Viewer Modal -->
    <div class="modal" id="lessonModal">
        <div class="modal-content lesson-viewer">
            <button class="modal-close" id="closeLessonModal">&times;</button>
            <div class="lesson-layout">
                <div class="lesson-notes">
                    <h2 id="lessonTitle">Lesson Title</h2>
                    <div id="lessonNotes">
                        <!-- Lesson content -->
                    </div>
                </div>
                <div class="lesson-code">
                    <h3>Code Examples</h3>
                    <div id="lessonCode" class="code-block">
                        <!-- Code examples -->
                    </div>
                </div>
                <div class="lesson-exercises">
                    <h3>Practice Exercises</h3>
                    <div id="lessonExercises">
                        <!-- Exercises -->
                    </div>
                    <button class="btn-primary" id="startQuizBtn">Start Quiz</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Quiz Modal -->
    <div class="modal" id="quizModal">
        <div class="modal-content quiz-container">
            <button class="modal-close" id="closeQuizModal">&times;</button>
            <h2>Quiz Time! 🎯</h2>
            <div id="quizContent">
                <!-- Quiz questions -->
            </div>
            <button class="btn-primary" id="submitQuizBtn">Submit Answers</button>
        </div>
    </div>

    <!-- CRUD Modal -->
    <div class="modal" id="crudModal">
        <div class="modal-content crud-form-container">
            <button class="modal-close" id="closeCrudModal">&times;</button>
            <h2 id="crudModalTitle">Add Lesson</h2>
            <form id="crudForm">
                <div id="crudFormFields">
                    <!-- Form fields populated by JS -->
                </div>
                <div class="form-actions">
                    <button type="button" class="btn-secondary" id="cancelCrudBtn">Cancel</button>
                    <button type="submit" class="btn-primary">Save</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Login Modal -->
    <div class="modal" id="loginModal">
        <div class="modal-content login-container">
            <button class="modal-close" id="closeLoginModal">&times;</button>
            <h2>Welcome Back</h2>
            <div id="loginForm">
                <input type="email" id="loginEmail" placeholder="Email Address" runat="server" required>
                <input type="password" id="loginPassword" placeholder="Password" runat="server" required>
                <button type="submit" id="loginBtnModal" class="btn-primary" runat="server" OnClick="LoginBtnModal">Login</button>
            </div>
            <p class="div-footer">Don't have an account? <a href="#" id="switchToRegister">Register here</a></p>
        </div>
    </div>

    <!-- Toast Notification -->
    <div class="toast" id="toast">
        <span id="toastMessage"></span>
    </div>

    <!-- <script src="js/auth.js"></script>--> <!--this file is overwriting the modal in index.aspx-->
    <script src="js/app.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const loginBtn = document.getElementById("loginBtn");
            const loginModal = document.getElementById("loginModal");
            const closeLoginModal = document.getElementById("closeLoginModal");
            loginBtn.addEventListener("click", function () {
                loginModal.style.display = "block";
            });
            closeLoginModal.addEventListener("click", function () {
                loginModal.style.display = "none";
            });
            window.addEventListener("click", function (event) {
                if (event.target === loginModal) {
                    loginModal.style.display = "none";
                }
            });
        });
    </script>
</body>
</html>

