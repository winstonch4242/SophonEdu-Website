# SophonEdu Project Structure

## 📁 Organized Folder Structure

The project has been organized into a clean, professional structure:

```
WAPP Project/
│
├── 📄 index.html (Root - Entry Point)
│
├── 📂 pages/ (All Other HTML Pages)
│   ├── courses.html        # Course catalog with filtering
│   ├── tutorials.html      # Interactive coding tutorials
│   ├── about.html          # About page with mission & stats
│   └── profile.html        # User dashboard & profile
│
├── 🎨 css/ (Stylesheets)
│   ├── style.css           # Main global styles & components
│   ├── courses.css         # Course page specific styles
│   ├── tutorials.css       # Tutorial workspace styles
│   ├── about.css           # About page styles
│   └── profile.css         # Profile dashboard styles
│
├── ⚙️ js/ (JavaScript)
│   ├── auth.js             # Shared authentication system
│   ├── app.js              # Main app logic (index.html)
│   ├── courses.js          # Course filtering & enrollment
│   ├── tutorials.js        # Interactive tutorial engine
│   ├── about.js            # About page animations
│   └── profile.js          # Profile management
│
└── 📚 Documentation
    ├── README.md           # Main project documentation
    ├── AUTH_SYSTEM.md      # Authentication system guide
    └── PROJECT_STRUCTURE.md # This file

```

## 🎯 Benefits of This Structure

### 1. **Better Organization**
- Clear separation of concerns
- Easy to find and maintain files
- Professional project structure
- index.html at root for easy access

### 2. **Scalability**
- Easy to add new pages to pages/ folder
- Simple to add new styles or scripts
- Clear naming conventions

### 3. **Maintainability**
- Related files grouped together
- Consistent file paths
- Easy for team collaboration

### 4. **SEO & Hosting**
- index.html at root (standard for web servers)
- Clean URL structure
- Easy deployment

## 📝 File Descriptions

### Root Level
- **index.html**: Main landing page (entry point)

### Pages Folder (`pages/`)
All secondary HTML pages for better organization.

### CSS Files (`css/`)
- **style.css**: Core styles, variables, navigation, buttons, modals
- **courses.css**: Course cards, filters, course detail modal
- **tutorials.css**: Tutorial workspace, code editor, preview panel
- **about.css**: Mission section, features grid, statistics
- **profile.css**: Dashboard layout, progress circles, achievements

### JavaScript Files (`js/`)
- **auth.js**: Handles login state across all pages
- **app.js**: Main landing page functionality
- **courses.js**: Course data, filtering, enrollment
- **tutorials.js**: 12 interactive tutorials with step validation
- **about.js**: Animated statistics counters
- **profile.js**: User data, progress tracking, profile editing

## 🔗 File References

### From index.html (Root):
- CSS: `<link rel="stylesheet" href="css/style.css">`
- JS: `<script src="js/app.js"></script>`
- Pages: `<a href="pages/courses.html">`

### From pages/*.html (Subfolder):
- CSS: `<link rel="stylesheet" href="../css/style.css">`
- JS: `<script src="../js/app.js"></script>`
- Home: `<a href="../index.html">`
- Other pages: `<a href="courses.html">` (same folder)

## 🚀 Getting Started

1. Open `index.html` in your browser
2. All paths are relative and will work correctly
3. No server setup required - runs entirely in browser

## 📦 What's Included

- **1 Root HTML**: index.html (landing page)
- **4 Page HTMLs**: courses, tutorials, about, profile
- **5 CSS Files**: ~2000+ lines of styled components
- **6 JS Files**: ~3000+ lines of functionality
- **12 Tutorials**: Interactive learning experiences
- **10 Courses**: Comprehensive course catalog
- **Authentication**: Persistent login system
- **Responsive**: Mobile-friendly design

## 🎨 Color Scheme

The project uses a bright, professional blue palette:
- Primary: #106fd1 (Bright Blue)
- Secondary: #227b9a (Teal)
- Accent: #24ac71 (Green)
- Background: #e8f4f8 (Light Blue)

## ✨ Key Features

✅ Multi-role system (Guest, Member, Admin)
✅ Interactive quiz engine
✅ Live code editor with preview
✅ Progress tracking & gamification
✅ Responsive design
✅ Smooth animations
✅ Persistent authentication
✅ Course filtering & search
✅ Profile management

---

**SophonEdu** - A modern, interactive learning platform built with HTML, CSS, and vanilla JavaScript.
