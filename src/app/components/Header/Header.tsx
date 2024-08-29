import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header flex flex-col items-center p-6 mt-3 gap-3  bg-slate-700 bg-opacity-75 rounded-2xl  w-4/5">
      <h1 className="title font-large text-4xl text-white ">
        Список добрых дел
      </h1>
      <div className="links flex flex-row gap-10">
        <Link
          href="/"
          className="text-sky-500 text-lg hover:text-sky-300 transition-all"
        >
          Главная
        </Link>
        <Link
          href="/about"
          className="text-sky-500 text-lg hover:text-sky-300 transition-all"
        >
          Список добрых дел
        </Link>
        <Link
          href="/profile"
          className="text-sky-500 text-lg hover:text-sky-300 transition-all"
        >
          Профиль
        </Link>
      </div>
    </div>
  );
}
