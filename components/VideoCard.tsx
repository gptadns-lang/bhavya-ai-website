"use client";
import { useState } from "react";

export default function VideoCard({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy">
      {play ? (
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button onClick={() => setPlay(true)} className="group relative block w-full text-left">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            loading="lazy"
            className="aspect-video w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/10">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-xl text-navy">
              ▶
            </span>
          </span>
        </button>
      )}
      <p className="p-4 text-sm font-semibold leading-snug">{title}</p>
    </div>
  );
}
