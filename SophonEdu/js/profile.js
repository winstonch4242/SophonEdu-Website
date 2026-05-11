// Sample user data — static defaults, overwritten by session on load
const userData = {
    name: 'Student',
    email: '',
    level: 'Foundation',
    xp: 1250,
    coursesCompleted: 3,
    streak: 7,
    achievements: [
        { icon: '🎯', name: 'First Steps', description: 'Completed first lesson' },
        { icon: '⚡', name: 'Quick Learner', description: 'Finished 3 courses' },
        { icon: '🔥', name: 'On Fire', description: '7 day streak' }
    ],
    recentActivity: [
        { icon: '✅', title: 'Completed CSS Flexbox', description: 'Foundation Level', time: '2 hours ago' },
        { icon: '🏆', title: 'Earned Badge: Quick Learner', description: 'Achievement unlocked', time: '5 hours ago' },
        { icon: '📚', title: 'Started JavaScript Basics', description: 'Diploma Level', time: '1 day ago' },
        { icon: '⭐', title: 'Quiz Score: 95%', description: 'HTML Fundamentals', time: '2 days ago' }
    ],
    enrolledCourses: [
        { id: 1, title: 'HTML Fundamentals', progress: 100 },
        { id: 2, title: 'CSS Styling Mastery', progress: 75 },
        { id: 3, title: 'JavaScript Basics', progress: 40 },
        { id: 4, title: 'React Introduction', progress: 15 }
    ]
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    loadUserData();
    setupEventListeners();
    animateProgressCircles();
});

// ✅ FIXED: Use ASP.NET session variable instead of localStorage
function checkAuth() {
    if (typeof sessionEmail === 'undefined' || !sessionEmail) {
        // Session expired or not set — redirect to login
        window.location.href = '../index.aspx';
        return;
    }
}

// ✅ FIXED: Load user data from session variable
function loadUserData() {
    if (typeof sessionEmail !== 'undefined' && sessionEmail) {
        userData.email = sessionEmail;
        // Derive a display name from email (e.g. "alice.tan@email.com" → "Alice Tan")
        const emailPrefix = sessionEmail.split('@')[0]; // "alice.tan"
        userData.name = emailPrefix
            .split(/[._-]/)
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' '); // "Alice Tan"
    }

    // Update profile header
    document.getElementById('profileName').textContent = userData.name;
    document.getElementById('profileEmail').textContent = userData.email;
    document.getElementById('profileLevel').textContent = `${userData.level} Level`;

    // Update avatar initials
    const initials = userData.name.split(' ').map(n => n[0]).join('').toUpperCase();
    document.getElementById('avatarInitials').textContent = initials;

    // Update quick stats
    document.getElementById('totalXP').textContent = userData.xp.toLocaleString();
    document.getElementById('coursesCompleted').textContent = userData.coursesCompleted;
    document.getElementById('currentStreak').textContent = userData.streak;

    renderAchievements();
    renderActivity();
    renderCourses();
}

function setupEventListeners() {
    document.getElementById('hamburger')?.addEventListener('click', toggleMobileMenu);

    document.getElementById('editProfileBtn')?.addEventListener('click', openEditProfile);
    document.getElementById('closeEditProfile')?.addEventListener('click', () => closeModal('editProfileModal'));
    document.getElementById('cancelEdit')?.addEventListener('click', () => closeModal('editProfileModal'));
    document.getElementById('editProfileForm')?.addEventListener('submit', handleProfileUpdate);

    document.getElementById('logoutBtn')?.addEventListener('click', handleLogout);

    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
}

function renderAchievements() {
    const list = document.getElementById('achievementList');
    if (!list) return;

    list.innerHTML = userData.achievements.map(achievement => `
        <div class="achievement-item">
            <span class="achievement-icon">${achievement.icon}</span>
            <div class="achievement-info">
                <h4>${achievement.name}</h4>
                <p>${achievement.description}</p>
            </div>
        </div>
    `).join('');
}

function renderActivity() {
    const list = document.getElementById('activityList');
    if (!list) return;

    list.innerHTML = userData.recentActivity.map(activity => `
        <div class="activity-item">
            <span class="activity-icon">${activity.icon}</span>
            <div class="activity-details">
                <h4>${activity.title}</h4>
                <p>${activity.description}</p>
            </div>
            <span class="activity-time">${activity.time}</span>
        </div>
    `).join('');
}

function renderCourses() {
    const grid = document.getElementById('enrolledCourses');
    if (!grid) return;

    grid.innerHTML = userData.enrolledCourses.map(course => `
        <div class="enrolled-course-card" onclick="window.location.href='courses.aspx'">
            <h4>${course.title}</h4>
            <div class="course-progress-bar">
                <div class="course-progress-fill" style="width: ${course.progress}%"></div>
            </div>
            <p class="course-progress-text">${course.progress}% complete</p>
        </div>
    `).join('');
}

function animateProgressCircles() {
    const circles = document.querySelectorAll('.progress-circle');

    circles.forEach(circle => {
        const progress = parseInt(circle.dataset.progress);
        const ring = circle.querySelector('.progress-ring');
        const value = circle.querySelector('.progress-value');

        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (progress / 100) * circumference;

        setTimeout(() => {
            ring.style.strokeDashoffset = offset;
            value.textContent = `${progress}%`;
        }, 300);
    });
}

function openEditProfile() {
    document.getElementById('editName').value = userData.name;
    document.getElementById('editEmail').value = userData.email;
    openModal('editProfileModal');
}

// ✅ FIXED: Removed localStorage — updates in-memory only
// To persist changes, you'd need a server-side handler
function handleProfileUpdate(e) {
    e.preventDefault();

    const newName = document.getElementById('editName').value.trim();
    const newEmail = document.getElementById('editEmail').value.trim();

    if (!newName || !newEmail) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    userData.name = newName;
    userData.email = newEmail;

    loadUserData();
    closeModal('editProfileModal');
    showToast('Profile updated successfully!', 'success');
}

// ✅ FIXED: Redirect to logout.aspx to clear ASP.NET session
function handleLogout() {
    showToast('Logged out successfully', 'success');
    setTimeout(() => {
        window.location.href = '../logout.aspx';
    }, 1000);
}

function openModal(modalId) {
    document.getElementById(modalId)?.classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId)?.classList.remove('active');
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    toastMessage.textContent = message;
    toast.className = `toast ${type} show`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function toggleMobileMenu() {
    document.getElementById('navMenu')?.classList.toggle('active');
}
