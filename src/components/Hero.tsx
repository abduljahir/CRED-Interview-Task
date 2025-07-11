"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://web-images.credcdn.in/v2/_next/assets/videos/garage/desktop-hero-video.mp4?tr=q-95"
      />
    </section>
  );
}
