"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroMedia as HeroMediaConfig } from "@/content/artist-guide/types";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { cn } from "@/lib/cn";

/**
 * Background layer of the hero frame. The ambient orbs are always rendered;
 * a configured loop video fades in on top once it can play. With
 * `prefers-reduced-motion` the video stays paused on its first frame/poster.
 */
export function HeroMedia({ media }: { media: HeroMediaConfig }) {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <AmbientBackground variant="dark" />
      {media.type === "video" ? <LoopVideo media={media} /> : null}
      {/* Keeps hero copy readable over the ambient layer or a loop video */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-jk-brand-green-deep via-jk-brand-green-deep/70 to-transparent" />
    </div>
  );
}

function LoopVideo({ media }: { media: Extract<HeroMediaConfig, { type: "video" }> }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    function sync() {
      if (!video) return;
      if (query.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {});
      }
    }

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <video
      autoPlay
      className={cn(
        "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
        ready ? "opacity-70" : "opacity-0",
      )}
      loop
      muted
      onCanPlay={() => setReady(true)}
      playsInline
      poster={media.poster}
      preload="metadata"
      ref={videoRef}
    >
      {media.webmSrc ? <source src={media.webmSrc} type="video/webm" /> : null}
      <source src={media.src} type="video/mp4" />
    </video>
  );
}
