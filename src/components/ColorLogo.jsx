"use client";
import React, { useState } from "react";

function ColorLogo({ setMostrarSorteos }) {
  const [logo, setLogo] = useState(null);
  const [color, setColor] = useState("#6495ED"); // Color azul por defecto
  const [mostrarComenzar, setMostrarComenzar] = useState(false); // Controla la visibilidad del botón "Comenzar"

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogo(file); // Establece el logo solo si un archivo es seleccionado
    }
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleSubmit = () => {

    
    console.log("Logo:", logo); // Muestra el logo subido
    console.log("Color:", color); // Muestra el color seleccionado

    setMostrarSorteos(false); // Ocultar las secciones de logo y color
    setMostrarComenzar(true); // Mostrar el botón "Comenzar"
  };

  const colorOptions = [
    "#6495ED",
    "#8A2091",
    "#D63636",
    "#FF5758",
    "#CB6CE6",
    "#4F2352",
    "#5272FF",
    "#5E17EC",
    "#7A8F92",
    "#FF914D",
    "#008037",
  ];

  return (
    <div className="space-y-4 text-white">
      {/* Sección de Logo y Color */}
      {!mostrarComenzar && (
        <>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">Logo</h3>
              <label className="text-sm text-gray-300">
                Tamaño recomendado (180x50px)
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="file"
                id="logo"
                onChange={handleLogoChange}
                className="hidden text-black"
              />
              <button
                onClick={() => document.getElementById("logo").click()}
                className="border-2 border-white bg-transparent text-white px-4 py-2 cursor-pointer"
              >
                Subir
              </button>
              {logo && (
                <button
                  onClick={() => setLogo(null)}
                  className="text-white bg-red-500 px-4 py-2"
                >
                  Eliminar
                </button>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Color Principal</h3>
            <div className="flex flex-wrap gap-2">
              {colorOptions.map((colorOption) => (
                <div
                  key={colorOption}
                  style={{ backgroundColor: colorOption }}
                  className={`w-8 h-8 rounded-md cursor-pointer ${
                    color === colorOption
                      ? "border-2 border-black"
                      : "border border-white"
                  }`}
                  onClick={() => handleColorChange(colorOption)}
                ></div>
              ))}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-[#85BF31] text-white py-3 mt-4 rounded-md cursor-pointer"
          >
            Confirmar
          </button>
        </>
      )}

      {/* Botón Comenzar */}
      {mostrarComenzar && (
        <div className="mt-4">
          <button className="w-full bg-[#4CAF50] text-white py-3 rounded-md cursor-pointer">
            Comenzar
          </button>
        </div>
      )}
    </div>
  );
}

export default ColorLogo;
