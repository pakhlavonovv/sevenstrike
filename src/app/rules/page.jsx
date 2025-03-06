import Footer from "../components/footer";
import Header from "../components/header";

export default function Rules() {
    return (
        <div>
            <div className="mb-[20px]">
            <Header/>
            </div>
      <div className="min-h-screen text-white p-3 md:p-12">
        <div className="max-w-[99%] md:max-w-4xl mx-auto bg-gray-800 p-6 md:p-10 rounded-lg shadow-lg">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-yellow-400 mb-6 text-center">SevenStrike Tournament Rules</h1>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-red-500">1. General Rules</h2>
              <p className="text-gray-300 mt-2">All players must register before the tournament begins. Any unauthorized players will be disqualified.</p>
            </div>
            
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-red-500">2. Match Format</h2>
              <p className="text-gray-300 mt-2">Matches will be played in a Best of 3 format. The grand final will be Best of 5.</p>
            </div>
            
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-red-500">3. Map Pool</h2>
              <p className="text-gray-300 mt-2">Available maps: Mirage, Inferno, Nuke, Overpass, Ancient, Vertigo, Anubis.</p>
            </div>
            
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-red-500">4. Cheating & Fair Play</h2>
              <p className="text-gray-300 mt-2">Any form of cheating, hacking, or exploiting will result in immediate disqualification and ban from future events.</p>
            </div>
            
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-red-500">5. Server Settings</h2>
              <p className="text-gray-300 mt-2">All matches will be played on 128-tick servers with VAC enabled.</p>
            </div>
            
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-red-500">6. Prize Pool & Payouts</h2>
              <p className="text-gray-300 mt-2">Winners will receive their prize money within 72 hours after the tournament ends.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px]">
      <Footer/>
      </div>
        </div>
    );
  }
  