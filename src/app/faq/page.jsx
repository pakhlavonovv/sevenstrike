import Footer from "../components/footer";
import Header from "../components/header";

export default function FAQ() {
    const faqs = [
      {
        question: "How do I register for a tournament?",
        answer:
          "To join a SevenStrike CS2 tournament, browse available tournaments, pay the entry fee, and secure your spot in the competition.",
      },
      {
        question: "How is the prize fund awarded to the winning team?",
        answer:
          "For each SevenStrike tournament, your team leader will register for the team, i.e. pay for the team, and join the tournament. At the end of the tournament, if your team wins, we will transfer the prize money to the leader, while linking it to your team leader.",
      },
      {
        question: "What payment methods are available for deposits and withdrawals?",
        answer:
          "It doesn't matter, during the tournament payment process, the administrator will assign a card number to the team leader, and your leader will make the payment. If the money needs to be transferred from us, we will also request the VISA card number and card expiration date from your team leader and transfer the prize.",
      },
      {
        question: "Are there any rules or restrictions?",
        answer:
          "Yes, each tournament has its own rules regarding player conduct, cheating, and fair play. Violating these rules may result in disqualification.",
      },
      {
        question: "How do I contact support?",
        answer:
          "If you need assistance, you can reach out to our support team via live chat or email. We are available 24/7 to help you.",
      },
    ];
  
    return (
        <div>
            <div className="mb-[50px]">
            <Header/>
            </div>
      <div className="min-h-screen text-white flex justify-center items-center p-4">
        <div className="max-w-3xl w-full">
          <h1 className="text-[22px] sm:text-[27px] lg:text-[35px] font-bold text-center mb-6 text-black">Frequently Asked Questions</h1>
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
            <div className="mt-[50px]">
            <Footer/>
            </div>
        </div>
    );
  }
  