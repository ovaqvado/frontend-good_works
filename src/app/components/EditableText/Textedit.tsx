import React, { useState } from "react";

function UserGreeting() {
  return <h1>Welcome back!</h1>;
}
function GuestGreeting() {
  return <h1>Welcome guest!</h1>;
}

const TextEdit: React.FC = () => {
  const [text, setText] = useState<string>(""); // Хранит текст
  const [isEditing, setIsEditing] = useState<boolean>(false); // Статус редактирования

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value); // Обновляем состояние текста
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const buttonText = text.length > 0 ? "Редактировать текст" : "Введите текст";

  return (
    <div>
      {isEditing ? (
        <div>
          <textarea
            className="p-3 w-11/12 placeholder:text-gray-900 outline-none bg-zinc-300 "
            value={text}
            onChange={handleChange}
            placeholder="Добавьте свои хорошие дела..."
            rows={10}
            cols={90}
          />
          <div className="flex flex-row gap-4">
            <button
              className="border-green-700 text-gray-200 border-2 rounded-md p-2 transition-all hover:bg-green-700 hover:text-white"
              onClick={handleSave}
            >
              Сохранить изменения
            </button>
            <button
              className="border-red-800/90 text-white border-2 rounded-md p-2 transition-all hover:bg-red-800/20 "
              onClick={handleCancel}
            >
              Отменить изменения
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center border-2 p-3 bg-slate-500 rounded-md border-slate-500 gap-7 whitespace-pre">
          <p className="text-white   text-wrap">
            {text || "Текст отсутствует"}
          </p>
          <button
            className="bg-gray-500 text-white border-sky-300 border-2 p-2 rounded-xl hover:bg-sky-300/40 hover:transition "
            onClick={handleEdit}
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};
2;
export default TextEdit;
