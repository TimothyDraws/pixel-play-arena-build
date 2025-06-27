
import Navigation from "@/components/Navigation";
import TournamentCard from "@/components/TournamentCard";
import SocialFooter from "@/components/SocialFooter";

const Tournaments = () => {
  const currentTournaments = [
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
  ];

  const upcomingTournaments = [
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
    { game: "Fortnite", date: "11/11/11", prize: "$500" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Current Season */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h1 className="text-6xl font-orbitron font-black text-white mb-4">
                COZY CUP
              </h1>
              <h2 className="text-2xl font-orbitron text-gaming-accent mb-6">
                BATTLE FOR THE TOP SPOT AND PRIZES.
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Cozy Cash Cup is our headline tournament series, with several 
                seasons running per year.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-gaming-accent font-orbitron font-semibold text-lg mb-6">
                <div>Game</div>
                <div className="text-center">Date</div>
                <div className="text-right">Prize</div>
              </div>

              {currentTournaments.map((tournament, index) => (
                <TournamentCard
                  key={index}
                  game={tournament.game}
                  date={tournament.date}
                  prize={tournament.prize}
                  status="active"
                />
              ))}
            </div>
          </section>

          {/* Upcoming Season */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-orbitron font-bold text-gaming-accent mb-6">
                SEASON 3 COMING SOON
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Sign up for more information on Season 3, or join our discord.
                Button to Discord, Button to Cozyversus Twitter
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-gaming-accent font-orbitron font-semibold text-lg mb-6">
                <div>Game</div>
                <div className="text-center">Date</div>
                <div className="text-right">Prize</div>
              </div>

              {upcomingTournaments.map((tournament, index) => (
                <TournamentCard
                  key={index}
                  game={tournament.game}
                  date={tournament.date}
                  prize={tournament.prize}
                  status="upcoming"
                  showResults={true}
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      <SocialFooter />
    </div>
  );
};

export default Tournaments;
