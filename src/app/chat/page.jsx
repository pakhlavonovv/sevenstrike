"use client";
import { useEffect, useState, useRef } from "react";
import { db } from "../../../firebase-user";
import {
  collection,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import Tournaments from "../../../public/images/CS.jpg";

const randomColor = () =>
  `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;

const Page = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [notify, setNotify] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    try {
      const q = query(collection(db, "chatMessages"), orderBy("createdAt", "asc"));
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const msgs = snapshot.docs.map((doc) => ({
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate?.() || new Date(),
          }));
          setMessages(msgs);
          setLoading(false);
        },
        (err) => {
          console.error("Chat load error:", err);
          setError("Не удалось загрузить чат.");
          setLoading(false);
        }
      );
      return () => unsubscribe();
    } catch (err) {
      setError("Ошибка при подключении к чату.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSend = async () => {
    const username = localStorage.getItem("username");

    if (!username) {
      setNotify({
        type: "error",
        text: (
          <div className="flex flex-col items-center gap-2">
            <span>Вы не зарегистрированы!</span>
            <Link
              href="/register"
              className="underline text-blue-400 hover:text-blue-600"
            >
              Перейти к регистрации
            </Link>
          </div>
        ),
      });
      return;
    }

    if (text.trim() === "") return;

    try {
      await addDoc(collection(db, "chatMessages"), {
        username,
        text,
        color: randomColor(), 
        createdAt: serverTimestamp(),
      });
      setText("");
    } catch (err) {
      console.error("Chat error:", err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="mb-[10px]">
        <Header />
      </div>

      {notify && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#2D2D2D] text-white px-6 py-4 rounded-lg shadow-lg text-center">
            {notify.text}
          </div>
        </div>
      )}

      <div className="container">
        <div className="grid grid-cols-1 gap-2 items-center xl:grid-cols-[70%_30%]">
          {/* Chat */}
          <div className="w-full h-[450px] bg-[#0000006d] flex flex-col gap-3 mt-[10px] p-2">
            <div className="p-2 sm:px-4 md:px-6 md:pt-4 w-full text-white h-full bg-[#0000009d] overflow-y-auto">
              {loading ? (
                <p className="text-center text-gray-300">Загрузка...</p>
              ) : error ? (
                <div className="flex flex-col items-center gap-2">
                  <p className="text-red-400">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="underline text-blue-400 hover:text-blue-600"
                  >
                    Обновить
                  </button>
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className="mb-2 break-words text-[12px] sm:text-[14px] md:text-[16px] text-white"
                  >
                    <strong style={{ color: msg.color }}>
                      {msg.username}
                    </strong>
                    : {msg.text}
                    <span className="text-[10px] sm:text-[12px] md:text-[14px] text-gray-400 ml-2">
                      {formatTime(msg.createdAt)}
                    </span>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="w-full text-white flex items-center bg-[#0000009d] justify-between p-2 px-2 md:px-4 lg:px-6">
              <input
                className="w-full rounded-sm outline-none text-gray-200 bg-transparent"
                type="text"
                placeholder="Write a message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="text-gray-200 ml-2 hover:text-blue-400"
              >
                Send
              </button>
            </div>
          </div>

          <div className="flex flex-col max-h-[450px] bg-[#0000006d] aspect-[9/10] overflow-hidden rounded-2xl">
            <Image
              src={Tournaments}
              className="w-full rounded-lg"
              alt="Counter stike 2 image"
            />
            <div className="flex flex-col justify-between p-2 pb-5 h-64">
              <p className="text-gray-300 text-[12px] sm:text-[14px]">
                Прими участие в нашем CS2 турнире! Это отличная возможность
                показать свои навыки и провести время с единомышленниками.
                Турнир абсолютно бесплатный, и каждый желающий может попробовать
                свои силы. В одном турнире участвует до 10 команд, что делает
                соревнование ещё более увлекательным и напряжённым. Собери свою
                команду, вступай в игру и докажи, что именно вы достойны
                победы!
              </p>
              <Link
                className="text-gray-100 w-full text-[14px] sm:text-[16px] bg-[#4ac0ff] h-[30px] sm:h-[40px] rounded-md flex items-center justify-center transition-all hover:bg-[#4ac0ffc6]"
                href="https://t.me/sevenstrikee"
              >
                Зарегистрироваться
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[50px]">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
