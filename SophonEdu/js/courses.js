// Course Data
const coursesData = [
    {
        id: 1,
        title: 'HTML Fundamentals',
        description: 'Learn the building blocks of web development with HTML',
        level: 'foundation',
        topic: 'html',
        duration: '4 hours',
        lessons: 8,
        students: 2543,
        icon: '📄',
        objectives: [
            'Understand HTML structure and syntax',
            'Create semantic HTML documents',
            'Work with forms and input elements',
            'Build accessible web pages'
        ],
        curriculum: [
            { title: 'Introduction to HTML', duration: '30 min' },
            { title: 'HTML Elements and Tags', duration: '45 min' },
            { title: 'Working with Text', duration: '30 min' },
            { title: 'Links and Navigation', duration: '40 min' },
            { title: 'Images and Media', duration: '35 min' },
            { title: 'Forms and Input', duration: '50 min' },
            { title: 'Semantic HTML', duration: '40 min' },
            { title: 'Final Project', duration: '60 min' }
        ],
        prerequisites: 'No prior experience required'
    },
    {
        id: 2,
        title: 'CSS Styling Mastery',
        description: 'Master CSS to create beautiful and responsive designs',
        level: 'foundation',
        topic: 'css',
        duration: '6 hours',
        lessons: 10,
        students: 2198,
        icon: '🎨',
        objectives: [
            'Style web pages with CSS',
            'Create responsive layouts with Flexbox and Grid',
            'Apply animations and transitions',
            'Master CSS best practices'
        ],
        curriculum: [
            { title: 'CSS Basics', duration: '30 min' },
            { title: 'Selectors and Specificity', duration: '40 min' },
            { title: 'Box Model', duration: '35 min' },
            { title: 'Flexbox Layout', duration: '50 min' },
            { title: 'CSS Grid', duration: '50 min' },
            { title: 'Responsive Design', duration: '45 min' },
            { title: 'Animations', duration: '40 min' },
            { title: 'Transitions', duration: '30 min' },
            { title: 'CSS Variables', duration: '25 min' },
            { title: 'Final Project', duration: '75 min' }
        ],
        prerequisites: 'Basic HTML knowledge'
    },
    {
        id: 3,
        title: 'JavaScript Essentials',
        description: 'Master the fundamentals of JavaScript programming',
        level: 'foundation',
        topic: 'javascript',
        duration: '8 hours',
        lessons: 12,
        students: 3421,
        icon: '⚡',
        objectives: [
            'Understand JavaScript syntax and data types',
            'Work with functions and scope',
            'Manipulate the DOM',
            'Handle events and user interactions'
        ],
        curriculum: [
            { title: 'JavaScript Basics', duration: '45 min' },
            { title: 'Variables and Data Types', duration: '40 min' },
            { title: 'Operators and Expressions', duration: '35 min' },
            { title: 'Control Flow', duration: '50 min' },
            { title: 'Functions', duration: '60 min' },
            { title: 'Arrays and Objects', duration: '55 min' },
            { title: 'DOM Manipulation', duration: '50 min' },
            { title: 'Events', duration: '45 min' },
            { title: 'ES6 Features', duration: '40 min' },
            { title: 'Async JavaScript', duration: '50 min' },
            { title: 'Error Handling', duration: '30 min' },
            { title: 'Final Project', duration: '90 min' }
        ],
        prerequisites: 'HTML and CSS knowledge'
    },
    {
        id: 4,
        title: 'Advanced JavaScript',
        description: 'Deep dive into advanced JavaScript concepts',
        level: 'diploma',
        topic: 'javascript',
        duration: '10 hours',
        lessons: 15,
        students: 1876,
        icon: '🔥',
        objectives: [
            'Master closures and prototypes',
            'Understand asynchronous programming',
            'Work with modern ES6+ features',
            'Build complex applications'
        ],
        curriculum: [
            { title: 'Advanced Functions', duration: '50 min' },
            { title: 'Closures and Scope', duration: '45 min' },
            { title: 'Prototypes and Inheritance', duration: '60 min' },
            { title: 'Promises and Async/Await', duration: '55 min' },
            { title: 'Modules', duration: '40 min' }
        ],
        prerequisites: 'JavaScript fundamentals'
    },
    {
        id: 5,
        title: 'React Fundamentals',
        description: 'Build modern web applications with React',
        level: 'diploma',
        topic: 'react',
        duration: '12 hours',
        lessons: 18,
        students: 2954,
        icon: '⚛️',
        objectives: [
            'Understand React components and props',
            'Manage state with hooks',
            'Build reusable UI components',
            'Create single-page applications'
        ],
        curriculum: [
            { title: 'Introduction to React', duration: '40 min' },
            { title: 'JSX and Components', duration: '50 min' },
            { title: 'Props and State', duration: '55 min' },
            { title: 'Hooks', duration: '60 min' },
            { title: 'Routing', duration: '45 min' }
        ],
        prerequisites: 'JavaScript and HTML/CSS'
    },
    {
        id: 6,
        title: 'Node.js Backend Development',
        description: 'Build scalable server-side applications',
        level: 'diploma',
        topic: 'node',
        duration: '14 hours',
        lessons: 20,
        students: 1654,
        icon: '🟢',
        objectives: [
            'Build REST APIs with Express',
            'Work with databases',
            'Implement authentication',
            'Deploy Node.js applications'
        ],
        curriculum: [
            { title: 'Node.js Basics', duration: '45 min' },
            { title: 'Express Framework', duration: '60 min' },
            { title: 'REST API Design', duration: '55 min' },
            { title: 'Database Integration', duration: '70 min' },
            { title: 'Authentication', duration: '65 min' }
        ],
        prerequisites: 'JavaScript knowledge'
    },
    {
        id: 7,
        title: 'Database Design with SQL',
        description: 'Master relational database design and SQL',
        level: 'diploma',
        topic: 'database',
        duration: '10 hours',
        lessons: 14,
        students: 1432,
        icon: '🗄️',
        objectives: [
            'Design normalized databases',
            'Write complex SQL queries',
            'Optimize database performance',
            'Implement data security'
        ],
        curriculum: [
            { title: 'Database Fundamentals', duration: '40 min' },
            { title: 'SQL Basics', duration: '50 min' },
            { title: 'Advanced Queries', duration: '60 min' },
            { title: 'Database Design', duration: '55 min' },
            { title: 'Optimization', duration: '45 min' }
        ],
        prerequisites: 'Basic programming knowledge'
    },
    {
        id: 8,
        title: 'System Design & Architecture',
        description: 'Design scalable and maintainable systems',
        level: 'degree',
        topic: 'architecture',
        duration: '16 hours',
        lessons: 22,
        students: 987,
        icon: '🏗️',
        objectives: [
            'Design distributed systems',
            'Understand microservices architecture',
            'Implement design patterns',
            'Scale applications effectively'
        ],
        curriculum: [
            { title: 'System Design Principles', duration: '60 min' },
            { title: 'Scalability Patterns', duration: '70 min' },
            { title: 'Microservices', duration: '80 min' },
            { title: 'Load Balancing', duration: '55 min' },
            { title: 'Caching Strategies', duration: '50 min' }
        ],
        prerequisites: 'Backend development experience'
    },
    {
        id: 9,
        title: 'Algorithms & Data Structures',
        description: 'Master fundamental algorithms and data structures',
        level: 'degree',
        topic: 'algorithms',
        duration: '18 hours',
        lessons: 25,
        students: 1234,
        icon: '🧮',
        objectives: [
            'Implement common data structures',
            'Analyze algorithm complexity',
            'Solve coding challenges',
            'Optimize code performance'
        ],
        curriculum: [
            { title: 'Arrays and Strings', duration: '50 min' },
            { title: 'Linked Lists', duration: '55 min' },
            { title: 'Trees and Graphs', duration: '70 min' },
            { title: 'Sorting Algorithms', duration: '60 min' },
            { title: 'Dynamic Programming', duration: '80 min' }
        ],
        prerequisites: 'Strong programming foundation'
    },
    {
        id: 10,
        title: 'Cloud Computing with AWS',
        description: 'Deploy and manage applications in the cloud',
        level: 'degree',
        topic: 'cloud',
        duration: '15 hours',
        lessons: 20,
        students: 876,
        icon: '☁️',
        objectives: [
            'Deploy applications to AWS',
            'Manage cloud infrastructure',
            'Implement CI/CD pipelines',
            'Monitor and optimize costs'
        ],
        curriculum: [
            { title: 'Cloud Fundamentals', duration: '45 min' },
            { title: 'EC2 and Compute', duration: '60 min' },
            { title: 'Storage Solutions', duration: '55 min' },
            { title: 'Networking', duration: '50 min' },
            { title: 'DevOps Practices', duration: '70 min' }
        ],
        prerequisites: 'Backend and system design knowledge'
    }
];

