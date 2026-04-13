// State Management
const state = {
    currentUser: null,
    currentView: 'guest',
    lessons: [],
    students: [],
    badges: [
        { id: 1, name: 'First Steps', icon: '🎯', unlocked: false },
        { id: 2, name: 'Quick Learner', icon: '⚡', unlocked: false },
        { id: 3, name: 'Code Master', icon: '💻', unlocked: false },
        { id: 4, name: 'Quiz Champion', icon: '🏆', unlocked: false },
        { id: 5, name: 'Persistent', icon: '🔥', unlocked: false },
        { id: 6, name: 'Perfectionist', icon: '⭐', unlocked: false }
    ],
    currentLesson: null,
    quizAnswers: {}
};

// Sample Data
const sampleLessons = [
    {
        id: 1,
        title: 'Introduction to HTML',
        level: 'foundation',
        duration: '30 min',
        status: 'active',
        progress: 0,
        notes: 'HTML is the standard markup language for creating web pages. It describes the structure of a web page.',
        code: '<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n  </body>\n</html>',
        exercises: 'Create a simple HTML page with a heading and paragraph.',
        quiz: [
            {
                question: 'What does HTML stand for?',
                type: 'mcq',
                options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
                correct: 0
            },
            {
                question: 'HTML is a programming language.',
                type: 'boolean',
                correct: false
            }
        ]
    },
    {
        id: 2,
        title: 'CSS Fundamentals',
        level: 'foundation',
        duration: '45 min',
        status: 'active',
        progress: 0,
        notes: 'CSS is used to style and layout web pages. It controls colors, fonts, spacing, and positioning.',
        code: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}',
        exercises: 'Style a div element with flexbox properties.',
        quiz: [
            {
                question: 'Which property is used to change text color?',
                type: 'mcq',
                options: ['color', 'text-color', 'font-color', 'text-style'],
                correct: 0
            }
        ]
    },
    {
        id: 3,
        title: 'JavaScript Basics',
        level: 'diploma',
        duration: '60 min',
        status: 'active',
        progress: 0,
        notes: 'JavaScript is a programming language that enables interactive web pages. It is an essential part of web applications.',
        code: 'function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet("World"));',
        exercises: 'Create a function that calculates the sum of two numbers.',
        quiz: [
            {
                question: 'JavaScript is case-sensitive.',
                type: 'boolean',
                correct: true
            }
        ]
    },
    {
        id: 4,
        title: 'Advanced React Patterns',
        level: 'degree',
        duration: '90 min',
        status: 'active',
        progress: 0,
        notes: 'Learn advanced React patterns including hooks, context, and performance optimization.',
        code: 'const useCustomHook = () => {\n  const [state, setState] = useState(null);\n  return [state, setState];\n};',
        exercises: 'Implement a custom hook for data fetching.',
        quiz: [
            {
                question: 'Which hook is used for side effects?',
                type: 'mcq',
                options: ['useEffect', 'useState', 'useContext', 'useMemo'],
                correct: 0
            }
        ]
    }
];

const sampleStudents = [
    { id: 1, name: 'John Doe', email: 'john@example.com', level: 'foundation', progress: 45 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', level: 'diploma', progress: 78 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', level: 'degree', progress: 23 }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    loadFromLocalStorage();
    
    // Check if user should be redirected to dashboard
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const user = JSON.parse(currentUser);
        // If on index page and logged in, check for hash navigation
        if (window.location.hash === '#admin' && user.role === 'admin') {
            switchView('admin');
        } else if (user.role === 'member' && window.location.pathname.includes('index.html')) {
            // Don't auto-redirect, let them browse
        }
    }
});

function initializeApp() {
    state.lessons = [...sampleLessons];
    state.students = [...sampleStudents];
    
    // Check for existing session but don't auto-switch view
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        state.currentUser = JSON.parse(savedUser);
        // Only switch view if explicitly navigating to admin
        if (window.location.hash === '#admin' && state.currentUser.role === 'admin') {
            switchView('admin');
        }
    }
}

