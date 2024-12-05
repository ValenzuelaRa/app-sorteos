import React from "react";

const StartButton = () => {
  return (
    <div className="flex justify-center mt-4">
      <button
        type="button"
        className="bg-[#D31C92] text-white font-bold py-2 px-8 rounded-full hover:bg-[#9b105d] transition-colors duration-300"
      >
        Comenzar
      </button>
    </div>
  );
};

export default StartButton;
