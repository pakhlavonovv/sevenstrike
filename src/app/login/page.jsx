"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import { auth } from "../../../firebase-user";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Page = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (localStorage.getItem("username")) {
      setMessage({
        type: "error",
        text: `Вы уже вошли как "${localStorage.getItem("username")}"`,
      });
      setTimeout(() => router.push("/"), 2000);
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const fakeEmail = `${username}@gmail.com`;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        fakeEmail,
        password
      );

      localStorage.setItem("username", username);

      setMessage({ type: "success", text: `Вы вошли как "${username}"` });

      setTimeout(() => router.push("/"), 2000);
    } catch (error) {
      console.error("Login error:", error.message);

      let errorText = "Ошибка входа. Попробуйте снова.";
      switch (error.code) {
        case "auth/user-not-found":
          errorText = "Пользователь не найден.";
          break;
        case "auth/wrong-password":
          errorText = "Неверный пароль.";
          break;
        case "auth/invalid-email":
          errorText = "Неверный формат имени пользователя.";
          break;
        default:
          errorText = "Не удалось войти.";
      }

      setMessage({ type: "error", text: errorText });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (localStorage.getItem("username")) {
      setMessage({
        type: "error",
        text: `Вы уже вошли как "${localStorage.getItem("username")}"`,
      });
      setTimeout(() => router.push("/"), 2000);
      return;
    }

    const provider = new GoogleAuthProvider();
    setMessage(null);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      localStorage.setItem("username", user.displayName);

      setMessage({ type: "success", text: `Вы вошли как "${user.displayName}"` });
      setTimeout(() => router.push("/"), 2000);
    } catch (error) {
      console.error("Google login error:", error.message);
      setMessage({
        type: "error",
        text: "Не удалось войти через Google.",
      });
    }
  };

  return (
    <>
      <div className="mb-[20px]">
        <Header />
      </div>

      {message && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div
      className={`${
        message.type === "error" ? "bg-red-600" : "bg-[#2D2D2D]"
      } px-6 py-4 rounded-lg shadow-lg text-center text-white`}
    >
      <p>{message.text}</p>

      {message.type === "error" && (
        <button
          onClick={() => window.location.reload()}
          className="underline text-[#ACACAC] mt-2 inline-block"
        >
          Повторить заново
        </button>
      )}
    </div>
  </div>
)}



      <div className="container flex items-center justify-center">
        <div className="flex flex-col w-[100%] md:w-[80%] xl:w-[40%] gap-[20px]">
          <h1 className="font-bold text-[30px] text-start">Вход</h1>

          <form
            onSubmit={handleLogin}
            className="flex bg-[#0000009c] w-full h-full flex-col rounded-sm p-4 lg:p-[40px] py-10 pt-5 gap-2"
          >
            <p className="text-[#D07B15] text-[16px]">Ваш логин</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-[#9d9d9d] outline-none font-bold p-3 h-[40px] rounded-sm"
              required
            />

            <p className="text-[#D07B15] text-[16px]">Пароль</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#9d9d9d] outline-none font-bold p-3 h-[40px] rounded-sm"
              required
            />

            <span className="text-center text-white">или</span>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="bg-[#E38617] rounded-sm flex items-center justify-center text-white h-[40px] py-4"
            >
              Войти через Google
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#14A2FF] h-[40px] mt-[20px] rounded-sm text-white disabled:opacity-50"
            >
              {loading ? "Вход..." : "Войти"}
            </button>

            <Link
              href={"/register"}
              className="text-white text-center mt-[10px] underline"
            >
              У меня нет аккаунта
            </Link>
          </form>
        </div>
      </div>

      <div className="mt-[50px]">
        <Footer />
      </div>
    </>
  );
};

export default Page;