function setupEventListeners() {
    // Navigation
    document.getElementById('hamburger')?.addEventListener('click', toggleMobileMenu);
    
    // Smooth scroll for internal links only (starting with #)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = e.target.getAttribute('href');
            // Only prevent default and smooth scroll for anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // For regular links (courses.html, etc.), let them navigate normally
        });
    });

    // Auth buttons
    document.getElementById('loginBtn')?.addEventListener('click', () => openModal('loginModal'));
    document.getElementById('registerBtn')?.addEventListener('click', () => {
        document.querySelector('.registration-section')?.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('heroRegisterBtn')?.addEventListener('click', () => {
        document.querySelector('.registration-section')?.scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('heroExploreBtn')?.addEventListener('click', () => {
        document.querySelector('.course-overview')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Forms
    document.getElementById('registrationForm')?.addEventListener('submit', handleRegistration);
    document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
    
    // Logout
    document.getElementById('logoutBtn')?.addEventListener('click', handleLogout);
    document.getElementById('adminLogoutBtn')?.addEventListener('click', handleLogout);
    
    // Profile button
    document.getElementById('profileBtn')?.addEventListener('click', () => {
        window.location.href = 'pages/profile.html';
    });

    // Modals
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            closeModal(e.target.closest('.modal').id);
        });
    });

    // Click outside modal to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // Admin tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tab = e.target.dataset.tab;
            switchAdminTab(tab);
        });
    });

    // Admin CRUD
    document.getElementById('addLessonBtn')?.addEventListener('click', () => openCrudModal('add', 'lesson'));
    document.getElementById('crudForm')?.addEventListener('submit', handleCrudSubmit);
    document.getElementById('cancelCrudBtn')?.addEventListener('click', () => closeModal('crudModal'));

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterLessons(e.target.dataset.filter);
        });
    });

    // Lesson viewer
    document.getElementById('closeLessonModal')?.addEventListener('click', () => closeModal('lessonModal'));
    document.getElementById('startQuizBtn')?.addEventListener('click', startQuiz);

    // Quiz
    document.getElementById('closeQuizModal')?.addEventListener('click', () => closeModal('quizModal'));
    document.getElementById('submitQuizBtn')?.addEventListener('click', submitQuiz);

    // Switch to register from login
    document.getElementById('switchToRegister')?.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal('loginModal');
        document.querySelector('.registration-section')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
}

// View Management
function switchView(view) {
    state.currentView = view;
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });
    
    if (view === 'guest') {
        document.getElementById('guestView')?.classList.add('active');
        document.querySelector('.nav-actions').style.display = 'flex';
    } else if (view === 'member') {
        document.getElementById('memberView')?.classList.add('active');
        document.querySelector('.nav-actions').style.display = 'none';
        renderMemberDashboard();
    } else if (view === 'admin') {
        document.getElementById('adminView')?.classList.add('active');
        document.querySelector('.nav-actions').style.display = 'none';
        renderAdminPanel();
    }
    
    window.scrollTo(0, 0);
}

// Authentication
function handleRegistration(e) {
    e.preventDefault();
    
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const learningPath = document.querySelector('input[name="learningPath"]:checked')?.value;
    
    // Validation
    if (!name || !email || !password || !confirmPassword || !learningPath) {
        showToast('Please fill in all fields and select a learning path', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showToast('Please enter a valid email', 'error');
        return;
    }
    
    if (password.length < 6) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
    }
    
    // Create user
    const user = {
        id: Date.now(),
        name,
        email,
        level: learningPath,
        role: 'member',
        progress: 0,
        xp: 0,
        badges: []
    };
    
    state.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    showToast(`Welcome to SophonEdu! Your ${learningPath} learning path is ready.`, 'success');
    setTimeout(() => {
        switchView('member');
    }, 1500);
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    // Demo login logic
    if (email === 'admin@sophonedu.com' && password === 'admin123') {
        state.currentUser = {
            id: 0,
            name: 'Admin',
            email,
            role: 'admin'
        };
        localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
        closeModal('loginModal');
        showToast('Welcome back, Admin!', 'success');
        setTimeout(() => switchView('admin'), 1000);
    } else if (email && password) {
        // Demo member login
        state.currentUser = {
            id: Date.now(),
            name: email.split('@')[0],
            email,
            role: 'member',
            level: 'foundation',
            progress: 35,
            xp: 450,
            badges: [1, 2]
        };
        localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
        closeModal('loginModal');
        showToast('Welcome back!', 'success');
        setTimeout(() => switchView('member'), 1000);
    } else {
        showToast('Please enter email and password', 'error');
    }
}

