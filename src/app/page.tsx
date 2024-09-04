import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center rounded-xl p-5 w-3/4 mt-8 bg-gray-600 gap-4 h-96 ">
      <h2 className="text-white text-xl mb-9 text-center">
        Здесь вы сможете найти себе друга и прочитать его список добрых дел
      </h2>
      <p className="flex items-center text-yellow-50 text-lg gap-3">
        Введите сюда уикальный индентификатор:
        <input
          className="p-1 rounded-lg outline-none text-black"
          type="text"
          placeholder="@ovavado123"
        />
      </p>
    </div>
  );
}
