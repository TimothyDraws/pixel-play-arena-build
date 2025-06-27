
import Navigation from "@/components/Navigation";
import SocialFooter from "@/components/SocialFooter";

const Partners = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-orbitron font-black text-white mb-8">
              OUR SPONSORS
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Avalanche Sponsor */}
            <div className="card-gradient rounded-lg p-8 border border-white/10 hover:border-gaming-accent/50 transition-all duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  A
                </div>
                <h3 className="font-orbitron font-bold text-xl text-white group-hover:text-gaming-accent transition-colors">
                  AVALANCHE
                </h3>
              </div>
            </div>

            {/* Placeholder sponsors */}
            <div className="card-gradient rounded-lg p-8 border border-white/10 hover:border-gaming-accent/50 transition-all duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gaming-purple rounded-full flex items-center justify-center text-white text-2xl">
                  ?
                </div>
                <h3 className="font-orbitron font-bold text-xl text-white/50">
                  COMING SOON
                </h3>
              </div>
            </div>

            <div className="card-gradient rounded-lg p-8 border border-white/10 hover:border-gaming-accent/50 transition-all duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-gaming-purple rounded-full flex items-center justify-center text-white text-2xl">
                  ?
                </div>
                <h3 className="font-orbitron font-bold text-xl text-white/50">
                  COMING SOON
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SocialFooter />
    </div>
  );
};

export default Partners;
