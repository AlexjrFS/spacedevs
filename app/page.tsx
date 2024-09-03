"use client"
import { useEffect, useRef } from 'react';

export default function Home() {
  interface Star {
    x: number;
    y: number;
    z: number;
    o: string;
  }

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const c = canvas.getContext('2d')! ;
    const numStars = 1900;
    const radius = '0.' + Math.floor(Math.random() * 9) + 1;
    let focalLength = canvas.width * 2;
    let centerX: number;
    let centerY: number;
    
    let stars: Star[] = [];
    let star: Star;
    let i: number;
    
    let animate = true;
    let warp = 0;
    
    function initializeStars(): void {
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
    
      stars = [];
      for (i = 0; i < numStars; i++) {
        star = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
          o: '0.' + Math.floor(Math.random() * 99) + 1
        };
        stars.push(star);
      }
    }
    
    function moveStars(): void {
      for (i = 0; i < numStars; i++) {
        star = stars[i];
        star.z--;
    
        if (star.z <= 0) {
          star.z = canvas.width;
        }
      }
    }
    
    function drawStars(): void {
      let pixelX: number, pixelY: number, pixelRadius: number;
    
      if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeStars();
      }
    
      if (warp === 0) {
        c.fillStyle = "rgba(0,10,20,1)";
        c.fillRect(0, 0, canvas.width, canvas.height);
      }
    
      c.fillStyle = "rgba(209, 255, 255, " + radius + ")";
    
      for (i = 0; i < numStars; i++) {
        star = stars[i];
    
        pixelX = (star.x - centerX) * (focalLength / star.z);
        pixelX += centerX;
        pixelY = (star.y - centerY) * (focalLength / star.z);
        pixelY += centerY;
        pixelRadius = 1 * (focalLength / star.z);
    
        c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
        c.fillStyle = "rgba(209, 255, 255, " + star.o + ")";
      }
    }
    
    function executeFrame(): void {
      if (animate) {
        requestAnimationFrame(executeFrame);
      }
      moveStars();
      drawStars();
    }
    
    initializeStars();
    executeFrame();
    
    const handleScreenClick = () => {
      console.log("Tela clicada");
      warp = warp === 1 ? 0 : 1;
      c.clearRect(0, 0, canvas.width, canvas.height);
      executeFrame();
    };

    document.body.addEventListener("click", handleScreenClick);
    
    return () => {
      document.body.removeEventListener("click", handleScreenClick);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id='w'>
        <canvas ref={canvasRef} id="space"></canvas>
      </div> 
    </main>
  );
}
