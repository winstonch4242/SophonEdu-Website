# SophonEdu - Interactive Learning Platform

A modern, animated front-end learning platform built with HTML, CSS, and vanilla JavaScript. Inspired by contemporary web design with smooth animations and engaging user interactions.

## 🌟 Features

### Multi-Role System
- **Guest View**: Landing page with course overview, sample tutorials, and registration
- **Member Dashboard**: Personalized learning hub with progress tracking
- **Admin Panel**: Complete CRUD management for lessons and students

### Interactive Learning
- **Lesson Viewer**: Side-by-side layout displaying notes, code examples, and exercises
- **Quiz Engine**: Supports MCQ and True/False questions with instant feedback
- **Automatic Grading**: Immediate score calculation and XP rewards
- **Interactive Tutorials**: Hands-on coding environment with live preview

### Gamification
- **Experience Points (XP)**: Earn points by completing lessons and quizzes
- **Achievement Badges**: Unlock badges for milestones
- **Progress Tracking**: Visual progress bars with animations
- **Streak Counter**: Track daily learning consistency

### Pages Included
1. **index.html** - Main landing page with hero section and registration
2. **courses.html** - Browse and filter courses by level and topic
3. **tutorials.html** - Interactive coding tutorials with live editor
4. **about.html** - About page with mission, features, and statistics
5. **profile.html** - User profile with progress tracking and achievements

## 🎨 Design Features

### Animations
- Floating shapes in hero section
- Smooth fade-in animations
- Hover effects on cards and buttons
- Progress bar shimmer effects
- Animated statistics counters

### Responsive Design
- Mobile-friendly navigation with hamburger menu
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interface

### Visual Elements
- Gradient backgrounds
- Glassmorphism effects
- Box shadows and depth
- Color-coded syntax highlighting
- Toast notifications

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation
1. Download all files to a folder
2. Open `index.html` in your web browser
3. Start exploring!

### File Structure
```
WAPP Project/
├── index.html          # Main landing page
├── courses.html        # Courses catalog
├── tutorials.html      # Interactive tutorials
├── about.html          # About page
├── profile.html        # User profile
├── css/
│   ├── style.css       # Main stylesheet
│   ├── courses.css     # Courses page styles
│   ├── tutorials.css   # Tutorials page styles
│   ├── about.css       # About page styles
│   └── profile.css     # Profile page styles
├── js/
│   ├── auth.js         # Shared authentication logic
│   ├── app.js          # Main application logic
│   ├── courses.js      # Courses functionality
│   ├── tutorials.js    # Tutorial engine
│   ├── about.js        # About page interactions
│   └── profile.js      # Profile management
├── README.md           # Documentation
└── AUTH_SYSTEM.md      # Authentication system docs
```

## 💻 Usage

### For Guests
1. Browse courses and tutorials on the landing page
2. View sample content without registration
3. Register to access full features

### For Members
1. Login with credentials
2. Access personalized dashboard
3. Enroll in courses
4. Complete lessons and quizzes
5. Track progress and earn badges
6. Try interactive tutorials

### For Admins
1. Login with admin credentials:
   - Email: `admin@sophonedu.com`
   - Password: `admin123`
2. Manage lessons (Create, Read, Update, Delete)
3. Manage student accounts
4. View platform statistics

## 🎯 Key Functionalities

### Course Filtering
- Filter by level (Foundation, Diploma, Degree)
- Filter by topic (HTML, CSS, JavaScript, etc.)
- Search by keywords
- Real-time filtering

### Interactive Tutorials
- Step-by-step guided learning
- Live code editor
- Instant preview
- Console output
- Progress tracking
- Code validation

### Quiz System
- Multiple choice questions
- True/False questions
- Instant feedback
- Score calculation
- XP rewards
- Badge unlocking

### Profile Management
- Edit personal information
- Change password
- View learning statistics
- Track achievements
- Monitor course progress

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary: #6366f1;
    --secondary: #8b5cf6;
    --accent: #ec4899;
    /* ... more colors */
}
```

### Content
- Modify course data in `courses.js`
- Update tutorial steps in `tutorials.js`
- Change sample lessons in `app.js`

## 📱 Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 🔒 Data Storage
- Uses localStorage for session management
- No backend required
- Data persists across sessions
- Clear browser data to reset

## 🎓 Educational Features

### Foundation Level
- HTML Fundamentals
- CSS Styling
- JavaScript Basics
- Web Development Intro

### Diploma Level
- Advanced JavaScript
- React & Frameworks
- Node.js Backend
- Database Design

### Degree Level
- System Architecture
- Algorithms & Data Structures
- Cloud Computing
- Advanced Patterns

## 🌐 Future Enhancements
- Backend integration with PostgreSQL
- Real-time collaboration
- Video lessons
- Code playground
- Social features
- Leaderboards
- Certificate generation

## 📄 License
This is a front-end demonstration project for educational purposes.

## 👨‍💻 Development
Built with:
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- No frameworks or libraries

## 🤝 Contributing
This is a demonstration project. Feel free to fork and customize for your needs.

## 📞 Support
For questions or issues, please refer to the documentation or contact support.

---

**SophonEdu** - Empowering the next generation of developers through interactive learning.
