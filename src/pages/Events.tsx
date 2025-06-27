
import Navigation from "@/components/Navigation";
import SocialFooter from "@/components/SocialFooter";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-orbitron font-bold text-white mb-2">
                JOIN THE
              </h2>
              <h1 className="text-6xl font-orbitron font-black text-gradient mb-6">
                COZY CORNER
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Find a Party, Daily Events
              </p>
            </div>

            <div className="bg-gaming-bg-secondary/50 backdrop-blur-sm rounded-lg p-12 border border-white/10">
              <div className="text-8xl mb-6">🐧</div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                Community Gaming Hub
              </h3>
              <p className="text-white/80 mb-8">
                Connect with fellow gamers, join daily events, and find your squad in our cozy corner of the internet.
              </p>
              
              <button className="bg-gaming-purple hover:bg-gaming-purple/80 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
                DISCORD
              </button>
            </div>
          </div>
        </div>
      </div>

      <SocialFooter />
    </div>
  );
};

export default Events;
