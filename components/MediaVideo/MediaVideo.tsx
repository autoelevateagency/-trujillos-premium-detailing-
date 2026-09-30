"use client";

import { useEffect, useRef, type JSX, type VideoHTMLAttributes } from "react";

type MediaVideoProps = {
  src: string;
  className?: string;
  active?: boolean;
  poster?: string;
} & Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  "src" | "className" | "autoPlay" | "muted" | "playsInline" | "loop"
>;

export const MediaVideo = ({
  src,
  className,
  active = true,
  poster,
  ...rest
}: MediaVideoProps): JSX.Element => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const sync = async (): Promise<void> => {
      if (!active) {
        video.pause();
        return;
      }

      try {
        await video.play();
      } catch {
        // Autoplay can be blocked; muted + playsInline usually succeeds.
      }
    };

    void sync();
  }, [active, src]);

  useEffect(() => {
    const video = ref.current;
    if (!video || !active) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            void video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    io.observe(video);
    return () => io.disconnect();
  }, [active, src]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      {...rest}
    />
  );
};
