# PROMPT 2 PAGE (ACETCM'26)

An interactive, browser-based competition platform for **Round 2: AI Creative Web Challenge**.

## Features

### 🔐 Authentication System
- Participant name and department capture
- Department selection: CSE, IT, ECE, EEE, MECH, CIVIL
- Secure routing to challenge arena

### 🎯 Challenge Selection
Three structured project tracks:
- **P01 — Smart Campus Hub** (Intermediate)
  - Hero Section with Campus Overview
  - Events Calendar & Listings
  - Campus News & Updates Feed

- **P02 — EcoTrack** (Advanced)
  - Impact Overview Dashboard
  - Environmental Statistics & Charts
  - Action Center & Challenges

- **P03 — TravelMate** (Intermediate)
  - Destination Hero Section
  - Interactive Itinerary Builder
  - Travel Tips & Recommendations

### 💻 Dual-Pane Developer Workspace

#### Left Pane: ChatGPT Simulator
- Permanently visible AI assistant
- Logged-out ChatGPT replica
- Suggested prompts for each challenge
- Context-aware code generation
- No personal OpenAI account required

#### Right Pane: VS Code Web IDE
- File Explorer with `challenge/` folder
- Three starter files: `index.html`, `style.css`, `script.js`
- Monaco Editor with syntax highlighting
- Line numbers and code folding
- Tabbed file navigation
- Collapsible Explorer panel

### ⚡ Live Execution & Preview
- **Run** button to execute code
- Real-time Terminal with build messages
- Live Preview iframe with srcDoc
- Combined HTML/CSS/JS rendering
- Sandbox environment for safety

### ⏱️ Contest Management
- 45-minute countdown timer
- Color-coded time warnings (green → yellow → red)
- Challenge badges and metadata display
- Participant information header
- **Submit Project** workflow
- Auto-submission on time expiry
- Editor lock after submission

## Technology Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Monaco Editor** for code editing
- **Lucide React** for icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Competition Flow

1. **Login** → Enter name and select department
2. **Challenge Selection** → Choose from P01, P02, or P03
3. **Development** → Use ChatGPT Assistant + Code Editor
4. **Testing** → Run and preview your code
5. **Submission** → Submit before time expires

## Key Features

- ✅ Real-time countdown timer
- ✅ AI-powered coding assistant
- ✅ Browser-based code editor
- ✅ Live preview functionality
- ✅ Terminal output display
- ✅ Submission workflow with locks
- ✅ Responsive design
- ✅ Professional UI/UX

## Competition Rules

- Time limit: 45 minutes per challenge
- No external resources after challenge starts
- Use ChatGPT Simulator for assistance
- Submit before timer expires
- Editor locks after submission

---

Built for ACETCM'26 - AI Creative Web Challenge
