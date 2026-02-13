'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Pacifico } from 'next/font/google';
import Confetti from 'react-confetti';

const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'] 
});

export default function Success() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [confettiOpacity, setConfettiOpacity] = useState(1);
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

    return () => {
      window.removeEventListener('resize', updateWindowSize);
      clearTimeout(fadeTimer);
      clearTimeout(stopTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 py-12 px-4 overflow-x-hidden">
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

      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className={`${pacifico.className} text-6xl text-red-600 text-center mb-12 animate-bounce`}>
          Thank you for being my Valentine! ❤️
        </h1>

        {/* Personal Message Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-2xl p-8 mb-12">
          <h2 className={`${pacifico.className} text-3xl text-red-500 mb-4 text-center`}>
            A Message for You
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg text-center">
            {/* Replace this text with your personal message */}
            From the moment I met you, my life has been filled with joy and happiness. 
            Every day with you is a blessing, and I am grateful for every moment we share together. 
            You make my heart sing, and I cannot imagine my life without you. Thank you for being 
            my partner, my best friend, and my Valentine. I love you more than words can express, 
            and I look forward to creating many more beautiful memories with you. Happy Valentine's Day, 
            my love! ❤️
          </p>
        </div>

        {/* QR Codes Section */}
        <div className="mb-12">
          <h2 className={`${pacifico.className} text-3xl text-red-500 mb-6 text-center`}>
            Special Surprises
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* QR Code 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-48 h-48 mx-auto bg-gray-200 flex items-center justify-center rounded-lg mb-4">
                {/* <Image 
                  src="/images/qr1.png" 
                  alt="QR Code 1" 
                  width={192} 
                  height={192}
                  className="rounded-lg"
                /> */}
                <span className="text-gray-500 text-sm">Add QR Code 1</span>
              </div>
              <p className="text-gray-600 font-medium">Scan for surprise #1</p>
            </div>

            {/* QR Code 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-48 h-48 mx-auto bg-gray-200 flex items-center justify-center rounded-lg mb-4">
                {/* <Image 
                  src="/images/qr2.png" 
                  alt="QR Code 2" 
                  width={192} 
                  height={192}
                  className="rounded-lg"
                /> */}
                <span className="text-gray-500 text-sm">Add QR Code 2</span>
              </div>
              <p className="text-gray-600 font-medium">Scan for surprise #2</p>
            </div>

            {/* QR Code 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-48 h-48 mx-auto bg-gray-200 flex items-center justify-center rounded-lg mb-4">
                {/* <Image 
                  src="/images/qr3.png" 
                  alt="QR Code 3" 
                  width={192} 
                  height={192}
                  className="rounded-lg"
                /> */}
                <span className="text-gray-500 text-sm">Add QR Code 3</span>
              </div>
              <p className="text-gray-600 font-medium">Scan for surprise #3</p>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="mb-12">
          <h2 className={`${pacifico.className} text-3xl text-red-500 mb-6 text-center mt-12`}>
            Our Memories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Photo 1 */}
            <div className="aspect-square bg-gray-200 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
              {/* <Image 
                src="/images/photo1.jpg" 
                alt="Memory 1" 
                width={400} 
                height={400}
                className="aspect-square rounded-lg shadow-lg object-cover"
              /> */}
              <span className="text-gray-500 text-sm text-center px-4">Add Photo 1</span>
            </div>

            {/* Photo 2 */}
            <div className="aspect-square bg-gray-200 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
              {/* <Image 
                src="/images/photo2.jpg" 
                alt="Memory 2" 
                width={400} 
                height={400}
                className="aspect-square rounded-lg shadow-lg object-cover"
              /> */}
              <span className="text-gray-500 text-sm text-center px-4">Add Photo 2</span>
            </div>

            {/* Photo 3 */}
            <div className="aspect-square bg-gray-200 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
              {/* <Image 
                src="/images/photo3.jpg" 
                alt="Memory 3" 
                width={400} 
                height={400}
                className="aspect-square rounded-lg shadow-lg object-cover"
              /> */}
              <span className="text-gray-500 text-sm text-center px-4">Add Photo 3</span>
            </div>

            {/* Photo 4 */}
            <div className="aspect-square bg-gray-200 rounded-lg shadow-lg flex items-center justify-center transition-transform hover:scale-105">
              {/* <Image 
                src="/images/photo4.jpg" 
                alt="Memory 4" 
                width={400} 
                height={400}
                className="aspect-square rounded-lg shadow-lg object-cover"
              /> */}
              <span className="text-gray-500 text-sm text-center px-4">Add Photo 4</span>
            </div>
          </div>
        </div>

        {/* Music Player Section */}
        <div className="mb-12">
          <h2 className={`${pacifico.className} text-3xl text-red-500 mb-6 text-center mt-12`}>
            Our Song
          </h2>
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-2xl p-8">
            <div className="flex flex-col items-center">
              <p className="text-gray-600 mb-4 text-center">
                Add your romantic song to /public/music/romantic-song.mp3
              </p>
              <audio 
                controls 
                className="w-full max-w-md"
                style={{
                  filter: 'hue-rotate(320deg) saturate(1.5)',
                }}
              >
                <source src="/music/romantic-song.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
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
