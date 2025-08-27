"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import { auth, db } from "../../../firebase-user";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Page = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

 const handleRegister = async (e) => {
  e.preventDefault();

  if (localStorage.getItem("username")) {
    setMessage({
      type: "error",
      text: `Вы уже зарегистрированы как "${localStorage.getItem("username")}"`,
    });
      setTimeout(() => router.push("/"), 2000);
    return;
  }

  setLoading(true);
  setMessage(null);

  try {
    const fakeEmail = `${username}@gmail.com`;

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      fakeEmail,
      password
    );

    await setDoc(doc(db, "users", userCredential.user.uid), {
      username: username,
      createdAt: new Date(),
    });

    localStorage.setItem("username", username);

    setMessage({ type: "success", text: "Регистрация успешна!" });

    setTimeout(() => router.push("/"), 2000);
  } catch (error) {
    console.error("Register error:", error.message);

    let errorText = "Произошла ошибка при регистрации.";
        setTimeout(() => router.push("/"), 3000);
    switch (error.code) {
      case "auth/email-already-in-use":
        errorText = "Такое имя пользователя уже существует.";
        break;
      case "auth/weak-password":
        errorText = "Пароль слишком слабый (минимум 6 символов).";
        break;
      case "auth/invalid-email":
        errorText = "Неверный формат имени пользователя.";
        break;
      default:
        errorText = "Не удалось зарегистрироваться. Попробуйте снова.";
    }

    setMessage({ type: "error", text: errorText });
  } finally {
    setLoading(false);
  }
};

const handleGoogleRegister = async () => {
  if (localStorage.getItem("username")) {
    setMessage({
      type: "error",
      text: `Вы уже зарегистрированы как "${localStorage.getItem("username")}"`,
    });
    setTimeout(() => router.push("/"), 2000);
    return;
  }

  const provider = new GoogleAuthProvider();
  setMessage(null);

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    await setDoc(doc(db, "users", user.uid), {
      username: user.displayName,
      createdAt: new Date(),
    });

    localStorage.setItem("username", user.displayName);

    setMessage({ type: "success", text: "Google регистрация успешна!" });
    setTimeout(() => router.push("/"), 2000);
  } catch (error) {
    console.error("Google error:", error.message);
    setMessage({
      type: "error",
      text: "Не удалось зарегистрироваться через Google.",
    });
      setTimeout(() => router.push("/register"), 2000);
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
            } px-6 py-4 rounded-lg shadow-lg text-center text-[#ACACAC]`}
          >
            {message.text}
          </div>
        </div>
      )}

      <div className="container flex items-center justify-center">
        <div className="flex flex-col w-[100%] md:w-[80%] xl:w-[40%] gap-[20px]">
          <h1 className="font-bold text-[30px] text-start">Регистрация</h1>

          <form
            onSubmit={handleRegister}
            className="flex bg-[#0000009c] w-full h-full flex-col rounded-sm p-4 lg:p-[40px] py-10 pt-5 gap-2"
          >
            <p className="text-[#D07B15] text-[16px]">
              Регистрируйтесь, используя логин
            </p>
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
              onClick={handleGoogleRegister}
              className="bg-[#E38617] rounded-sm flex items-center justify-center text-white h-[40px] py-4"
            >
              Продолжить с Google
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#14A2FF] h-[40px] mt-[20px] rounded-sm text-white disabled:opacity-50"
            >
              {loading ? "Регистрация..." : "Регистрация"}
            </button>

            <Link
              href={"/login"}
              className="text-white text-center mt-[10px] underline"
            >
              У меня уже есть аккаунт
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
