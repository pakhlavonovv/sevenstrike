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
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-yellow-400 mb-6 text-center">SevenStrike Правила турнира</h1>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-red-500">1. Общие правила</h2>
              <p className="text-gray-300 mt-2">Все игроки должны зарегистрироваться до начала турнира. Любые неавторизованные игроки будут дисквалифицированы.</p>
            </div>
            
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-red-500">2. Формат матча</h2>
              <p className="text-gray-300 mt-2">Если в турнире победят 5 из 10 команд, эти 10 команд команд сразятся друг с другом. Победитель не имеет значения, всё определяется случайным образом. 3 команды с наибольшим количеством побед выбывают, турнир завершается, а победители получают свои призы.</p>
            </div>
            
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-red-500">3. Читтерство </h2>
              <p className="text-gray-300 mt-2">Читтерство, мошенничество, обман, приведут к немедленной дисквалификации и это тоже влияет на команду!</p>
            </div>            
          </div>
        </div>
      </div>
      <div>
      <Footer/>
      </div>
        </div>
    );
  }
  