# PROMPT 2 PAGE (ACETCM'26) - Project Summary

## 🎯 Overview
A comprehensive, browser-based competition platform for the AI Creative Web Challenge at ACETCM'26. This application provides an integrated development environment for college students to test their AI prompting and front-end coding abilities under timed conditions.

## ✨ Key Features Implemented

### 1. **Authentication System**
- **Location**: `src/pages/Login.tsx`
- Captures participant name and department
- Department options: CSE, IT, ECE, EEE, MECH, CIVIL
- Beautiful gradient background with animated grid pattern
- Form validation before entry
- Smooth transitions and hover effects

### 2. **Challenge Selection Interface**
- **Location**: `src/pages/ChallengeSelection.tsx`
- Three distinct project tracks:
  - **P01 - Smart Campus Hub** (Intermediate)
  - **P02 - EcoTrack** (Advanced)
  - **P03 - TravelMate** (Intermediate)
- Color-coded difficulty levels
- Detailed challenge descriptions
- Feature breakdowns for each project
- Participant information display in header
- Responsive card-based layout

### 3. **Dual-Pane Developer Workspace**
- **Location**: `src/pages/Workspace.tsx`

#### Left Pane: ChatGPT Simulator
- **Component**: `src/components/ChatGPTSimulator.tsx`
- Permanently visible AI assistant interface
- Logged-out ChatGPT replica design
- Context-aware responses based on challenge
- Suggested prompts specific to each challenge:
  - P01: Campus website components
  - P02: Environmental dashboard elements
  - P03: Travel platform features
- Intelligent code generation for:
  - Hero sections
  - Card grids
  - Navigation bars
  - Interactive JavaScript
- Scrollable message history
- Professional chat UI with proper message bubbles

#### Right Pane: VS Code Web IDE
- **Component**: `src/components/CodeEditor.tsx`
- Full Monaco Editor integration
- Three starter files in `challenge/` folder:
  - `index.html` - Pre-populated with challenge-specific content
  - `style.css` - Basic styling structure
  - `script.js` - JavaScript template
- Features:
  - Syntax highlighting
  - Line numbers
  - Code folding
  - Tab-based file navigation
  - Collapsible file explorer
  - File icons and structure
  - Read-only mode when locked

### 4. **Live Execution & Preview System**

#### Run Functionality
- Real-time code compilation
- Terminal output with color-coded messages
- Build success/error reporting
- File size reporting
- Timestamp logging

#### Live Preview
- **Component**: `src/components/LivePreview.tsx`
- Sandboxed iframe with `srcDoc`
- Combines HTML + CSS + JavaScript
- Real-time updates on Run
- Live indicator animation
- Safe execution environment

#### Terminal
- **Component**: `src/components/Terminal.tsx`
- Auto-scrolling output
- Color-coded messages:
  - Green: Success (✅, ✓)
  - Yellow: Warnings (⏰, ⚠️)
  - Red: Errors (❌)
  - Blue: Info (▶️, 📤)
- Monospace font for readability
- Build logs and submission details

### 5. **Contest Management System**

#### Header Component
- **Component**: `src/components/Header.tsx`
- Real-time countdown timer (45:00)
- Color-coded time warnings:
  - Green: > 15 minutes
  - Yellow: 5-15 minutes
  - Red: < 5 minutes
- Participant metadata display
- Challenge information badge
- Difficulty level indicator
- Submit button with status

#### Timer Features
- Countdown from 45 minutes
- Auto-submission on time expiry
- Visual warnings as time decreases
- Formatted display (MM:SS)

#### Submission Workflow
- Confirmation dialog
- Detailed submission logs
- Editor lock after submission
- Submission summary with:
  - File sizes
  - Participant details
  - Challenge information
  - Time remaining
- Visual "Submitted" badge
- Prevention of further edits

### 6. **Welcome Overlay**
- **Component**: `src/components/WelcomeOverlay.tsx`
- Appears on workspace entry
- Quick start guide with 4 steps
- Visual icons for each step
- Challenge information display
- Important rules and time limit
- Dismissible with smooth animation

## 🎨 Design System

