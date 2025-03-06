"use client";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    theme: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
  const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID
  const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const message = `📩 *New message!*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone number:* ${formData.phone}
👉 *Theme:* ${formData.theme}
📝 *Message:* ${formData.message}`;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: "Markdown" }),
      });

      if (response.ok) {
        setModalOpen(true);
        setFormData({ name: "", email: "", phone: "", theme: "", message: "" });
      } else {
        alert("Error sending message! Try again.");
      }
    } catch (error) {
      alert("Problem with internet connection! Check your connection.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-[95%] min-[450px]:w-[80%] sm:w-[75%] md:w-[60%] lg:w-[45%] xl:w-[35%] mx-auto p-6 bg-[#3B415C] shadow-2xl rounded-lg">
      <h2 className="text-[22px] sm:text-2xl font-bold text-white text-center mb-4">Contact us</h2>
      <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full text-[14px] sm:text-[16px] xl:text-[18px] bg-gray-200 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full text-[14px] sm:text-[16px] xl:text-[18px] bg-gray-200 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full text-[14px] sm:text-[16px] xl:text-[18px] bg-gray-200 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="text"
          name="theme"
          placeholder="Theme"
          value={formData.theme}
          onChange={handleChange}
          required
          className="w-full text-[14px] sm:text-[16px] xl:text-[18px] bg-gray-200 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full text-[14px] sm:text-[16px] xl:text-[18px] bg-gray-200 h-[150px] md:h-[200px] resize-none p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        ></textarea>
        <button
          type="submit"
          className="w-full text-[14px] sm:text-[16px] xl:text-[18px] bg-black text-white py-3 rounded-lg hover:bg-[#0000002f] transition duration-300"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center  w-[80%] sm:w-[70%] md:w-[40%] lg:w-[30%] xl:w-[25%]">
            <h3 className="text-xl font-bold mb-2">Message sent!</h3>
            <p className="text-gray-600">We will contact you shortly.</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Thank you, I understand.
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;