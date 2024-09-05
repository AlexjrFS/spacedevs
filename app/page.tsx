"use client"
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Lua from '../public/luagif.gif';
import Link from 'next/link';

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const animateStars = () => {
        container.style.animation = 'none';
        container.offsetHeight; 
        container.style.animation = 'animStar 10s linear infinite';
      };

      animateStars();
      window.addEventListener('resize', animateStars);
      return () => window.removeEventListener('resize', animateStars);
    }
  }, []);

  
  return (
    <main className="relative w-full h-screen flex flex-col justify-center items-center">
  <div className="relative">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div id="staticStars"></div>
  </div>

  <div className="class-lua flex flex-col items-center">
    <Image alt="" src={Lua} className="lua" />
    <div className="start mt-4">
      <Link href="/">Start</Link>
    </div>
  </div>
</main>


  );
}
