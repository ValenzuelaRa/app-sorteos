"use client";
import React from "react";

function Winner({ participantes }) {
  return (
    <div className="flex flex-col items-center justify-center  w-full mb-4">
      <div className="w-full max-w-[500px]  bg-gradient-to-r from-purple-700 to-pink-500 rounded-t-lg shadow-2xl">
        <h1 className="text-2xl font-bold text-center text-white">
          Participantes
        </h1>
        <div className="w-full max-w-[500px] ">
        <label className="block text-gray-100 text-lg font-bold text-center">
          TOTAL: {participantes.length}
        </label>
      </div>
      </div>
      <div className="grid grid-cols-1 h-auto w-full max-w-[500px]">
        {participantes.map((participante, index) => (
          <div
            key={index}
            className="p-2 bg-white rounded-lg shadow-lg border border-gray-200 text-gray-800 text-center"
          >
            {participante}
          </div>
        ))}
      </div>
   
    </div>
  );
}

export default Participants;
