import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "VP of Operations, Meridian Capital",
    rating: 5,
    result: "+40% energy levels",
    videoPlaceholder: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://videos.pexels.com/video-files/4761434/4761434-uhd_2560_1440_25fps.mp4",
    details: "Focusing on strength training and high-performance nutrition has completely changed my working day."
  },
  {
    name: "Rebecca Okonkwo",
    title: "CFO, Halo Health",
    rating: 5,
    result: "Lost 15 lbs in 12 weeks",
    videoPlaceholder: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://videos.pexels.com/video-files/4056990/4056990-uhd_2560_1440_25fps.mp4",
    details: "The efficiency of the sessions is what makes it work for me. I can be in and out in 45 minutes."
  },
  {
    name: "Diana Marchetti",
    title: "Managing Director, Vantage Partners",
    rating: 5,
    result: "2x strength gains",
    videoPlaceholder: "https://images.unsplash.com/photo-1548691905-57c36cc8d93f?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://videos.pexels.com/video-files/4754031/4754031-uhd_2560_1440_25fps.mp4",
    details: "I never thought I could lift these weights, but the progressive methodology really works."
  },
  {
    name: "Priya Nair",
    title: "SVP Engineering, Nexus Technologies",
    rating: 5,
    result: "Improved sleep quality",
    videoPlaceholder: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
    videoUrl: "https://videos.pexels.com/video-files/3209211/3209211-uhd_2560_1440_25fps.mp4",
    details: "Tracking my recovery metrics has been a game-changer for my productivity and mood."
  },
  {
    name: "Amara Williams",
    title: "CEO, Bloom Collective",
    rating: 5,
    result: "70% stress reduction",
    videoPlaceholder: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://videos.pexels.com/video-files/4057411/4057411-uhd_2560_1440_25fps.mp4",
    details: "The cycle-synced nutrition plan eliminated my afternoon crashes entirely. I'm sharper in meetings now than I was in my 20s."
  },
  {
    name: "Natasha Voronova",
    title: "Partner, Apex Legal Group",
    rating: 5,
    result: "First marathon at 44",
    videoPlaceholder: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://videos.pexels.com/video-files/4753879/4753879-uhd_2560_1440_25fps.mp4",
    details: "I came here to lose weight. I left having completed a marathon. The coaches saw potential in me I didn't know existed."
  },
  {
    name: "Mei-Lin Zhao",
    title: "CTO, Quantum Bridge",
    rating: 5,
    result: "Reversed pre-diabetes",
    videoPlaceholder: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://videos.pexels.com/video-files/4056958/4056958-uhd_2560_1440_25fps.mp4",
    details: "My doctor couldn't believe the bloodwork after 6 months. The gut health and metabolic protocol genuinely changed my life."
  },
  {
    name: "Olivia Restrepo",
    title: "Head of Product, Finova",
    rating: 5,
    result: "Confidence transformed",
    videoPlaceholder: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=2069&auto=format&fit=crop",
    videoUrl: "https://videos.pexels.com/video-files/4754020/4754020-uhd_2560_1440_25fps.mp4",
    details: "The Inner Circle community gave me a support system I never had. These women understand the pressure and the ambition."
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: true,
    skipSnaps: false 
  });
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const toggleVideo = (index: number) => {
    if (playingIndex === index) {
      // Pause current video
      videoRefs.current[index]?.pause();
      setPlayingIndex(null);
    } else {
      // Pause any previously playing video
      if (playingIndex !== null && videoRefs.current[playingIndex]) {
        videoRefs.current[playingIndex]!.pause();
      }
      setPlayingIndex(index);
      // Play will be triggered after the video element mounts via useEffect
    }
  };

  // Auto-play video when playingIndex changes
  useEffect(() => {
    if (playingIndex !== null && videoRefs.current[playingIndex]) {
      videoRefs.current[playingIndex]!.play().catch(() => {
        // Autoplay may be blocked, that's okay
      });
    }
  }, [playingIndex]);

  // Pause video when carousel scrolls away from the playing card
  useEffect(() => {
    if (!emblaApi || playingIndex === null) return;
    const handleScroll = () => {
      const inView = emblaApi.slidesInView();
      if (!inView.includes(playingIndex)) {
        videoRefs.current[playingIndex]?.pause();
        setPlayingIndex(null);
      }
    };
    emblaApi.on("scroll", handleScroll);
    return () => { emblaApi.off("scroll", handleScroll); };
  }, [emblaApi, playingIndex]);

  return (
    <section className="bg-warmgray py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-16"
        >
          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-emerald">
            Success Stories
          </span>
          <h2 className="mt-4 font-heading text-3xl font-black uppercase text-foreground sm:text-5xl leading-tight">
            Real Women, <span className="text-citrus">Real Results</span>
          </h2>
        </motion.div>

        {/* Carousel with side arrows */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="hidden md:flex absolute -left-6 z-10 h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card shadow-lg transition-all duration-200 hover:bg-emerald hover:text-white hover:scale-110 disabled:opacity-30 disabled:hover:bg-card disabled:hover:text-current disabled:hover:scale-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="embla w-full" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {testimonials.map((t, i) => (
                <div key={t.name} className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_80%] md:flex-[0_0_45%] lg:flex-[0_0_31%]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-lg ring-1 ring-border transition-all duration-300 hover:shadow-2xl"
                    style={{ height: "520px" }}
                  >
                    {/* Video/Image Area — fixed height */}
                    <div className="relative overflow-hidden" style={{ height: "340px", flexShrink: 0 }}>
                      {playingIndex === i ? (
                        /* Inline video player */
                        <>
                          <video
                            ref={(el) => { videoRefs.current[i] = el; }}
                            src={t.videoUrl}
                            controls
                            playsInline
                            className="h-full w-full object-cover"
                            onEnded={() => setPlayingIndex(null)}
                          >
                            Your browser does not support the video tag.
                          </video>
                          {/* Pause overlay — click anywhere on the video area outside native controls */}
                          <button
                            onClick={() => toggleVideo(i)}
                            className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/70 hover:scale-110"
                            aria-label={`Pause ${t.name}'s video`}
                          >
                            <Pause size={16} fill="currentColor" />
                          </button>
                        </>
                      ) : (
                        /* Thumbnail with play button */
                        <>
                          <img
                            src={t.videoPlaceholder}
                            alt={t.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                          
                          {/* Play Button Overlay */}
                          <button
                            onClick={() => toggleVideo(i)}
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 cursor-pointer"
                            aria-label={`Play ${t.name}'s video`}
                          >
                            <div className="h-16 w-16 rounded-full bg-citrus/90 backdrop-blur-sm flex items-center justify-center text-citrus-foreground shadow-2xl transition-transform duration-200 hover:scale-110">
                              <Play size={24} fill="currentColor" />
                            </div>
                          </button>

                          {/* Badge */}
                          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                            <div className="inline-block rounded-lg bg-emerald px-3 py-1.5 text-xs font-bold text-white mb-2">
                              {t.result}
                            </div>
                            <h3 className="font-heading text-xl font-bold text-white">{t.name}</h3>
                            <p className="text-sm text-white/70">{t.title}</p>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Content Area — fills remaining space */}
                    <div className="flex flex-col flex-1 p-6">
                      {/* Show name/title when video is playing (since badge is hidden) */}
                      {playingIndex === i && (
                        <div className="mb-3">
                          <div className="inline-block rounded-lg bg-emerald px-2.5 py-1 text-[10px] font-bold text-white mb-1.5">
                            {t.result}
                          </div>
                          <h3 className="font-heading text-base font-bold text-foreground">{t.name}</h3>
                          <p className="text-xs text-muted-foreground">{t.title}</p>
                        </div>
                      )}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="h-3 w-3 fill-citrus text-citrus" />
                        ))}
                      </div>
                      <p className="text-sm italic leading-relaxed text-muted-foreground/90">
                        "{t.details}"
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="hidden md:flex absolute -right-6 z-10 h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-card shadow-lg transition-all duration-200 hover:bg-emerald hover:text-white hover:scale-110 disabled:opacity-30 disabled:hover:bg-card disabled:hover:text-current disabled:hover:scale-100"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile arrows (below carousel) */}
        <div className="mt-6 flex justify-center gap-4 md:hidden">
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-md transition-all hover:bg-emerald hover:text-white disabled:opacity-30"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-md transition-all hover:bg-emerald hover:text-white disabled:opacity-30"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Progress dots */}
        <div className="mt-12 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                selectedIndex === i ? "w-8 bg-citrus" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
