"use client";
import { useEffect, useRef } from "react";

type ScrollCanvasSequenceProps = {
  frameCount: number;
  basePath: string;
  filePrefix: string;
  extension: string;
  imageWidth: number;
  imageHeight: number;
};

export default function ScrollCanvasSequence({
  frameCount,
  basePath,
  filePrefix,
  extension,
  imageWidth,
  imageHeight,
}: ScrollCanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Preload all frames
  useEffect(() => {
    const loadImages = async () => {
      const imgs: HTMLImageElement[] = [];
      for (let i = 0; i < frameCount; i++) {
        const padded = i.toString().padStart(2, "0");
        const img = new Image();
        img.src = `${basePath}/${filePrefix}_${padded}${extension}`;
        await new Promise((res) => (img.onload = res));
        imgs.push(img);
      }
      imagesRef.current = imgs;
      drawFrame(0); // draw first frame
    };

    loadImages();
  }, []);

  // Scroll handler
  useEffect(() => {
    const onScroll = () => {
      const canvas = canvasRef.current;
      const section = sectionRef.current;
      const context = canvas?.getContext("2d");
      const imgs = imagesRef.current;
      if (!canvas || !context || !section || imgs.length === 0) return;

      const rect = section.getBoundingClientRect();
      const scrollTop = -rect.top;
      const maxScroll = section.offsetHeight - window.innerHeight;
      const scrollFraction = Math.min(1, Math.max(0, scrollTop / maxScroll));
      const index = Math.floor(scrollFraction * (frameCount - 1));

      drawFrame(index);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [frameCount]);

  // Resize canvas on window size change
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawFrame(0);
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Draw frame and center-fit
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const img = imagesRef.current[index];
    if (!canvas || !context || !img) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = imageWidth / imageHeight;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawHeight = canvas.height;
      drawWidth = img.width * (canvas.height / img.height);
      offsetX = (canvas.width - drawWidth) / 2;
    } else {
      drawWidth = canvas.width;
      drawHeight = img.height * (canvas.width / img.width);
      offsetY = (canvas.height - drawHeight) / 2;
    }

    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  return (
    <div ref={sectionRef} className="relative h-[3500px]">
      <div className="sticky top-0 h-screen w-full">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          width={imageWidth}
          height={imageHeight}
        />
      </div>
    </div>
  );
}
