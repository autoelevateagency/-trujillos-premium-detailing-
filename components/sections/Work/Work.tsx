"use client";

import { useEffect, useRef, useState, type JSX } from "react";
import { useLocale } from "@/context/LocaleContext";
import { MediaVideo } from "@/components/MediaVideo/MediaVideo";
import { WORK_VIDEOS } from "@/data/media";

export const Work = (): JSX.Element => {
  const { dictionary } = useLocale();
  const t = dictionary.work;
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [indexLabel, setIndexLabel] = useState("01 / 06");
  const [activeIndex, setActiveIndex] = useState(0);
  const dragRef = useRef({ down: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = (): void => {
      const max = track.scrollWidth - track.clientWidth;
      const p = max ? track.scrollLeft / max : 0;
      setProgress(p * 100);
      const n = Math.min(6, Math.round(p * 5) + 1);
      setIndexLabel(`0${n} / 06`);
      setActiveIndex(n - 1);
    };

    const onWheel = (e: WheelEvent): void => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY) && e.shiftKey) {
        track.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    const onPointerDown = (e: PointerEvent): void => {
      if (e.pointerType !== "mouse") return;
      dragRef.current = {
        down: true,
        startX: e.clientX,
        scrollLeft: track.scrollLeft,
      };
      track.style.scrollSnapType = "none";
    };

    const onPointerUp = (): void => {
      if (dragRef.current.down) {
        dragRef.current.down = false;
        track.style.scrollSnapType = "";
      }
    };

    const onPointerMove = (e: PointerEvent): void => {
      if (!dragRef.current.down) return;
      track.scrollLeft =
        dragRef.current.scrollLeft - (e.clientX - dragRef.current.startX);
    };

    track.addEventListener("scroll", update, { passive: true });
    track.addEventListener("wheel", onWheel, { passive: false });
    track.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointermove", onPointerMove);
    update();

    return () => {
      track.removeEventListener("scroll", update);
      track.removeEventListener("wheel", onWheel);
      track.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <section className="wk" id="work">
      <div className="wkh">
        <h2
          className="si rv"
          style={{ fontSize: "clamp(40px,5vw,84px)" }}
        >
          {t.title}
        </h2>
        <span className="lab">{indexLabel}</span>
      </div>
      <div className="track" ref={trackRef}>
        {t.items.map((item, i) => (
          <div key={item.title} className="sl">
            <MediaVideo
              className="media-fill"
              src={WORK_VIDEOS[i]}
              active={Math.abs(i - activeIndex) <= 1}
            />
            <div className="media-shade" />
            <div className="n">{`0${i + 1}`}</div>
            <div className="cap">
              <span className="lab">{item.caption}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="prog">
        <i style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
};
