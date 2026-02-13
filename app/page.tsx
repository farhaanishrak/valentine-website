'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'] 
});

export default function Home() {
  const router = useRouter();
  const [clickCount, setClickCount] = useState<number>(0);
  const [noButtonPosition, setNoButtonPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const getNoButtonText = (): string => {
    switch (clickCount) {
      case 0: return 'No';
      case 1: return 'Are you sure?';
      case 2: return 'Think it through';
      case 3: return 'Please baby?';
      default: return 'No';
    }
  };

  const getNoButtonScale = (): string => {
    switch (clickCount) {
      case 0: return 'scale-100';
      case 1: return 'scale-90';
      case 2: return 'scale-75';
      case 3: return 'scale-60';
      default: return 'scale-50';
    }
  };

  const getYesButtonScale = (): string => {
    switch (clickCount) {
      case 0: return 'scale-100';
      case 1: return 'scale-125';
      case 2: return 'scale-150';
      case 3: return 'scale-175';
      default: return 'scale-200';
    }
  };

  const handleNoClick = () => {
    if (clickCount < 4) {
      setClickCount(clickCount + 1);
    }
  };

  const handleNoMouseEnter = () => {
    if (clickCount >= 4) {
      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Button approximate dimensions (accounting for padding and scaling)
      const buttonWidth = 180; // Safe estimate for button width
      const buttonHeight = 70; // Safe estimate for button height
      
      // Calculate center position
      const centerX = viewportWidth / 2;
      const centerY = viewportHeight / 2;
      
      // Generate random offset within ±800px horizontal, ±400px vertical from center
      const randomOffsetX = (Math.random() - 0.5) * 2 * 800; // Range: -800 to +800
      const randomOffsetY = (Math.random() - 0.5) * 2 * 400; // Range: -400 to +400
      
      // Calculate new position (offset from center, then subtract half button size for centering)
      let newX = centerX + randomOffsetX - buttonWidth / 2;
      let newY = centerY + randomOffsetY - buttonHeight / 2;
      
      // Clamp to viewport bounds to ensure button stays fully visible
      newX = Math.max(0, Math.min(newX, viewportWidth - buttonWidth));
      newY = Math.max(0, Math.min(newY, viewportHeight - buttonHeight));
      
      setNoButtonPosition({ x: newX, y: newY });
    }
  };

  const handleYesClick = () => {
    router.push('/success');
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center p-4 relative">
      {/* Animated Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="heart-float" style={{ left: '10%', animationDelay: '0s' }}>💕</div>
        <div className="heart-float" style={{ left: '20%', animationDelay: '2s' }}>❤️</div>
        <div className="heart-float" style={{ left: '30%', animationDelay: '4s' }}>💖</div>
        <div className="heart-float" style={{ left: '50%', animationDelay: '1s' }}>💗</div>
        <div className="heart-float" style={{ left: '60%', animationDelay: '3s' }}>💓</div>
        <div className="heart-float" style={{ left: '70%', animationDelay: '5s' }}>💕</div>
        <div className="heart-float" style={{ left: '80%', animationDelay: '2.5s' }}>❤️</div>
        <div className="heart-float" style={{ left: '90%', animationDelay: '4.5s' }}>💖</div>
      </div>
      
      <style jsx>{`
        .heart-float {
          position: absolute;
          bottom: -50px;
          font-size: 2rem;
          opacity: 0.15;
          animation: floatUp 15s infinite ease-in;
        }
        
        @keyframes floatUp {
          0% {
            bottom: -50px;
            opacity: 0.15;
            transform: translateX(0) rotate(0deg);
          }
          50% {
            opacity: 0.25;
          }
          100% {
            bottom: 110vh;
            opacity: 0;
            transform: translateX(100px) rotate(360deg);
          }
        }
      `}</style>
      <div className="text-center relative z-10">
        {/* Heart Image - Add your heart image to /public/images/heart.png */}
        <div className="mb-4 sm:mb-8 flex justify-center">
          <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-red-200 rounded-lg shadow-lg flex items-center justify-center">
            {/* <Image 
              src="/images/heart.png" 
              alt="Heart" 
              width={300} 
              height={300}
              className="rounded-lg shadow-lg"
            /> */}
            <span className="text-7xl sm:text-9xl">❤️</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className={`${pacifico.className} text-3xl sm:text-4xl md:text-5xl text-red-600 mb-6 sm:mb-8 animate-pulse px-4`}>
          Will you be my Valentine?
        </h1>

        {/* Buttons Container */}
        <div className="flex gap-2 sm:gap-4 items-center justify-center relative min-h-[80px] sm:min-h-[100px]">
          {/* Yes Button */}
          <button
            onClick={handleYesClick}
            className={`bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl transition-all duration-300 ease-in-out hover:scale-110 ${getYesButtonScale()}`}
          >
            Yes
          </button>

          {/* No Button */}
          <button
            onClick={handleNoClick}
            onMouseEnter={handleNoMouseEnter}
            className={`bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl transition-all duration-300 ease-in-out ${getNoButtonScale()} ${
              clickCount >= 4 ? 'fixed transition-all duration-200' : ''
            }`}
            style={
              clickCount >= 4
                ? {
                    left: `${noButtonPosition.x}px`,
                    top: `${noButtonPosition.y}px`,
                  }
                : {}
            }
          >
            {getNoButtonText()}
          </button>
        </div>
      </div>
    </div>
  );
}
