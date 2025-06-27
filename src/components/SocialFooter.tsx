
import { Twitch, Discord } from "lucide-react";
import { X } from "lucide-react";

const SocialFooter = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-12">
          <a 
            href="#" 
            className="text-white/60 hover:text-gaming-accent transition-colors flex items-center space-x-2"
          >
            <X className="h-5 w-5" />
            <span>Twitter</span>
          </a>
          <a 
            href="#" 
            className="text-white/60 hover:text-gaming-accent transition-colors flex items-center space-x-2"
          >
            <Discord className="h-5 w-5" />
            <span>Discord</span>
          </a>
          <a 
            href="#" 
            className="text-white/60 hover:text-gaming-accent transition-colors flex items-center space-x-2"
          >
            <Twitch className="h-5 w-5" />
            <span>Twitch</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SocialFooter;
