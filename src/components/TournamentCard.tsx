
import { Button } from "@/components/ui/button";

interface TournamentCardProps {
  game: string;
  date: string;
  prize: string;
  status?: "active" | "upcoming" | "completed";
  showResults?: boolean;
}

const TournamentCard = ({ game, date, prize, status = "upcoming", showResults = false }: TournamentCardProps) => {
  return (
    <div className="card-gradient border border-white/10 rounded-lg p-6 hover:border-gaming-accent/50 transition-all duration-300 group">
      <div className="grid grid-cols-3 gap-4 items-center">
        <div>
          <h3 className="font-orbitron font-bold text-white group-hover:text-gaming-accent transition-colors">
            {game}
          </h3>
        </div>
        
        <div className="text-center">
          <p className="text-white/80">{date}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gaming-gold font-semibold">{prize}</span>
          {showResults && (
            <Button 
              size="sm" 
              variant="outline"
              className="border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white ml-4"
            >
              Results
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
