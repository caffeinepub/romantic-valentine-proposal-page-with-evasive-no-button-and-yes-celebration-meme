import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    // Calculate safe boundaries (keep button fully visible)
    const maxX = container.width - button.width - 40;
    const maxY = container.height - button.height - 40;

    // Generate random position within safe boundaries
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  if (accepted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-romantic-light via-romantic-medium to-romantic-accent p-4">
        <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-700">
          <div className="space-y-4">
            <Heart className="w-20 h-20 mx-auto text-romantic-dark animate-pulse" fill="currentColor" />
            <h1 className="text-5xl md:text-7xl font-bold text-romantic-dark tracking-tight">
              Good choice
            </h1>
            <p className="text-2xl md:text-3xl text-romantic-dark/80 font-medium">
              I knew you'd say yes! 💕
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 max-w-lg mx-auto">
            <img 
              src="/assets/generated/valentine-good-choice-meme.dim_1024x1024.png" 
              alt="Good choice meme"
              className="w-full h-auto"
            />
          </div>

          <div className="pt-4">
            <div className="inline-flex items-center gap-2 text-romantic-dark/60 text-sm">
              <Heart className="w-4 h-4" fill="currentColor" />
              <span>Happy Valentine's Day!</span>
              <Heart className="w-4 h-4" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-romantic-light via-romantic-medium to-romantic-accent p-4 overflow-hidden relative"
    >
      <div className="max-w-2xl w-full text-center space-y-12 z-10">
        <div className="space-y-6 animate-in fade-in slide-in-from-top duration-700">
          <div className="flex justify-center gap-3">
            <Heart className="w-12 h-12 text-romantic-dark animate-bounce" fill="currentColor" style={{ animationDelay: '0ms' }} />
            <Heart className="w-16 h-16 text-romantic-dark animate-bounce" fill="currentColor" style={{ animationDelay: '150ms' }} />
            <Heart className="w-12 h-12 text-romantic-dark animate-bounce" fill="currentColor" style={{ animationDelay: '300ms' }} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-romantic-dark tracking-tight leading-tight">
            Will you be my Valentine?
          </h1>
          
          <p className="text-xl md:text-2xl text-romantic-dark/70 font-medium">
            Choose wisely... 💖
          </p>
        </div>

        <div className="relative h-32 flex items-center justify-center gap-6">
          {/* Yes Button - Always stable */}
          <Button
            onClick={handleYesClick}
            size="lg"
            className="bg-romantic-dark hover:bg-romantic-dark/90 text-white px-12 py-8 text-2xl md:text-3xl font-bold rounded-full shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-white/30 z-20"
          >
            Yes! 💕
          </Button>

          {/* No Button - Evasive */}
          <Button
            ref={noButtonRef}
            onPointerEnter={moveNoButton}
            onPointerDown={moveNoButton}
            onTouchStart={moveNoButton}
            size="lg"
            variant="outline"
            className="absolute bg-white/80 hover:bg-white text-romantic-dark px-12 py-8 text-2xl md:text-3xl font-bold rounded-full shadow-xl border-4 border-romantic-dark/20 transition-all duration-200 cursor-pointer"
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            No
          </Button>
        </div>

        <p className="text-sm text-romantic-dark/50 italic animate-in fade-in delay-1000">
          (Hint: There's only one right answer 😉)
        </p>
      </div>

      {/* Decorative floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Heart className="absolute top-10 left-10 w-8 h-8 text-romantic-dark/10 animate-pulse" fill="currentColor" style={{ animationDuration: '3s' }} />
        <Heart className="absolute top-20 right-20 w-6 h-6 text-romantic-dark/10 animate-pulse" fill="currentColor" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <Heart className="absolute bottom-20 left-20 w-10 h-10 text-romantic-dark/10 animate-pulse" fill="currentColor" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
        <Heart className="absolute bottom-32 right-32 w-7 h-7 text-romantic-dark/10 animate-pulse" fill="currentColor" style={{ animationDuration: '2.8s', animationDelay: '0.3s' }} />
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center text-romantic-dark/40 text-xs">
        © 2026. Built with <Heart className="inline w-3 h-3 mx-1" fill="currentColor" /> using{' '}
        <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="hover:text-romantic-dark/60 transition-colors">
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
