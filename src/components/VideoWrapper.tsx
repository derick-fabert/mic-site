const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/AkZ6LKTDibA?si=19V-WIs7mtGRTHbT";

export default function VideoWrapper() {
  return (
    <div className="bg-navy px-4 py-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="aspect-video overflow-hidden rounded-lg border border-white/20 bg-black shadow-lg">
          <iframe
            className="h-full w-full"
            src={YOUTUBE_EMBED_URL}
            title="MIC featured video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
