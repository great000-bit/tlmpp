import { ReactNode } from "react";
import { useTheme } from "next-themes";

interface VideoHeroProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const VideoHero = ({ imageSrc, title, subtitle, children }: VideoHeroProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image (simulating video) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-slow !text-white" 
          >
            {title}
          </h1>
          {subtitle && (
            <p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in !text-white/90" 
            >
              {subtitle}
            </p>
          )}
          {children && (
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default VideoHero;