function BrowserMockup({ url, src, poster, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#130d1c] shadow-2xl shadow-black/40 overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 flex-1 text-xs text-neutral-500 font-mono bg-white/5 rounded-full px-3 py-1 truncate">
          {url}
        </span>
      </div>

      <video
        className="w-full aspect-video object-cover object-top bg-black"
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      />
    </div>
  );
}

export default BrowserMockup;
