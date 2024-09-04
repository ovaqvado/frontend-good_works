"use client";
import { setTokenToSessionStorage } from "@/helpers/localstorage.helper";
import { AuthService } from "@/service/auth.service";
import { useAppDispatch } from "@/store/hooks/hooks";
import { login } from "@/store/user/user.slice";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AuthForm() {
  const [username, setIsName] = useState<string>("");
  const [email, setIsEmail] = useState<string>("");
  const [password, setIsPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.registration({
        email,
        username,
        password,
      });
      if (data) {
        toast.success("Account created");
        setIsLogin(!isLogin);
      }
    } catch (error: any) {
      const err = error.response?.data.message;
      toast.error(err.toString("Error create user"));
    }
  };
  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.login({
        username,
        email,
        password,
      });
      if (data) {
        setTokenToSessionStorage("token", data.token);
        dispatch(login(data));
        toast.success("Your loigin account");
      }
    } catch (error: any) {
      const err = error.response?.data.message;
      toast.error(err.toString("Error create user"));
    }
  };
  return (
    <form onSubmit={isLogin ? loginHandler : registrationHandler}>
      <div className="flex flex-col items-center gap-5 p-20 mt-20 bg-slate-600 rounded-xl">
        <h1 className="text-sky-400 font-bold text-2xl mb-7">
          {isLogin ? "Вход" : "Регистрация"}
        </h1>
        {isLogin ? null : (
          <div className="flex flex-col">
            <label className="text-sky-300" htmlFor="name">
              Username
            </label>
            <input
              onChange={(e) => setIsName(e.target.value)}
              className="outline-none rounded-md p-1"
              placeholder="name"
              id="name"
              type="text"
            />
          </div>
        )}
        <div className="flex flex-col">
          <label className="text-sky-300" htmlFor="login">
            Почта
          </label>
          <input
            onChange={(e) => setIsEmail(e.target.value)}
            className="outline-none rounded-md p-1"
            placeholder="почта"
            id="login"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sky-300" htmlFor="password">
            Пароль
          </label>
          <input
            className="outline-none rounded-md p-1"
            id="password"
            type="password"
            placeholder="Пароль"
            onChange={(e) => setIsPassword(e.target.value)}
          />
        </div>

        <button className="p-4 mt-8 border-2 rounded-full text-white transition-all border-sky-400 hover:bg-sky-400/45">
          {isLogin ? "Войти" : "Регистрация"}
        </button>
        <button
          type="button"
          onClick={toggleMode}
          className="mt-4 text-sky-300"
        >
          {isLogin
            ? "Нет аккаунта? Зарегистрируйтесь"
            : "Уже есть аккаунт? Войдите"}
        </button>
      </div>
    </form>
  );
}
