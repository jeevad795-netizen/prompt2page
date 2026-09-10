import { useState } from 'react';
import { FileCode, Folder, ChevronDown, Play, Lock, X, Monitor, Terminal as TerminalIcon } from 'lucide-react';
import Editor from '@monaco-editor/react';
import LivePreview from './LivePreview';
import Terminal from './Terminal';

interface CodeEditorProps {
  files: Record<string, string>;
  activeFile: string;
  openTabs: string[];
  onFileChange: (filename: string) => void;
  onTabClose: (tab: string) => void;
  onFileOpen: (file: string) => void;
  onContentChange: (filename: string, content: string) => void;
  isLocked: boolean;
  onRun: () => void;
  terminalOutput: string[];
}

const fileLanguages: Record<string, string> = {
  'index.html': 'html',
  'style.css': 'css',
  'script.js': 'javascript',
};

const fileIcons: Record<string, string> = {
  'index.html': '🌐',
  'style.css': '🎨',
  'script.js': '⚡',
  'preview': '👁️',
};

export default function CodeEditor({
  files,
  activeFile,
  openTabs,
  onFileChange,
  onTabClose,
  onFileOpen,
  onContentChange,
  isLocked,
  onRun,
  terminalOutput,
}: CodeEditorProps) {
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <div className="h-full flex bg-gray-900">
      {/* Sidebar Toggle */}
      <button
        onClick={() => setIsExplorerOpen(!isExplorerOpen)}
        className="absolute left-0 top-12 z-10 bg-gray-800 hover:bg-gray-700 text-gray-300 p-1 rounded-r border-r border-gray-700 transition"
        title={isExplorerOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      >
        <ChevronDown className={`w-4 h-4 transition-transform ${isExplorerOpen ? '-rotate-90' : 'rotate-90'}`} />
      </button>

      {/* File Explorer */}
      {isExplorerOpen && (
        <div className="w-56 bg-gray-950 border-r border-gray-800 flex flex-col">
          <div className="px-3 py-2 border-b border-gray-800">
            <div className="flex items-center gap-2 text-gray-300 text-xs font-semibold uppercase">
              <Folder className="w-4 h-4" />
              <span>Explorer</span>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            <div className="mb-2">
              <div className="flex items-center gap-1 text-gray-400 mb-1 px-2 py-1">
                <ChevronDown className="w-3 h-3" />
                <Folder className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-medium">CHALLENGE</span>
              </div>
              <div className="ml-4 space-y-0.5">
                {Object.keys(files).map((filename) => (
                  <button
                    key={filename}
                    onClick={() => onFileOpen(filename)}
                    className={`w-full flex items-center gap-2 px-2 py-1 rounded text-sm transition ${
                      activeFile === filename && !activeFile.includes('preview')
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:bg-gray-800/50'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5" />
                    <span className="text-xs">{filename}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Editor Area */}
      <div className="flex-1 flex flex-col">
        {/* Tabs Bar */}
        <div className="bg-gray-950 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-stretch overflow-x-auto">
            {openTabs.map((tab) => (
              <div
                key={tab}
                className={`group flex items-center gap-2 px-3 py-2 text-sm border-r border-gray-800 transition min-w-[120px] ${
                  activeFile === tab
                    ? 'bg-gray-900 text-white border-t-2 border-t-blue-500'
                    : 'text-gray-400 hover:bg-gray-900/50 border-t-2 border-t-transparent'
                }`}
              >
                <button
                  onClick={() => onFileChange(tab)}
                  className="flex items-center gap-2 flex-1"
                >
                  <span>{fileIcons[tab] || '📄'}</span>
                  <span className="text-xs">
                    {tab === 'preview' ? 'Preview' : tab}
                  </span>
                </button>
                {tab !== 'index.html' && ( // Don't allow closing the first file
                  <button
                    onClick={() => onTabClose(tab)}
                    className="opacity-0 group-hover:opacity-100 hover:bg-gray-700 rounded p-0.5 transition"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 px-3 py-2 border-l border-gray-800">
            {isLocked && (
              <div className="flex items-center gap-1.5 text-yellow-400 text-xs mr-2">
                <Lock className="w-3 h-3" />
                <span>Locked</span>
              </div>
            )}
            <button
              onClick={() => setShowTerminal(!showTerminal)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-medium transition ${
                showTerminal
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              Terminal
            </button>
            <button
              onClick={onRun}
              className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded text-xs font-medium transition"
            >
              <Play className="w-3.5 h-3.5" />
              Run
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Editor/Preview */}
          <div className={showTerminal ? 'h-2/3 border-b border-gray-800' : 'h-full'}>
            {activeFile === 'preview' ? (
              <div className="h-full flex flex-col bg-gray-900">
                <div className="flex items-center gap-2 bg-gray-950 px-4 py-2 border-b border-gray-800">
                  <Monitor className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-gray-300">Live Preview</span>
                  <div className="flex items-center gap-2 ml-auto">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400">Live</span>
                  </div>
                </div>
                <div className="flex-1 bg-white overflow-hidden">
                  <LivePreview files={files} />
                </div>
              </div>
            ) : (
              <div className="h-full bg-gray-900">
                <Editor
                  height="100%"
                  language={fileLanguages[activeFile]}
                  value={files[activeFile]}
                  onChange={(value) => onContentChange(activeFile, value || '')}
                  theme="vs-dark"
                  options={{
                    readOnly: isLocked,
                    fontSize: 13,
                    minimap: { enabled: false },
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 2,
                    wordWrap: 'on',
                    padding: { top: 16 },
                  }}
                />
              </div>
            )}
          </div>

          {/* Terminal Panel */}
          {showTerminal && (
            <div className="h-1/3">
              <Terminal output={terminalOutput} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