let filteredCourses = [...coursesData];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check if a level was pre-selected from the home page
    const selectedLevel = sessionStorage.getItem('selectedLevel');
    if (selectedLevel) {
        // Set the filter to the selected level
        document.querySelectorAll('.filter-tag').forEach(tag => {
            tag.classList.remove('active');
            if (tag.dataset.level === selectedLevel) {
                tag.classList.add('active');
            }
        });
        // Clear the session storage
        sessionStorage.removeItem('selectedLevel');
    }

    renderCourses();
    setupEventListeners();
});

function setupEventListeners() {
    // Mobile menu
    document.getElementById('hamburger')?.addEventListener('click', toggleMobileMenu);

    // Level filters
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            filterCourses();
        });
    });

    // Topic filter
    document.getElementById('topicFilter')?.addEventListener('change', filterCourses);

    // Search
    document.getElementById('courseSearch')?.addEventListener('input', filterCourses);

    // Modal close
    document.getElementById('closeCourseDetail')?.addEventListener('click', () => {
        closeModal('courseDetailModal');
    });

    // Enroll button
    document.getElementById('enrollBtn')?.addEventListener('click', handleEnroll);

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

function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    if (!grid) return;

    if (filteredCourses.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--gray);">No courses found matching your criteria.</p>';
        return;
    }

    grid.innerHTML = filteredCourses.map(course => `
        <div class="course-item" onclick="showCourseDetail(${course.id})">
            <div class="course-thumbnail">
                <span>${course.icon}</span>
                <span class="course-level-tag">${course.level}</span>
            </div>
            <div class="course-body">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-stats">
                    <span>⏱️ ${course.duration}</span>
                    <span>📚 ${course.lessons} lessons</span>
                    <span>👥 ${course.students}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function filterCourses() {
    const levelFilter = document.querySelector('.filter-tag.active')?.dataset.level || 'all';
    const topicFilter = document.getElementById('topicFilter')?.value || 'all';
    const searchQuery = document.getElementById('courseSearch')?.value.toLowerCase() || '';

    filteredCourses = coursesData.filter(course => {
        const matchesLevel = levelFilter === 'all' || course.level === levelFilter;
        const matchesTopic = topicFilter === 'all' || course.topic === topicFilter;
        const matchesSearch = course.title.toLowerCase().includes(searchQuery) ||
            course.description.toLowerCase().includes(searchQuery);

        return matchesLevel && matchesTopic && matchesSearch;
    });

    renderCourses();
}

function showCourseDetail(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;

    document.getElementById('detailLevel').textContent = course.level;
    document.getElementById('detailTitle').textContent = course.title;
    document.getElementById('detailDuration').textContent = course.duration;
    document.getElementById('detailLessons').textContent = `${course.lessons} lessons`;
    document.getElementById('detailStudents').textContent = `${course.students} students`;

    document.getElementById('detailObjectives').innerHTML = course.objectives
        .map(obj => `<li>${obj}</li>`).join('');

    document.getElementById('detailContent').innerHTML = course.curriculum
        .map((item, index) => `
            <div class="curriculum-item">
                <span>${index + 1}. ${item.title}</span>
                <span>${item.duration}</span>
            </div>
        `).join('');

    document.getElementById('detailPrerequisites').textContent = course.prerequisites;

    document.getElementById('enrollBtn').dataset.courseId = courseId;

    openModal('courseDetailModal');
}

function handleEnroll() {
    const courseId = document.getElementById('enrollBtn').dataset.courseId;
    const course = coursesData.find(c => c.id === parseInt(courseId));

    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        showToast(`Successfully enrolled in ${course.title}!`, 'success');
        setTimeout(() => {
            // Check if we're in pages folder or root
            const isInPages = window.location.pathname.includes('/pages/');
            window.location.href = isInPages ? 'profile.aspx' : 'pages/profile.aspx';
        }, 1500);
    } else {
        showToast(`Please login or register to enroll in ${course.title}`, 'success');
        setTimeout(() => {
            window.location.href = '../index.aspx#register';
        }, 2000);
    }
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

window.showCourseDetail = showCourseDetail;
