
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Twitch, Discord } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "COZY CUP",
      subtitle: "SEASON 2 FINALE",
      date: "June 21",
      description: "Marvel Rivals: 8 Teams, Double Elimination",
      prize: "$500",
      character: "🦸‍♂️"
    },
    {
      title: "COZY CORNER",
      subtitle: "JOIN THE COMMUNITY",
      date: "Daily",
      description: "Find a Party, Daily Events",
      prize: "Fun!",
      character: "🐧"
    },
    {
      title: "SEASON 3",
      subtitle: "COMING SOON",
      date: "TBA",
      description: "Sign up for updates and join our Discord",
      prize: "TBA",
      character: "🚀"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-gaming">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300E5FF" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-left space-y-6">
            <div className="space-y-2">
              <h1 className="text-6xl md:text-7xl font-orbitron font-black text-white animate-fade-in">
                {currentSlideData.title}
              </h1>
              <h2 className="text-xl md:text-2xl font-orbitron text-gaming-accent">
                {currentSlideData.subtitle}
              </h2>
              <p className="text-lg text-white/80">
                {currentSlideData.date}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-white/90">
                {currentSlideData.description}
              </p>
              <div className="text-3xl font-orbitron font-bold text-gaming-gold">
                PRIZE: {currentSlideData.prize}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-gaming-accent hover:bg-gaming-accent/80 text-gaming-bg font-semibold px-8 py-3 rounded-lg glow-cyan"
              >
                <Twitch className="mr-2 h-5 w-5" />
                Twitch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white px-8 py-3 rounded-lg"
              >
                <Discord className="mr-2 h-5 w-5" />
                Form
              </Button>
            </div>
          </div>

          {/* Character/Visual */}
          <div className="flex justify-center md:justify-end">
            <div className="text-9xl animate-float">
              {currentSlideData.character}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