function handleLogout() {
    state.currentUser = null;
    localStorage.removeItem('currentUser');
    showToast('Logged out successfully', 'success');
    setTimeout(() => switchView('guest'), 1000);
}

// Member Dashboard
function renderMemberDashboard() {
    if (!state.currentUser) return;
    
    // Update welcome message
    document.getElementById('memberName').textContent = state.currentUser.name;
    
    // Update stats
    const progress = state.currentUser.progress || 0;
    const xp = state.currentUser.xp || 0;
    const badgeCount = state.currentUser.badges?.length || 0;
    
    document.getElementById('completionRate').textContent = `${progress}%`;
    document.getElementById('experiencePoints').textContent = `${xp} XP`;
    document.getElementById('badgeCount').textContent = badgeCount;
    
    // Update progress bar
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    setTimeout(() => {
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;
    }, 300);
    
    // Render badges
    renderBadges();
    
    // Render lessons
    renderLessons();
}

function renderBadges() {
    const badgeGrid = document.getElementById('badgeGrid');
    if (!badgeGrid) return;
    
    const userBadges = state.currentUser?.badges || [];
    
    badgeGrid.innerHTML = state.badges.map(badge => {
        const unlocked = userBadges.includes(badge.id);
        return `
            <div class="badge-item ${unlocked ? '' : 'locked'}">
                <span class="badge-icon">${badge.icon}</span>
                <span class="badge-name">${badge.name}</span>
            </div>
        `;
    }).join('');
}

function renderLessons(filter = 'all') {
    const lessonGrid = document.getElementById('lessonGrid');
    if (!lessonGrid) return;
    
    const filteredLessons = filter === 'all' 
        ? state.lessons 
        : state.lessons.filter(l => l.level === filter);
    
    lessonGrid.innerHTML = filteredLessons.map(lesson => `
        <div class="lesson-card" onclick="openLesson(${lesson.id})">
            <h4>${lesson.title}</h4>
            <div class="lesson-meta">
                <span>📚 ${lesson.level}</span>
                <span>⏱️ ${lesson.duration}</span>
            </div>
            <div class="lesson-progress">
                <div class="lesson-progress-fill" style="width: ${lesson.progress}%"></div>
            </div>
        </div>
    `).join('');
}

function filterLessons(filter) {
    renderLessons(filter);
}

// Lesson Viewer
function openLesson(lessonId) {
    const lesson = state.lessons.find(l => l.id === lessonId);
    if (!lesson) return;
    
    state.currentLesson = lesson;
    
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonNotes').innerHTML = `<p>${lesson.notes}</p>`;
    document.getElementById('lessonCode').innerHTML = `<pre>${lesson.code}</pre>`;
    document.getElementById('lessonExercises').innerHTML = `<p>${lesson.exercises}</p>`;
    
    openModal('lessonModal');
}

