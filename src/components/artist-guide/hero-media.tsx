"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroAsset, HeroMedia as HeroMediaConfig } from "@/content/artist-guide/types";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { cn } from "@/lib/cn";

const DESKTOP_QUERY = "(min-width: 768px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Background layer of the hero. The Brand Green ambient field always renders
 * and stays visible as fallback; image or video media fades in on top.
 */
export function HeroMedia({ media }: { media: HeroMediaConfig }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_80%_0%,#3a5f55_0%,#28463f_42%,#16261f_100%)]" />
      <AmbientBackground variant="dark" />
      {media.type === "image" ? <ResponsivePicture asset={media.src} /> : null}
      {media.type === "video" ? <LoopVideo media={media} /> : null}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#13211c] via-[#13211c]/60 to-transparent" />
    </div>
  );
}

function ResponsivePicture({ asset, className }: { asset: HeroAsset; className?: string }) {
  return (
    <picture>
      <source media={DESKTOP_QUERY} srcSet={asset.desktop} />
      <img
        alt=""
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
        decoding="async"
        src={asset.mobile}
      />
    </picture>
  );
}

function LoopVideo({ media }: { media: Extract<HeroMediaConfig, { type: "video" }> }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const reduce = window.matchMedia(REDUCED_MOTION_QUERY);

    function sync() {
      setReducedMotion(reduce.matches);
      setSrc(reduce.matches ? null : desktop.matches ? media.src.desktop : media.src.mobile);
    }

    sync();
    desktop.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      desktop.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, [media.src.desktop, media.src.mobile]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;
    setReady(false);
    video.muted = true;
    void video.play().catch(() => {});
  }, [src]);

  if (reducedMotion) {
    return media.poster ? <ResponsivePicture asset={media.poster} /> : null;
  }

  return (
    <>
      {media.poster ? <ResponsivePicture asset={media.poster} /> : null}
      {src ? (
        <video
          autoPlay
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            ready ? "opacity-100" : "opacity-0",
          )}
          key={src}
          loop
          muted
          onCanPlay={() => setReady(true)}
          playsInline
          preload="metadata"
          ref={videoRef}
          src={src}
        />
      ) : null}
    </>
  );
}
