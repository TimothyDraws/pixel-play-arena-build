
import { Button } from "@/components/ui/button";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
}

const GameCard = ({ title, description, image }: GameCardProps) => {
  return (
    <div className="card-gradient rounded-lg overflow-hidden border border-white/10 hover:border-gaming-accent/50 transition-all duration-300 group">
      <div className="aspect-video bg-gradient-to-br from-gaming-accent/20 to-gaming-purple/20 flex items-center justify-center text-6xl">
        {image}
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="font-orbitron font-bold text-xl text-white group-hover:text-gaming-accent transition-colors">
          {title}
        </h3>
        <p className="text-white/70 text-sm">
          {description}
        </p>
        <Button 
          className="w-full bg-gaming-purple hover:bg-gaming-purple/80 text-white rounded-lg"
        >
          Play
        </Button>
      </div>
    </div>
  );
};

export default GameCard;
