"use client";
import React from "react";

export default function Profile() {
  return (
    <div className="flex flex-col items-center rounded-xl p-5 w-3/4 mt-8 bg-gray-600 gap-4 h-96  ">
      <h1 className="text-sky-300 font-bold text-2xl">
        Ваше имя и ваш уикальный индентификатор
      </h1>
      <p className="text-white font-medium text-lg">
        Имя:{" "}
        <span className="text-yellow-400">Здесь будет находится ваше имя</span>
      </p>
      <p className="text-white font-medium text-lg">
        Индентификатор:{" "}
        <span className="text-yellow-400">
          здесь будет находиться индитификатор
        </span>
      </p>
    </div>
  );
}
