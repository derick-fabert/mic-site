const LOCAL_VIDEO_PATH = "/MIC%2030th%20Anniversary%20Video-1080p.mp4";

export default function VideoWrapper() {
  return (
    <div className="bg-navy px-4 py-10">
      <div className="mx-auto w-full max-w-360">
        <div className="aspect-video overflow-hidden rounded-lg border border-white/20 bg-black shadow-lg">
          <video
            className="h-full w-full"
            src={LOCAL_VIDEO_PATH}
            controls
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
