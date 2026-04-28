<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="about.aspx.cs" Inherits="SophonEdu.pages.about" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - SophonEdu</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/about.css">
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

    <!-- Hero Section -->
    <section class="about-hero">
        <div class="container">
            <h1 class="animate-fade-in">About SophonEdu</h1>
            <p class="animate-fade-in-delay">Empowering the next generation of developers through interactive learning</p>
        </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
        <div class="container">
            <div class="mission-content">
                <div class="mission-text">
                    <h2>Our Mission</h2>
                    <p>At SophonEdu, we believe that everyone should have access to quality programming education. Our mission is to make learning to code engaging, interactive, and accessible to learners at all levels.</p>
                    <p>We combine cutting-edge technology with proven teaching methods to create an immersive learning experience that keeps you motivated and helps you achieve your goals.</p>
                </div>
                <div class="mission-visual">
                    <div class="visual-card">
                        <span class="visual-icon">🎯</span>
                        <h3>Goal-Oriented</h3>
                        <p>Clear learning paths</p>
                    </div>
                    <div class="visual-card">
                        <span class="visual-icon">🚀</span>
                        <h3>Hands-On</h3>
                        <p>Learn by doing</p>
                    </div>
                    <div class="visual-card">
                        <span class="visual-icon">🏆</span>
                        <h3>Achievement</h3>
                        <p>Track your progress</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
        <div class="container">
            <h2 class="section-title">Why Choose SophonEdu?</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">💻</div>
                    <h3>Interactive Coding</h3>
                    <p>Write and run code directly in your browser with instant feedback</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Progress Tracking</h3>
                    <p>Monitor your learning journey with detailed analytics and insights</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎮</div>
                    <h3>Gamification</h3>
                    <p>Earn XP, unlock badges, and compete on leaderboards</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📚</div>
                    <h3>Comprehensive Content</h3>
                    <p>From foundation to degree-level programming courses</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">✅</div>
                    <h3>Instant Grading</h3>
                    <p>Get immediate feedback on quizzes and exercises</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🌐</div>
                    <h3>Learn Anywhere</h3>
                    <p>Access your courses from any device, anytime</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number" data-target="10000">0</div>
                    <div class="stat-label">Active Students</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" data-target="150">0</div>
                    <div class="stat-label">Courses Available</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" data-target="500">0</div>
                    <div class="stat-label">Interactive Tutorials</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" data-target="95">0</div>
                    <div class="stat-label">Success Rate %</div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of students learning to code with SophonEdu</p>
            <button class="btn-large btn-primary" id="ctaRegisterBtn">Get Started Free</button>
        </div>
    </section>

    <!-- Toast Notification -->
    <div class="toast" id="toast">
        <span id="toastMessage"></span>
    </div>

    <script src="../js/auth.js"></script>
    <script src="../js/about.js"></script>
</body>
</html>

