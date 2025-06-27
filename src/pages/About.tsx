
import Navigation from "@/components/Navigation";
import SocialFooter from "@/components/SocialFooter";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h1 className="text-6xl font-orbitron font-black text-white">
                ABOUT
              </h1>
              
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  Cozy Versus is a gaming program and community aiming to foster competitive 
                  competitive and social play across a wide range of titles and genres. Our 
                  headline event is the Cozy Cash Cup, a seasonal tournament series attracting 
                  professional eSports teams such as Luminosity, Solaris, Arrival Seven, and 
                  InControl. Gamers also join the Cozy Corner to find groups, hangout, and 
                  play in one of our many weekly events.
                </p>
                
                <div className="pt-6">
                  <p className="text-white mb-2">Contact us for partnerships:</p>
                  <a 
                    href="mailto:contact@cozylabs.xyz" 
                    className="text-gaming-accent font-semibold text-xl hover:text-gaming-accent/80 transition-colors"
                  >
                    CONTACT@COZYLABS.XYZ
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="text-9xl">🎮</div>
            </div>
          </div>
        </div>
      </div>

      <SocialFooter />
    </div>
  );
};

export default About;
