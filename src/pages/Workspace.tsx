import { useState, useEffect } from 'react';
import { ParticipantData, ChallengeData } from '../types';
import ChatGPTSimulator from '../components/ChatGPTSimulator';
import CodeEditor from '../components/CodeEditor';
import Header from '../components/Header';
import WelcomeOverlay from '../components/WelcomeOverlay';

interface WorkspaceProps {
  participant: ParticipantData;
  challenge: ChallengeData;
}

export default function Workspace({ participant, challenge }: WorkspaceProps) {
  const [timeRemaining, setTimeRemaining] = useState(45 * 60); // 45 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    `Welcome to PROMPT 2 PAGE - ${challenge.title}`,
    `Timer started: 45:00 minutes`,
    `Use the ChatGPT Assistant for help and click Run to preview your code.`,
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
  ]);
  
  const [files, setFiles] = useState({
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${challenge.title}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to ${challenge.title}</h1>
    <p>Start building your project here...</p>
    
    <script src="script.js"></script>
</body>
</html>`,
    'style.css': `/* ${challenge.title} Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    color: #333;
}

h1 {
    color: #2563eb;
    padding: 20px;
}

p {
    padding: 0 20px;
}`,
    'script.js': `// ${challenge.title} JavaScript
console.log('${challenge.title} initialized');

// Add your JavaScript code here
`,
  });

  const [activeFile, setActiveFile] = useState('index.html');
  const [openTabs, setOpenTabs] = useState<string[]>(['index.html', 'style.css', 'script.js']);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setIsSubmitted(true);
          addTerminalOutput('⏰ Time expired! Project automatically submitted.');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining, isSubmitted]);

  const addTerminalOutput = (message: string) => {
    setTerminalOutput((prev) => [...prev, message]);
  };

  const handleRun = () => {
    const timestamp = new Date().toLocaleTimeString();
    addTerminalOutput(`[${timestamp}] ▶️ Running project...`);
    addTerminalOutput(`✓ Compiled index.html (${files['index.html'].length} bytes)`);
    addTerminalOutput(`✓ Compiled style.css (${files['style.css'].length} bytes)`);
    addTerminalOutput(`✓ Compiled script.js (${files['script.js'].length} bytes)`);
    addTerminalOutput('✅ Build successful! Preview updated.');
    
    // Add preview tab if not already open
    if (!openTabs.includes('preview')) {
      setOpenTabs([...openTabs, 'preview']);
      addTerminalOutput('📺 Live preview tab opened.');
    }
    setActiveFile('preview');
  };

  const handleSubmit = () => {
    if (window.confirm('Are you sure you want to submit your project? You cannot make changes after submission.')) {
      setIsSubmitted(true);
      addTerminalOutput('📤 Submitting project...');
      addTerminalOutput(`✓ Uploaded index.html (${files['index.html'].length} bytes)`);
      addTerminalOutput(`✓ Uploaded style.css (${files['style.css'].length} bytes)`);
      addTerminalOutput(`✓ Uploaded script.js (${files['script.js'].length} bytes)`);
      addTerminalOutput('✅ Project submitted successfully!');
      addTerminalOutput(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
      addTerminalOutput(`📋 Participant: ${participant.name}`);
      addTerminalOutput(`🎓 Department: ${participant.department}`);
      addTerminalOutput(`🏆 Challenge: ${challenge.id} - ${challenge.title}`);
      addTerminalOutput(`⏱️  Time Remaining: ${Math.floor(timeRemaining / 60)}:${(timeRemaining % 60).toString().padStart(2, '0')}`);
      addTerminalOutput(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
      addTerminalOutput(`Thank you for participating in ACETCM'26!`);
    }
  };

  const updateFileContent = (filename: string, content: string) => {
    if (!isSubmitted) {
      setFiles((prev) => ({ ...prev, [filename]: content }));
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      {/* Welcome Overlay */}
      {showWelcome && (
        <WelcomeOverlay challenge={challenge} onClose={() => setShowWelcome(false)} />
      )}

      {/* Header */}
      <Header
        participant={participant}
        challenge={challenge}
        timeRemaining={timeRemaining}
        isSubmitted={isSubmitted}
        onSubmit={handleSubmit}
      />

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Pane - ChatGPT Simulator */}
        <div className="w-1/2 border-r border-gray-700">
          <ChatGPTSimulator challenge={challenge} />
        </div>

        {/* Right Pane - VS Code IDE */}
        <div className="flex-1 flex flex-col">
          {/* Editor with integrated preview */}
          <div className="flex-1">
            <CodeEditor
              files={files}
              activeFile={activeFile}
              openTabs={openTabs}
              onFileChange={setActiveFile}
              onTabClose={(tab) => {
                const newTabs = openTabs.filter(t => t !== tab);
                setOpenTabs(newTabs);
                if (activeFile === tab && newTabs.length > 0) {
                  setActiveFile(newTabs[newTabs.length - 1]);
                }
              }}
              onFileOpen={(file) => {
                if (!openTabs.includes(file)) {
                  setOpenTabs([...openTabs, file]);
                }
                setActiveFile(file);
              }}
              onContentChange={updateFileContent}
              isLocked={isSubmitted}
              onRun={handleRun}
              terminalOutput={terminalOutput}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
