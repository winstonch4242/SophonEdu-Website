// Shared Authentication Logic
// This file should be included in all pages

// Check authentication status and update UI
function checkAuthStatus() {
    const currentUser = localStorage.getItem('currentUser');
    const navActions = document.querySelector('.nav-actions');
    
    if (currentUser && navActions) {
        const user = JSON.parse(currentUser);
        
        // Replace login/register buttons with user menu
        navActions.innerHTML = `
            <span style="color: var(--primary); font-weight: 600; margin-right: 1rem;">👋 ${user.name}</span>
            <button class="btn-secondary" onclick="goToDashboard()">Dashboard</button>
            <button class="btn-secondary" onclick="handleGlobalLogout()">Logout</button>
        `;
    } else if (navActions) {
        // Ensure login/register buttons have proper event listeners
        setupAuthButtons();
    }
}

// Setup auth buttons for non-logged-in users
function setupAuthButtons() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    
    if (loginBtn && !loginBtn.hasAttribute('data-listener')) {
        loginBtn.setAttribute('data-listener', 'true');
        loginBtn.addEventListener('click', () => {
            // Check if we're in a subfolder
            const isInPages = window.location.pathname.includes('/pages/');
            window.location.href = isInPages ? '../index.html#login' : 'index.html#login';
        });
    }
    
    if (registerBtn && !registerBtn.hasAttribute('data-listener')) {
        registerBtn.setAttribute('data-listener', 'true');
        registerBtn.addEventListener('click', () => {
            // Check if we're in a subfolder
            const isInPages = window.location.pathname.includes('/pages/');
            window.location.href = isInPages ? '../index.html#register' : 'index.html#register';
        });
    }
}

// Navigate to appropriate dashboard
function goToDashboard() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const user = JSON.parse(currentUser);
        const isInPages = window.location.pathname.includes('/pages/');
        
        if (user.role === 'admin') {
            window.location.href = isInPages ? 'admin.html' : 'pages/admin.html';
        } else {
            window.location.href = isInPages ? 'profile.html' : 'pages/profile.html';
        }
    }
}

// Global logout function
function handleGlobalLogout() {
    localStorage.removeItem('currentUser');
    showGlobalToast('Logged out successfully', 'success');
    setTimeout(() => {
        const isInPages = window.location.pathname.includes('/pages/');
        window.location.href = isInPages ? '../index.html' : 'index.html';
    }, 1000);
}

// Global toast function
function showGlobalToast(message, type = 'success') {
    let toast = document.getElementById('toast');
    
    // Create toast if it doesn't exist
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        toast.innerHTML = '<span id="toastMessage"></span>';
        document.body.appendChild(toast);
    }
    
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initialize auth check when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAuthStatus);
} else {
    checkAuthStatus();
}

// Make functions globally accessible
window.goToDashboard = goToDashboard;
window.handleGlobalLogout = handleGlobalLogout;
window.showGlobalToast = showGlobalToast;
window.checkAuthStatus = checkAuthStatus;
