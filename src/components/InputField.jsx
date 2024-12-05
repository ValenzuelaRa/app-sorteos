import React, { useState } from "react";
import ImportButton from "./ImportButton";
import ClearButton from "./ClearButton";

const InputField = ({ lineCount, setLineCount }) => {
  const [text, setText] = useState("");
  const [isTextEmpty, setIsTextEmpty] = useState(true);

  const handleInput = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setIsTextEmpty(inputText.trim().length === 0);  // Mostrar u ocultar el icono
    const lines = inputText.split("\n").filter((line) => line.trim() !== "").length;
    setLineCount(lines);
  };

  return (
    <div className="w-full p-3 max-w-full"> {/* Cambié la clase para asegurar el ancho completo */}
      <div id="form-group" className="mb-8">
        <label className="block text-gray-700 font-bold mb-2">Título</label>
        <input
          type="text"
          className="border-2 border-gray-300 rounded-md p-2 w-full transition-all duration-150 ease-in-out focus:border-[#D31C92] focus:outline-none"
          name="title"
        />
      </div>
      <div className="mb-8 relative">
        <label className="block text-gray-700 font-bold mb-2">Participantes</label>
        <div className="relative">
          <textarea
            value={text}
            rows="10"
            cols="30"
            className="textarea-counter border-2 border-gray-300 rounded-md pr-2 pb-3 w-full h-32 resize-none transition-all duration-150 ease-in-out focus:border-[#D31C92] focus:outline-none"
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
          {/* Icono para limpiar */}
          {!isTextEmpty && <ClearButton handleClear={() => setText("")} />}
        </div>
      </div>
    </div>
  );
};

export default InputField;
