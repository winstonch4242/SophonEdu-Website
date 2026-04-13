# Authentication System Documentation

## Overview
The website now has a consistent authentication system that works across all pages.

## How It Works

### 1. Shared Authentication (auth.js)
- Loaded on every page before other scripts
- Automatically checks if user is logged in
- Updates navigation bar based on login status

### 2. Login States

#### Not Logged In
- Shows: "Login" and "Get Started" buttons
- Clicking either redirects to index.html

#### Logged In
- Shows: "👋 [User Name]", "Dashboard", and "Logout" buttons
- Dashboard button goes to:
  - Profile page for regular members
  - Admin panel for admins
- Logout button clears session and redirects to home

### 3. User Flow

#### Registration
1. User fills registration form on index.html
2. Selects learning path (Foundation/Diploma/Degree)
3. Account created and stored in localStorage
4. User is logged in automatically
5. Navigation updates across all pages

#### Login
1. User clicks "Login" button
2. Enters credentials on index.html
3. Session stored in localStorage
4. Navigation updates immediately
5. Can browse all pages while logged in

#### Logout
1. User clicks "Logout" from any page
2. Session cleared from localStorage
3. Redirected to home page
4. Navigation shows login/register buttons again

### 4. Page-Specific Behavior

#### index.html
- Main landing page
- Contains login and registration forms
- Admin can access admin panel via #admin hash

#### courses.html
- Browse courses
- Enroll button checks login status
- Logged-in users can enroll directly
- Non-logged-in users redirected to register

#### tutorials.html
- Interactive tutorials available to all
- Login status shown in navigation

#### about.html
- Information page
- CTA button redirects to registration

#### profile.html
- Requires login (redirects if not logged in)
- Shows user dashboard
- Displays progress, badges, and courses

## Technical Details

### localStorage Keys
- `currentUser`: Stores user object with:
  - id, name, email, level, role, progress, xp, badges

### User Roles
- `member`: Regular student (default)
- `admin`: Administrator access

### Demo Credentials
- Admin: admin@sophonedu.com / admin123
- Member: Any email/password combination

## Files Modified
1. auth.js (NEW) - Shared authentication logic
2. index.html - Added auth.js script
3. courses.html - Added auth.js script
4. tutorials.html - Added auth.js script
5. about.html - Added auth.js script
6. profile.html - Added auth.js script
7. app.js - Updated to work with shared auth
8. courses.js - Updated enroll logic
9. about.js - Updated CTA button
10. tutorials.js - Removed redundant auth handlers

## Benefits
✅ Consistent login state across all pages
✅ No need to re-login when navigating
✅ Centralized authentication logic
✅ Easy to maintain and update
✅ Better user experience