### Color Palette
- **Primary**: Blue-Purple gradients (#667eea, #764ba2)
- **Success**: Green (#10b981)
- **Warning**: Yellow/Orange (#f59e0b)
- **Error**: Red (#ef4444)
- **Background**: Dark gray tones (#0f172a, #1e293b)

### Typography
- **Headers**: Bold, white text
- **Body**: Gray scale for hierarchy
- **Code**: Monospace (Monaco Editor)
- **Terminal**: Monospace with color coding

### UI Components
- Glass morphism effects (backdrop-blur)
- Smooth transitions and hover states
- Gradient backgrounds
- Border highlights on focus
- Shadow effects for depth

## 🛠️ Technical Architecture

### Tech Stack
- **React 19** with TypeScript
- **Vite** for blazing-fast builds
- **Tailwind CSS** for utility-first styling
- **React Router DOM** for client-side routing
- **Monaco Editor** for professional code editing
- **Lucide React** for consistent iconography

### State Management
- React hooks (useState, useEffect)
- Prop drilling for small app
- Context-free architecture
- Route-based state preservation

### File Structure
```
src/
├── pages/
│   ├── Login.tsx              # Authentication
│   ├── ChallengeSelection.tsx # Project selection
│   └── Workspace.tsx          # Main IDE
├── components/
│   ├── Header.tsx             # Top bar with timer
│   ├── ChatGPTSimulator.tsx   # AI assistant
│   ├── CodeEditor.tsx         # Monaco editor wrapper
│   ├── Terminal.tsx           # Build output
│   ├── LivePreview.tsx        # iframe preview
│   └── WelcomeOverlay.tsx     # Onboarding
├── types.ts                   # TypeScript definitions
├── App.tsx                    # Router setup
└── main.tsx                   # Entry point
```

### Type Safety
- Full TypeScript implementation
- Strict type checking
- Interface definitions for all props
- Type-safe state management

## 🎮 User Flow

1. **Login** → Enter name and select department
2. **Challenge Selection** → Browse and choose from 3 challenges
3. **Welcome Overlay** → Quick tutorial appears
4. **Development**:
   - Ask ChatGPT for help (left pane)
   - Write code in Monaco Editor (right pane)
   - Click Run to see preview
   - Check Terminal for output
5. **Testing** → Preview updates in real-time
6. **Submission** → Submit before timer expires
7. **Completion** → Editor locks, submission confirmed

## 🔒 Security Features
- Sandboxed iframe for preview
- No external API calls required
- Client-side only execution
- Safe code evaluation

## 📱 Responsive Design
- Optimized for desktop use (primary)
- Flexible layouts with Tailwind
- Grid and flexbox for adaptability
- Minimum recommended: 1366x768

## 🚀 Performance
- Single-file build output (~322KB gzipped: 97KB)
- Lazy loading of Monaco Editor
- Optimized re-renders
- Efficient state updates

## 🎯 Competition Features
- ✅ 45-minute time limit
- ✅ Three difficulty levels
- ✅ AI-powered assistance
- ✅ Professional IDE experience
- ✅ Live preview
- ✅ Submission validation
- ✅ Auto-lock on completion
- ✅ Detailed feedback

## 📝 Future Enhancements (Optional)
- Multi-language support
- Code templates library
- Keyboard shortcuts
- Theme switcher
- Export project as ZIP
- Leaderboard integration
- Real-time collaboration
- Code quality scoring

## 🏆 Success Criteria Met
✅ Login with department selection  
✅ Three challenge tracks  
✅ ChatGPT simulator with prompts  
✅ VS Code-style editor  
✅ File tree navigation  
✅ Live preview with iframe  
✅ Terminal output  
✅ 45-minute countdown  
✅ Submit workflow  
✅ Editor lock system  
✅ Professional UI/UX  
✅ Fully functional build  

## 📦 Build Information
- Build tool: Vite 7.3.2
- Output: Single HTML file
- Size: 322.34 KB (97.36 KB gzipped)
- Status: ✅ Production-ready

---

**Built for ACETCM'26 - Round 2: AI Creative Web Challenge**
