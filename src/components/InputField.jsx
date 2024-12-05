"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Importa el hook useRouter
import ImportButton from "./ImportButton";
import ClearButton from "./ClearButton";

const InputField = ({ lineCount, setLineCount }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isTextEmpty, setIsTextEmpty] = useState(true);
  const [error, setError] = useState(""); // Para manejar los mensajes de error
  const router = useRouter(); // Inicializa el router

  const handleInput = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setIsTextEmpty(inputText.trim().length === 0); // Mostrar u ocultar el icono
    const lines = inputText.split("\n").filter((line) => line.trim() !== "").length;
    setLineCount(lines);
  };

  const handleStart = () => {
    // Validar que el título no esté vacío
    if (title.trim() === "") {
      setError("El título no puede estar vacío.");
      return;
    }

    // Validar que haya más de un renglón en el textarea
    const lines = text.split("\n").filter((line) => line.trim() !== "").length;
    if (lines <= 1) {
      setError("Ocupan ser más de 1 participante.");
      return;
    }

    // Limpiar el mensaje de error si pasa las validaciones
    setError("");

    // Redirigir a /app
    router.push("/app");
  };

  return (
    <div className="w-full p-3 max-w-full">
      <div id="form-group" className="mb-8">
        <label className="block text-gray-700 font-bold mb-2">Título</label>
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md p-2 w-full transition-all duration-150 ease-in-out focus:border-[#D31C92] focus:outline-none focus:border-4"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-8 relative">
        <label className="block text-gray-700 font-bold mb-2">Participantes</label>
        <div className="relative">
          <textarea
            value={text}
            rows="10"
            cols="30"
            className="textarea-counter border-2 border-gray-300 rounded-md pr-2 pb-3 w-full h-32 resize-none transition-all duration-150 ease-in-out focus:border-[#D31C92] focus:outline-none focus:border-4"
            spellCheck="false"
            data-gramm_editor="false"
            onInput={handleInput}
          ></textarea>
          <span
            className="absolute bottom-2 right-2 text-sm"
            style={{ color: "#b01a79" }}
          >
            {lineCount}
          </span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <ImportButton />
          {!isTextEmpty && <ClearButton handleClear={() => setText("")} />}
        </div>
      </div>
      {/* Botón Comenzar */}
      <div className="mt-4">
        <button
          onClick={handleStart}
          className="bg-[#D31C92] text-white px-4 py-2 rounded hover:bg-[#b01a79]"
        >
          Comenzar
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default InputField;
