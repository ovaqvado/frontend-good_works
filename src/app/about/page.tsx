"use client";
import TextEdit from "../components/EditableText/Textedit";

export default function About() {
  return (
    <div className="flex flex-col items-center rounded-xl p-5 w-3/4 mt-8 bg-gray-600 gap-4 h-max ">
      <h1 className="font-medium text-xl  text-sky-300 ">Ваш список</h1>
      <TextEdit />
    </div>
  );
}
