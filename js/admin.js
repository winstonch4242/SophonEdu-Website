// Admin Panel JavaScript

// State Management
const adminState = {
    courses: [],
    lessons: [],
    students: [],
    currentEditId: null,
    currentEditType: null
};

// Sample Data
const sampleCourses = [
    {
        id: 1,
        title: 'HTML Fundamentals',
        description: 'Learn the building blocks of web development',
        level: 'foundation',
        topic: 'html',
        duration: '4 hours',
        lessons: 8,
        students: 2543,
        icon: '📄'
    },
    {
        id: 2,
        title: 'CSS Styling Mastery',
        description: 'Master CSS to create beautiful designs',
        level: 'foundation',
        topic: 'css',
        duration: '6 hours',
        lessons: 10,
        students: 2198,
        icon: '🎨'
    },
    {
        id: 3,
        title: 'JavaScript Essentials',
        description: 'Master JavaScript fundamentals',
        level: 'foundation',
        topic: 'javascript',
        duration: '8 hours',
        lessons: 12,
        students: 3421,
        icon: '⚡'
    },
    {
        id: 4,
        title: 'Advanced JavaScript',
        description: 'Deep dive into advanced concepts',
        level: 'diploma',
        topic: 'javascript',
        duration: '10 hours',
        lessons: 15,
        students: 1876,
        icon: '🔥'
    },
    {
        id: 5,
        title: 'React Fundamentals',
        description: 'Build modern web applications',
        level: 'diploma',
        topic: 'react',
        duration: '12 hours',
        lessons: 18,
        students: 2954,
        icon: '⚛️'
    }
];

const sampleLessons = [
    {
        id: 1,
        title: 'Introduction to HTML',
        level: 'foundation',
        duration: '30 min',
        status: 'active',
        progress: 0
    },
    {
        id: 2,
        title: 'CSS Fundamentals',
        level: 'foundation',
        duration: '45 min',
        status: 'active',
        progress: 0
    },
    {
        id: 3,
        title: 'JavaScript Basics',
        level: 'diploma',
        duration: '60 min',
        status: 'active',
        progress: 0
    }
];

const sampleStudents = [
    { id: 1, name: 'John Doe', email: 'john@example.com', level: 'foundation', progress: 45 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', level: 'diploma', progress: 78 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', level: 'degree', progress: 23 }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAdminAuth();
    initializeData();
    setupEventListeners();
    renderAllTables();
    updateAnalytics();
});

// Check Admin Authentication
function checkAdminAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = '../index.html';
        return;
    }
    
    const user = JSON.parse(currentUser);
    if (user.role !== 'admin') {
        showToast('Access denied. Admin only.', 'error');
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 2000);
        return;
    }
    
    document.getElementById('adminName').textContent = user.name;
}

// Initialize Data
function initializeData() {
    // Load from localStorage or use sample data
    const savedCourses = localStorage.getItem('courses');
    adminState.courses = savedCourses ? JSON.parse(savedCourses) : [...sampleCourses];
    
    const savedLessons = localStorage.getItem('lessons');
    adminState.lessons = savedLessons ? JSON.parse(savedLessons) : [...sampleLessons];
    
    const savedStudents = localStorage.getItem('students');
    adminState.students = savedStudents ? JSON.parse(savedStudents) : [...sampleStudents];
}

// Setup Event Listeners
function setupEventListeners() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchTab(e.target.closest('.tab-btn').dataset.tab);
        });
    });
    
    // Add buttons
    document.getElementById('addCourseBtn')?.addEventListener('click', () => openCourseModal('add'));
    document.getElementById('addLessonBtn')?.addEventListener('click', () => openLessonModal('add'));
    
    // Modal close buttons
    document.getElementById('closeCourseModal')?.addEventListener('click', () => closeModal('courseModal'));
    document.getElementById('closeLessonModal')?.addEventListener('click', () => closeModal('lessonModal'));
    document.getElementById('cancelCourseBtn')?.addEventListener('click', () => closeModal('courseModal'));
    document.getElementById('cancelLessonBtn')?.addEventListener('click', () => closeModal('lessonModal'));
    
    // Form submissions
    document.getElementById('courseForm')?.addEventListener('submit', handleCourseSubmit);
    document.getElementById('lessonForm')?.addEventListener('submit', handleLessonSubmit);
    
    // Logout
    document.getElementById('adminLogoutBtn')?.addEventListener('click', handleLogout);
    
    // Click outside modal to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
}

