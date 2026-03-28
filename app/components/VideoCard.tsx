"use client";

import Link from "next/link";
import { useRef, useState } from "react";

export function VideoCard({
  slug,
  title,
  location,
  thumbnail,
  previewVideo,
}: {
  slug: string;
  title: string;
  location: string;
  thumbnail: string;
  previewVideo?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [hovering, setHovering] = useState(false);

  function handleMouseEnter() {
    setHovering(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }

  function handleMouseLeave() {
    setHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  return (
    <Link
      href={`/portfolio/${slug}`}
      className="group block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg bg-bg-surface shadow-sm">
        {/* Thumbnail */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${
            hovering && videoReady ? "opacity-0" : "opacity-100"
          } group-hover:scale-[1.02]`}
          style={{ backgroundImage: `url(${thumbnail})` }}
        />

        {/* Preview video */}
        {previewVideo && (
          <video
            ref={videoRef}
            src={previewVideo}
            muted
            loop
            playsInline
            preload="none"
            onCanPlayThrough={() => setVideoReady(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovering && videoReady ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            hovering ? "bg-black/30" : "bg-black/10"
          }`}
        />

        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm bg-black/20">
            <svg
              className="w-5 h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-display text-xl text-text-primary group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-muted mt-1">{location}</p>
      </div>
    </Link>
  );
}
