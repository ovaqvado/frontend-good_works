import React from "react";

export default function authform() {
  return (
    <form>
      <div
        className="flex flex-col items-center gap-5 p-20 mt-20   bg-slate-600 rounded-xl 
      "
      >
        <h1 className="text-sky-400 font-bold text-2xl mb-7">Регистрация</h1>
        <div className="flex flex-col">
          <label className="text-sky-300" htmlFor="login">
            Login
          </label>
          <input
            className="outline-none rounded-md p-1"
            id="login"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sky-300" htmlFor="login">
            Login
          </label>
          <input
            className="outline-none rounded-md p-1"
            id="login"
            type="text"
          />
        </div>
        <button className="p-4 mt-8 border-2 rounded-full text-white transition-all border-sky-400 hover:bg-sky-400/45">
          Регистрация
        </button>
      </div>
    </form>
  );
}
