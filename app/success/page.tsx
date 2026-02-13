'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import Confetti from 'react-confetti';

const playfairDisplay = Playfair_Display({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
});

export default function Success() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [confettiOpacity, setConfettiOpacity] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Set window size
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);

    // Start fading confetti after 4.5 seconds
    const fadeTimer = setTimeout(() => {
      setConfettiOpacity(0);
    }, 4500);

    // Stop confetti completely after 5.5 seconds (allowing 1 second for fade)
    const stopTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 5500);

    // Auto-play background music
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    if (audio) {
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          // Autoplay was prevented, user will need to click to play
          console.log('Autoplay prevented:', error);
        });
    }

    return () => {
      window.removeEventListener('resize', updateWindowSize);
      clearTimeout(fadeTimer);
      clearTimeout(stopTimer);
    };
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 py-12 px-4 overflow-x-hidden relative">
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
      
      {/* Confetti */}
      {showConfetti && (
        <div style={{ opacity: confettiOpacity, transition: 'opacity 1s ease-out' }}>
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={500}
          />
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Background Music */}
        <audio 
          id="background-music" 
          loop
          preload="auto"
        >
          <source src="/music/background.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        {/* Music Control Button */}
        <button
          onClick={toggleMusic}
          className="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white rounded-full p-4 shadow-lg transition-all z-50"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>

        {/* Main Heading */}
        <h1 className={`${playfairDisplay.className} text-4xl sm:text-5xl md:text-6xl text-red-600 text-center mb-12 animate-bounce`}>
          LESSSS FUCKIN GOOO!!!!
        </h1>

        {/* Personal Message Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-2xl p-6 sm:p-8 mb-12">
          <h2 className={`${playfairDisplay.className} text-2xl sm:text-3xl text-red-500 mb-4 text-center`}>
            Haha baby I knew you would say yes! Mission passed, date secured!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">           
            {/* Text - Right Aligned on desktop, centered on mobile */}
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-center sm:text-center flex-1">
              Jokes aside, I really am glad that I met you. You make me feel seen, you make me feel wanted, you make me feel complete. Thank you for everything, jaan. Also, if you try to run away from me, I'll lock you up in my room and torture you forever. Don't know what to write here anymore, so I need you to wait for the official papers. Goodnight baby and I'll see you soon! ;)
            </p>
          </div>
        </div>

        {/* QR Codes Section */}
        <div className="mb-12">
          <h2 className={`${playfairDisplay.className} text-2xl sm:text-3xl text-red-500 mb-6 text-center`}>
            Special Surprise
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center">
            {/* QR Code with Link */}
            <div className="flex flex-col items-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 bg-gray-200 flex items-center justify-center rounded-lg mb-2">
                <Image 
                  src="/images/qr.svg" 
                  alt="QR Code" 
                  width={256} 
                  height={256}
                  className="rounded-lg"
                />
                {/* Placeholder text - remove when you add your QR code */}
                {/* <span className="text-gray-500 text-sm">Add qr.svg to /public/images/</span> */}
              </div>
              <a 
                href="https://open.spotify.com/playlist/4g9ckIgTW2Kz0IoaXl23D3?si=bb7971a96b744462" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-500 hover:text-red-700 text-sm underline transition-colors"
              >
                Link
              </a>
            </div>
            
            {/* Space for your text - Add your content here */}
            <div className="flex-1 max-w-md">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-center sm:text-left">
                So I've been adding songs to this playlist ever since I started feeling something for you. Each and every song is handpicked and contains a piece of my heart, and my love for you. I hope you listen to them all, with lyrics of course, and tell me which ones are your favorites. For now, I think 50 songs would suffice, I'll keep adding more don't worry about that. Happy listening, baby!
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="text-red-500 hover:text-red-700 underline text-lg font-medium transition-colors"
          >
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
}