// Quiz System
function startQuiz() {
    if (!state.currentLesson || !state.currentLesson.quiz) return;
    
    closeModal('lessonModal');
    state.quizAnswers = {};
    
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = state.currentLesson.quiz.map((q, index) => {
        if (q.type === 'mcq') {
            return `
                <div class="quiz-question">
                    <h3>Question ${index + 1}</h3>
                    <p>${q.question}</p>
                    <div class="quiz-options">
                        ${q.options.map((opt, i) => `
                            <label class="quiz-option">
                                <input type="radio" name="q${index}" value="${i}">
                                ${opt}
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="quiz-question">
                    <h3>Question ${index + 1}</h3>
                    <p>${q.question}</p>
                    <div class="quiz-options">
                        <label class="quiz-option">
                            <input type="radio" name="q${index}" value="true">
                            True
                        </label>
                        <label class="quiz-option">
                            <input type="radio" name="q${index}" value="false">
                            False
                        </label>
                    </div>
                </div>
            `;
        }
    }).join('');
    
    openModal('quizModal');
}

function submitQuiz() {
    if (!state.currentLesson) return;
    
    const quiz = state.currentLesson.quiz;
    let correct = 0;
    
    quiz.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected) {
            const answer = q.type === 'boolean' ? selected.value === 'true' : parseInt(selected.value);
            if (answer === q.correct) {
                correct++;
            }
        }
    });
    
    const score = Math.round((correct / quiz.length) * 100);
    const xpGained = correct * 50;
    
    // Update user progress
    if (state.currentUser) {
        state.currentUser.xp = (state.currentUser.xp || 0) + xpGained;
        state.currentLesson.progress = Math.max(state.currentLesson.progress, score);
        
        // Update overall progress
        const totalProgress = state.lessons.reduce((sum, l) => sum + l.progress, 0);
        state.currentUser.progress = Math.round(totalProgress / state.lessons.length);
        
        // Unlock badges
        if (state.currentUser.xp >= 100 && !state.currentUser.badges.includes(1)) {
            state.currentUser.badges.push(1);
            showToast('🎯 Badge Unlocked: First Steps!', 'success');
        }
        if (score === 100 && !state.currentUser.badges.includes(6)) {
            state.currentUser.badges.push(6);
            showToast('⭐ Badge Unlocked: Perfectionist!', 'success');
        }
        
        localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    }
    
    // Show results
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = `
        <div class="quiz-result">
            <h3>Quiz Complete!</h3>
            <div class="quiz-score">${score}%</div>
            <p>You got ${correct} out of ${quiz.length} questions correct</p>
            <p>+${xpGained} XP earned!</p>
        </div>
    `;
    
    document.getElementById('submitQuizBtn').style.display = 'none';
    
    setTimeout(() => {
        closeModal('quizModal');
        renderMemberDashboard();
        showToast(`Great job! You scored ${score}%`, 'success');
    }, 3000);
}

// Admin Panel
function renderAdminPanel() {
    renderLessonsTable();
    renderStudentsTable();
}

function switchAdminTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tab}"]`)?.classList.add('active');
    document.getElementById(`${tab}Tab`)?.classList.add('active');
}

function renderLessonsTable() {
    const tbody = document.getElementById('lessonsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = state.lessons.map(lesson => `
        <tr>
            <td>${lesson.title}</td>
            <td>${lesson.level}</td>
            <td>${lesson.duration}</td>
            <td>${lesson.status}</td>
            <td class="action-buttons">
                <button class="btn-edit" onclick="editLesson(${lesson.id})">Edit</button>
                <button class="btn-delete" onclick="deleteLesson(${lesson.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

function renderStudentsTable() {
    const tbody = document.getElementById('studentsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = state.students.map(student => `
        <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.level}</td>
            <td>${student.progress}%</td>
            <td class="action-buttons">
                <button class="btn-edit" onclick="editStudent(${student.id})">Edit</button>
                <button class="btn-delete" onclick="deleteStudent(${student.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

// CRUD Operations
function openCrudModal(action, type, id = null) {
    const modal = document.getElementById('crudModal');
    const title = document.getElementById('crudModalTitle');
    const fields = document.getElementById('crudFormFields');
    
    state.crudAction = action;
    state.crudType = type;
    state.crudId = id;
    
    title.textContent = `${action === 'add' ? 'Add' : 'Edit'} ${type === 'lesson' ? 'Lesson' : 'Student'}`;
    
    if (type === 'lesson') {
        const lesson = id ? state.lessons.find(l => l.id === id) : {};
        fields.innerHTML = `
            <input type="text" id="lessonTitle" placeholder="Lesson Title" value="${lesson.title || ''}" required>
            <select id="lessonLevel" required>
                <option value="">Select Level</option>
                <option value="foundation" ${lesson.level === 'foundation' ? 'selected' : ''}>Foundation</option>
                <option value="diploma" ${lesson.level === 'diploma' ? 'selected' : ''}>Diploma</option>
                <option value="degree" ${lesson.level === 'degree' ? 'selected' : ''}>Degree</option>
            </select>
            <input type="text" id="lessonDuration" placeholder="Duration (e.g., 30 min)" value="${lesson.duration || ''}" required>
            <textarea id="lessonNotes" placeholder="Lesson Notes">${lesson.notes || ''}</textarea>
            <textarea id="lessonCode" placeholder="Code Examples">${lesson.code || ''}</textarea>
        `;
    } else {
        const student = id ? state.students.find(s => s.id === id) : {};
        fields.innerHTML = `
            <input type="text" id="studentName" placeholder="Student Name" value="${student.name || ''}" required>
            <input type="email" id="studentEmail" placeholder="Email" value="${student.email || ''}" required>
            <select id="studentLevel" required>
                <option value="">Select Level</option>
                <option value="foundation" ${student.level === 'foundation' ? 'selected' : ''}>Foundation</option>
                <option value="diploma" ${student.level === 'diploma' ? 'selected' : ''}>Diploma</option>
                <option value="degree" ${student.level === 'degree' ? 'selected' : ''}>Degree</option>
            </select>
        `;
    }
    
    openModal('crudModal');
}

function handleCrudSubmit(e) {
    e.preventDefault();
    
    if (state.crudType === 'lesson') {
        const lessonData = {
            title: document.getElementById('lessonTitle').value,
            level: document.getElementById('lessonLevel').value,
            duration: document.getElementById('lessonDuration').value,
            notes: document.getElementById('lessonNotes').value,
            code: document.getElementById('lessonCode').value,
            status: 'active',
            progress: 0
        };
        
        if (state.crudAction === 'add') {
            lessonData.id = Date.now();
            state.lessons.push(lessonData);
            showToast('Lesson added successfully', 'success');
        } else {
            const index = state.lessons.findIndex(l => l.id === state.crudId);
            if (index !== -1) {
                state.lessons[index] = { ...state.lessons[index], ...lessonData };
                showToast('Lesson updated successfully', 'success');
            }
        }
        
        renderLessonsTable();
    } else {
        const studentData = {
            name: document.getElementById('studentName').value,
            email: document.getElementById('studentEmail').value,
            level: document.getElementById('studentLevel').value,
            progress: 0
        };
        
        if (state.crudAction === 'add') {
            studentData.id = Date.now();
            state.students.push(studentData);
            showToast('Student added successfully', 'success');
        } else {
            const index = state.students.findIndex(s => s.id === state.crudId);
            if (index !== -1) {
                state.students[index] = { ...state.students[index], ...studentData };
                showToast('Student updated successfully', 'success');
            }
        }
        
        renderStudentsTable();
    }
    
    closeModal('crudModal');
}

function editLesson(id) {
    openCrudModal('edit', 'lesson', id);
}

function deleteLesson(id) {
    if (confirm('Are you sure you want to delete this lesson?')) {
        state.lessons = state.lessons.filter(l => l.id !== id);
        renderLessonsTable();
        showToast('Lesson deleted successfully', 'success');
    }
}

function editStudent(id) {
    openCrudModal('edit', 'student', id);
}

function deleteStudent(id) {
    if (confirm('Are you sure you want to delete this student?')) {
        state.students = state.students.filter(s => s.id !== id);
        renderStudentsTable();
        showToast('Student deleted successfully', 'success');
    }
}

// Utility Functions
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

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function toggleMobileMenu() {
    document.getElementById('navMenu')?.classList.toggle('active');
}

function loadFromLocalStorage() {
    // Load any saved data from localStorage
    const savedLessons = localStorage.getItem('lessons');
    if (savedLessons) {
        state.lessons = JSON.parse(savedLessons);
    }
}

// Make functions globally accessible
window.openLesson = openLesson;
window.editLesson = editLesson;
window.deleteLesson = deleteLesson;
window.editStudent = editStudent;
window.deleteStudent = deleteStudent;
window.viewCoursesByLevel = viewCoursesByLevel;

// View courses by level function
function viewCoursesByLevel(level) {
    // Store the selected level in sessionStorage
    sessionStorage.setItem('selectedLevel', level);
    // Redirect to courses page
    window.location.href = 'pages/courses.html';
}
