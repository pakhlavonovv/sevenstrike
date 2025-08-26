import Footer from "../components/footer";
import Header from "../components/header";

export default function FAQ() {
    const faqs = [
      {
        question: "Как зарегистрироваться на турнир?",
        answer:
          "Чтобы принять участие в турнире SevenStrike CS2, просмотрите доступные турниры, зарегистрируйтесь бесплатно и обеспечьте себе место в соревновании.",
      },
      {
        question: "Есть ли какие-либо правила или ограничения?",
        answer:
          "Да, каждый турнир имеет свои собственные правила, касающиеся поведения игроков, мошенничества и честной игры. Нарушение этих правил может привести к дисквалификации.",
      },
      {
        question: "Как связаться со службой поддержки?",
        answer:
          "Если вам нужна помощь, вы можете связаться с нашей службой поддержки через онлайн-чат или по электронной почте. Мы готовы помочь вам круглосуточно и без выходных.",
      },
    ];
  
    return (
        <div>
            <div>
            <Header/>
            </div>
      <div className="min-h-screen text-white flex justify-center items-center p-4">
        <div className="max-w-3xl w-full">
          <h1 className="text-[22px] sm:text-[27px] lg:text-[35px] font-bold text-center mb-6 text-black">Часто задаваемые вопросы</h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-yellow-500 p-4 rounded-lg bg-gray-800 shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-yellow-400">{faq.question}</h2>
                <p className="text-gray-300 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
            <div>
            <Footer/>
            </div>
        </div>
    );
  }
  