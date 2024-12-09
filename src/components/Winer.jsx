"use client";
import React, { useState, useEffect } from "react";

function Winner({ participantes, ganadores, showWinners }) {
  const [selectedWinners, setSelectedWinners] = useState([]);

  useEffect(() => {
    if (showWinners) {
      // Seleccionar ganadores aleatoriamente
      const shuffled = [...participantes].sort(() => 0.5 - Math.random());
      setSelectedWinners(shuffled.slice(0, ganadores));
    }
  }, [showWinners, participantes, ganadores]);

  return (
    <div className="flex flex-col items-center justify-center w-full mb-4">
      {showWinners && (
        <>
          <h2 className="text-2xl font-bold text-white mb-4">Ganadores</h2>
          <div className="grid grid-cols-1 gap-2 w-full max-w-[500px]">
            {selectedWinners.map((winner, index) => (
              <div
                key={index}
                className="p-2 bg-white rounded-lg shadow-lg border border-gray-200 text-gray-800 text-center"
              >
                {winner}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Winner;
