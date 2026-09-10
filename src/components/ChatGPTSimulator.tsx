import { useState } from 'react';
import { ChallengeData, ChatMessage } from '../types';
import { Send, Sparkles, Lightbulb } from 'lucide-react';

interface ChatGPTSimulatorProps {
  challenge: ChallengeData;
}

const suggestedPrompts = {
  P01: [
    'Create a modern hero section for a campus website with a gradient background',
    'Design an events calendar card component with hover effects',
    'Build a responsive news feed layout with card-based design',
  ],
  P02: [
    'Create an environmental dashboard with statistics cards',
    'Design a chart visualization for carbon footprint data',
    'Build an action center with eco-friendly challenge cards',
  ],
  P03: [
    'Create a destination hero section with parallax effect',
    'Design an interactive itinerary timeline component',
    'Build a travel tips section with icon-based cards',
  ],
};

export default function ChatGPTSimulator({ challenge }: ChatGPTSimulatorProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: `Hello! I'm ChatGPT, and I'm here to help you build "${challenge.title}" for your competition.\n\nI can assist you with:\n\n• HTML structure and semantic markup\n• CSS styling and responsive design\n• JavaScript interactivity and DOM manipulation\n• Best practices and web accessibility\n• Layout patterns and component design\n\nFeel free to ask me anything, or click on one of the suggested prompts below to get started!`,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const prompts = suggestedPrompts[challenge.id as keyof typeof suggestedPrompts] || [];

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('hero') || lowerMessage.includes('header')) {
      return `Here's a modern hero section structure:

\`\`\`html
<section class="hero">
    <div class="hero-content">
        <h1 class="hero-title">Welcome to ${challenge.title}</h1>
        <p class="hero-subtitle">Your journey starts here</p>
        <button class="hero-cta">Get Started</button>
    </div>
</section>
\`\`\`

\`\`\`css
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
}

.hero-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.hero-cta {
    padding: 1rem 2rem;
    background: white;
    color: #667eea;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: transform 0.3s;
}

.hero-cta:hover {
    transform: scale(1.05);
}
\`\`\``;
    }

    if (lowerMessage.includes('card') || lowerMessage.includes('grid')) {
      return `Here's a responsive card grid layout:

\`\`\`html
<div class="card-grid">
    <div class="card">
        <h3>Card Title</h3>
        <p>Card content goes here</p>
    </div>
    <!-- Add more cards -->
</div>
\`\`\`

\`\`\`css
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
}

.card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}
\`\`\``;
    }

    if (lowerMessage.includes('navigation') || lowerMessage.includes('navbar') || lowerMessage.includes('nav')) {
      return `Here's a responsive navigation bar:

\`\`\`html
<nav class="navbar">
    <div class="nav-brand">Logo</div>
    <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
\`\`\`

\`\`\`css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: #2d3748;
    color: white;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #667eea;
}
\`\`\``;
    }

    if (lowerMessage.includes('javascript') || lowerMessage.includes('interactive')) {
      return `Here's some interactive JavaScript code:

\`\`\`javascript
// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add click effects
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
\`\`\``;
    }

    // Default response
    return `Great question about ${challenge.title}! Here are some tips:

• Use semantic HTML5 elements (header, nav, main, section, footer)
• Implement responsive design with CSS Grid and Flexbox
• Add smooth transitions and hover effects for better UX
• Ensure accessibility with proper ARIA labels and keyboard navigation
• Test across different screen sizes

Would you like specific code examples for any particular feature?`;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: inputValue,
    };

    const assistantMessage: ChatMessage = {
      role: 'assistant',
      content: generateResponse(inputValue),
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInputValue('');
  };

  const handleSuggestedPrompt = (prompt: string) => {
    setInputValue(prompt);
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header - ChatGPT Style */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-sm">ChatGPT 4</h3>
              <p className="text-xs text-gray-500">Competition Mode</p>
            </div>
          </div>
          <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
            Free Research Preview
          </div>
        </div>
      </div>

      {/* Messages - ChatGPT Style */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-white">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            {/* Avatar */}
            <div className={`w-8 h-8 rounded-sm flex-shrink-0 flex items-center justify-center text-white font-semibold ${
              message.role === 'user' ? 'bg-purple-600' : 'bg-green-600'
            }`}>
              {message.role === 'user' ? 'U' : <Sparkles className="w-4 h-4" />}
            </div>
            
            {/* Message Content */}
            <div className={`flex-1 ${message.role === 'user' ? 'text-right' : ''}`}>
              <div className="text-xs text-gray-500 mb-1 font-medium">
                {message.role === 'user' ? 'You' : 'ChatGPT'}
              </div>
              <div className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
                {message.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Prompts */}
      {messages.length <= 1 && (
        <div className="px-4 pb-4 bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <p className="text-xs text-gray-600 font-semibold">Suggested Prompts</p>
          </div>
          <div className="space-y-2">
            {prompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestedPrompt(prompt)}
                className="w-full text-left text-xs bg-gray-50 hover:bg-gray-100 text-gray-700 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input - ChatGPT Style */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex gap-2 items-center bg-white border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus-within:border-gray-400 transition">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Message ChatGPT..."
            className="flex-1 bg-transparent text-gray-900 focus:outline-none text-sm placeholder-gray-400"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className={`p-1.5 rounded-lg transition ${
              inputValue.trim()
                ? 'bg-black hover:bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-400'
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">
          ChatGPT can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
}
