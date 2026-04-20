// Sample user data
const userData = {
    name: 'John Doe',
    email: 'john@example.com',
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

function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = '../index.aspx';
    }
}

function loadUserData() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        userData.name = user.name || userData.name;
        userData.email = user.email || userData.email;
        userData.level = user.level || userData.level;
        userData.xp = user.xp || userData.xp;
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

    // Render achievements
    renderAchievements();

    // Render activity
    renderActivity();

    // Render courses
    renderCourses();
}

function setupEventListeners() {
    // Mobile menu
    document.getElementById('hamburger')?.addEventListener('click', toggleMobileMenu);

    // Edit profile
    document.getElementById('editProfileBtn')?.addEventListener('click', openEditProfile);
    document.getElementById('closeEditProfile')?.addEventListener('click', () => closeModal('editProfileModal'));
    document.getElementById('cancelEdit')?.addEventListener('click', () => closeModal('editProfileModal'));
    document.getElementById('editProfileForm')?.addEventListener('submit', handleProfileUpdate);

    // Logout
    document.getElementById('logoutBtn')?.addEventListener('click', handleLogout);

    // Scroll effect
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

function handleProfileUpdate(e) {
    e.preventDefault();

    const newName = document.getElementById('editName').value.trim();
    const newEmail = document.getElementById('editEmail').value.trim();
    const newPassword = document.getElementById('newPassword').value;

    if (!newName || !newEmail) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    // Update user data
    userData.name = newName;
    userData.email = newEmail;

    // Update localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    currentUser.name = newName;
    currentUser.email = newEmail;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Reload data
    loadUserData();

    closeModal('editProfileModal');
    showToast('Profile updated successfully!', 'success');
}

function handleLogout() {
    localStorage.removeItem('currentUser');
    showToast('Logged out successfully', 'success');
    setTimeout(() => {
        window.location.href = '../index.aspx';
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
