"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "@/app/hooks/useAuth";

export default function Header() {
  const isAuth = useAuth();
  return (
    <div className="header flex flex-col items-center p-6 mt-3 gap-3  bg-slate-700 bg-opacity-75 rounded-2xl  w-4/5">
      <h1 className="title font-large text-4xl text-white ">
        Список добрых дел
      </h1>
      {isAuth && (
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
      )}
      {isAuth ? (
        <button>
          <span className="text-white">Log Out</span>
        </button>
      ) : (
        <Link className="text-sky-500" href="/authform">
          Log In / Sign In
        </Link>
      )}
    </div>
  );
}
