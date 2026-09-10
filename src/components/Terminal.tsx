import { Terminal as TerminalIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface TerminalProps {
  output: string[];
}

export default function Terminal({ output }: TerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="h-full flex flex-col bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-4 py-1.5 flex items-center gap-2">
        <TerminalIcon className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-xs font-medium text-gray-300 uppercase">Terminal</span>
      </div>

      {/* Output */}
      <div ref={terminalRef} className="flex-1 overflow-y-auto p-4 font-mono text-sm">
        {output.length === 0 ? (
          <div className="text-gray-600">
            <p>$ Waiting for commands...</p>
          </div>
        ) : (
          <div className="space-y-1">
            {output.map((line, idx) => {
              let colorClass = 'text-gray-300';
              if (line.includes('✅') || line.includes('✓')) colorClass = 'text-green-400';
              else if (line.includes('⏰') || line.includes('⚠️')) colorClass = 'text-yellow-400';
              else if (line.includes('❌') || line.includes('Error')) colorClass = 'text-red-400';
              else if (line.includes('▶️') || line.includes('📤')) colorClass = 'text-blue-400';
              else if (line.includes('━')) colorClass = 'text-gray-600';
              
              return (
                <div key={idx} className={colorClass}>
                  {line}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