// Tab Switching
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');
    document.getElementById(`${tabName}Tab`)?.classList.add('active');
}

// Render Tables
function renderAllTables() {
    renderCoursesTable();
    renderLessonsTable();
    renderStudentsTable();
}

function renderCoursesTable() {
    const tbody = document.getElementById('coursesTableBody');
    if (!tbody) return;
    
    if (adminState.courses.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 2rem; color: var(--gray);">No courses found. Add your first course!</td></tr>';
        return;
    }
    
    tbody.innerHTML = adminState.courses.map(course => `
        <tr>
            <td>#${course.id}</td>
            <td><strong>${course.title}</strong></td>
            <td><span class="level-badge ${course.level}">${course.level}</span></td>
            <td>${course.topic}</td>
            <td>${course.duration}</td>
            <td>${course.lessons}</td>
            <td>${course.students}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="editCourse(${course.id})">Edit</button>
                    <button class="btn-delete" onclick="deleteCourse(${course.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderLessonsTable() {
    const tbody = document.getElementById('lessonsTableBody');
    if (!tbody) return;
    
    if (adminState.lessons.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 2rem; color: var(--gray);">No lessons found. Add your first lesson!</td></tr>';
        return;
    }
    
    tbody.innerHTML = adminState.lessons.map(lesson => `
        <tr>
            <td>#${lesson.id}</td>
            <td><strong>${lesson.title}</strong></td>
            <td><span class="level-badge ${lesson.level}">${lesson.level}</span></td>
            <td>${lesson.duration}</td>
            <td><span class="status-badge ${lesson.status}">${lesson.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="editLesson(${lesson.id})">Edit</button>
                    <button class="btn-delete" onclick="deleteLesson(${lesson.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderStudentsTable() {
    const tbody = document.getElementById('studentsTableBody');
    if (!tbody) return;
    
    if (adminState.students.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 2rem; color: var(--gray);">No students registered yet.</td></tr>';
        return;
    }
    
    tbody.innerHTML = adminState.students.map(student => `
        <tr>
            <td>#${student.id}</td>
            <td><strong>${student.name}</strong></td>
            <td>${student.email}</td>
            <td><span class="level-badge ${student.level}">${student.level}</span></td>
            <td>${student.progress}%</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-view" onclick="viewStudent(${student.id})">View</button>
                    <button class="btn-delete" onclick="deleteStudent(${student.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Course CRUD Operations
function openCourseModal(action, courseId = null) {
    const modal = document.getElementById('courseModal');
    const title = document.getElementById('courseModalTitle');
    
    if (action === 'add') {
        title.textContent = 'Add New Course';
        document.getElementById('courseForm').reset();
        adminState.currentEditId = null;
    } else {
        title.textContent = 'Edit Course';
        const course = adminState.courses.find(c => c.id === courseId);
        if (course) {
            document.getElementById('courseTitle').value = course.title;
            document.getElementById('courseDescription').value = course.description;
            document.getElementById('courseLevel').value = course.level;
            document.getElementById('courseTopic').value = course.topic;
            document.getElementById('courseDuration').value = course.duration;
            document.getElementById('courseLessons').value = course.lessons;
            document.getElementById('courseIcon').value = course.icon;
            adminState.currentEditId = courseId;
        }
    }
    
    modal.classList.add('active');
}

function handleCourseSubmit(e) {
    e.preventDefault();
    
    const courseData = {
        title: document.getElementById('courseTitle').value,
        description: document.getElementById('courseDescription').value,
        level: document.getElementById('courseLevel').value,
        topic: document.getElementById('courseTopic').value,
        duration: document.getElementById('courseDuration').value,
        lessons: parseInt(document.getElementById('courseLessons').value),
        icon: document.getElementById('courseIcon').value || '📚'
    };
    
    if (adminState.currentEditId) {
        // Edit existing course
        const index = adminState.courses.findIndex(c => c.id === adminState.currentEditId);
        if (index !== -1) {
            adminState.courses[index] = { ...adminState.courses[index], ...courseData };
            showToast('Course updated successfully!', 'success');
        }
    } else {
        // Add new course
        courseData.id = Date.now();
        courseData.students = 0;
        adminState.courses.push(courseData);
        showToast('Course added successfully!', 'success');
    }
    
    localStorage.setItem('courses', JSON.stringify(adminState.courses));
    renderCoursesTable();
    updateAnalytics();
    closeModal('courseModal');
}

function editCourse(id) {
    openCourseModal('edit', id);
}

function deleteCourse(id) {
    if (confirm('Are you sure you want to delete this course? This action cannot be undone.')) {
        adminState.courses = adminState.courses.filter(c => c.id !== id);
        localStorage.setItem('courses', JSON.stringify(adminState.courses));
        renderCoursesTable();
        updateAnalytics();
        showToast('Course deleted successfully!', 'success');
    }
}

// Lesson CRUD Operations
function openLessonModal(action, lessonId = null) {
    const modal = document.getElementById('lessonModal');
    const title = document.getElementById('lessonModalTitle');
    
    if (action === 'add') {
        title.textContent = 'Add New Lesson';
        document.getElementById('lessonForm').reset();
        adminState.currentEditId = null;
    } else {
        title.textContent = 'Edit Lesson';
        const lesson = adminState.lessons.find(l => l.id === lessonId);
        if (lesson) {
            document.getElementById('lessonTitle').value = lesson.title;
            document.getElementById('lessonLevel').value = lesson.level;
            document.getElementById('lessonDuration').value = lesson.duration;
            document.getElementById('lessonStatus').value = lesson.status;
            document.getElementById('lessonNotes').value = lesson.notes || '';
            document.getElementById('lessonCode').value = lesson.code || '';
            adminState.currentEditId = lessonId;
        }
    }
    
    modal.classList.add('active');
}

function handleLessonSubmit(e) {
    e.preventDefault();
    
    const lessonData = {
        title: document.getElementById('lessonTitle').value,
        level: document.getElementById('lessonLevel').value,
        duration: document.getElementById('lessonDuration').value,
        status: document.getElementById('lessonStatus').value,
        notes: document.getElementById('lessonNotes').value,
        code: document.getElementById('lessonCode').value,
        progress: 0
    };
    
    if (adminState.currentEditId) {
        // Edit existing lesson
        const index = adminState.lessons.findIndex(l => l.id === adminState.currentEditId);
        if (index !== -1) {
            adminState.lessons[index] = { ...adminState.lessons[index], ...lessonData };
            showToast('Lesson updated successfully!', 'success');
        }
    } else {
        // Add new lesson
        lessonData.id = Date.now();
        adminState.lessons.push(lessonData);
        showToast('Lesson added successfully!', 'success');
    }
    
    localStorage.setItem('lessons', JSON.stringify(adminState.lessons));
    renderLessonsTable();
    updateAnalytics();
    closeModal('lessonModal');
}

function editLesson(id) {
    openLessonModal('edit', id);
}

function deleteLesson(id) {
    if (confirm('Are you sure you want to delete this lesson? This action cannot be undone.')) {
        adminState.lessons = adminState.lessons.filter(l => l.id !== id);
        localStorage.setItem('lessons', JSON.stringify(adminState.lessons));
        renderLessonsTable();
        updateAnalytics();
        showToast('Lesson deleted successfully!', 'success');
    }
}

// Student Operations
function viewStudent(id) {
    const student = adminState.students.find(s => s.id === id);
    if (student) {
        alert(`Student Details:\n\nName: ${student.name}\nEmail: ${student.email}\nLevel: ${student.level}\nProgress: ${student.progress}%`);
    }
}

function deleteStudent(id) {
    if (confirm('Are you sure you want to delete this student? This action cannot be undone.')) {
        adminState.students = adminState.students.filter(s => s.id !== id);
        localStorage.setItem('students', JSON.stringify(adminState.students));
        renderStudentsTable();
        updateAnalytics();
        showToast('Student deleted successfully!', 'success');
    }
}

// Analytics
function updateAnalytics() {
    document.getElementById('totalCourses').textContent = adminState.courses.length;
    document.getElementById('totalLessons').textContent = adminState.lessons.length;
    document.getElementById('totalStudents').textContent = adminState.students.length;
    
    const avgProgress = adminState.students.length > 0
        ? Math.round(adminState.students.reduce((sum, s) => sum + s.progress, 0) / adminState.students.length)
        : 0;
    document.getElementById('avgProgress').textContent = `${avgProgress}%`;
}

// Modal Functions
function closeModal(modalId) {
    document.getElementById(modalId)?.classList.remove('active');
}

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        showToast('Logged out successfully!', 'success');
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1000);
    }
}

// Make functions globally accessible
window.editCourse = editCourse;
window.deleteCourse = deleteCourse;
window.editLesson = editLesson;
window.deleteLesson = deleteLesson;
window.viewStudent = viewStudent;
window.deleteStudent = deleteStudent;
