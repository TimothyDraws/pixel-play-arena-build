
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GameCard from "@/components/GameCard";
import SocialFooter from "@/components/SocialFooter";

const Index = () => {
  const games = [
    {
      title: "LAND SLIDE",
      description: "Idle Fishing Adventure",
      image: "🎣"
    },
    {
      title: "WADDLE WARS",
      description: "Roguelike Defense",
      image: "🐧"
    },
    {
      title: "FISHIN' FRIENDS",
      description: "Endless Runner",
      image: "🐟"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Cozy Verse Community Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-orbitron font-bold text-white mb-2">
                JOIN THE
              </h2>
              <h1 className="text-6xl font-orbitron font-black text-gradient mb-6">
                COZYVERSE
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                The coziest gaming communities in the Cozy Corner. Look for a casual 
                sweaty group, hangout, or join one of our many weekly events.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gaming-purple hover:bg-gaming-purple/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Twitch
              </button>
              <button className="bg-gaming-purple hover:bg-gaming-purple/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Discord
              </button>
              <button className="bg-gaming-purple hover:bg-gaming-purple/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                X
              </button>
              <button className="bg-gaming-purple hover:bg-gaming-purple/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Site
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-4">
              PLAY OUR GAMES
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <GameCard
                key={index}
                title={game.title}
                description={game.description}
                image={game.image}
              />
            ))}
          </div>
        </div>
      </section>

      <SocialFooter />
    </div>
  );
};

export default Index;
