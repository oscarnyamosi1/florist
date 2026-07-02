
interface TikTokVideo {
  id: string;
  title: string;
}

interface TikTokCarouselProps {
  videos: TikTokVideo[];
}

export default function TikTokCarousel({ videos }: TikTokCarouselProps) {
  // Take only the first 4 videos
  const displayVideos = videos.slice(0, 4);

  if (displayVideos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No videos available.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-2">
            Watch Us Create Magic
          </h2>
          <p className="text-muted-foreground text-lg">
            Behind the scenes of Nairobi&apos;s finest bouquets.
          </p>
        </div>
        <a
          href="https://tiktok.com/@abbywambui"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-zinc-900 text-white hover:bg-zinc-800 px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-colors shrink-0"
        >
          <i className="fa-brands fa-tiktok text-[#ee1d52]"></i> Follow @abbywambui
        </a>
      </div>

      {/* Static Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {displayVideos.map((video) => (
          <div key={video.id} className="flex justify-center">
            <div className="w-full max-w-[200px]">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 shadow-lg">
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${video.id}?lang=en-US`}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  scrolling="no"
                  title={video.title}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                  <p className="text-white font-bold text-sm leading-snug">
                    {video.title}
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/90">
                    <i className="fa-solid fa-play text-2xl ml-1"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}