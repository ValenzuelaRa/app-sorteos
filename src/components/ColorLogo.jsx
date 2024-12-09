"use client";
import React, { useState,useEffect } from 'react';

function ColorLogo({ setMostrarSorteos }) {
  const [logo, setLogo] = useState(null);
  const [color, setColor] = useState('#6495ED'); // Color azul por defecto

  const handleLogoChange = (event) => {
    setLogo(event.target.files[0]);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleSubmit = () => {
    console.log('Logo:', logo);
    console.log('Color:', color);
    setMostrarSorteos(false); // Ocultar las secciones de sorteos
  };
  
  const colorOptions = [
    '#6495ED', '#8A2091', '#D63636', '#FF5758', '#CB6CE6',
    '#4F2352', '#5272FF', '#5E17EC', '#7A8F92', '#FF914D',
    '#008037'
  ];
  useEffect(() => {
    // Modificar el historial para evitar que al dar reversa regrese a la página inicial
    const handlePopState = () => {
      window.history.pushState(null, document.title, window.location.href); // Redirige a la misma URL
    };

    window.history.pushState(null, document.title, window.location.href); // Cambia la URL sin recargar
    window.addEventListener('popstate', handlePopState); // Añade el listener para evitar retroceder

    return () => {
      window.removeEventListener('popstate', handlePopState); // Limpia el listener cuando el componente se desmonte
    };
  }, []);

  return (
    <div className="space-y-4 text-white">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Logo</h3>
          <label className="text-sm text-gray-300">Tamaño recomendado (180x50px)</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="file"
            id="logo"
            onChange={handleLogoChange}
            className="hidden"
          />
          <button
            onClick={() => document.getElementById('logo').click()}
            className="border-2 border-white bg-transparent text-white px-4 py-2 cursor-pointer"
          >
            Subir
          </button>
          {logo && <button onClick={() => setLogo(null)} className="text-white bg-red-500 px-4 py-2">Eliminar</button>}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Color Principal</h3>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((colorOption) => (
            <div
              key={colorOption}
              style={{ backgroundColor: colorOption }}
              className={`w-8 h-8 rounded-md cursor-pointer ${color === colorOption ? 'border-2 border-black' : 'border border-white'}`}
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
    </div>
  );
}

export default ColorLogo;