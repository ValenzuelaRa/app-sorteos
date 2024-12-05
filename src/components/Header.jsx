"use client"; // Directiva necesaria para componentes cliente en Next.js

import React, { useState } from "react";
import Image from "next/image";
import logo from '/assets/logo.png';

const Header = () => {
  const [menuAplicacionesAbierto, setMenuAplicacionesAbierto] = useState(false);
  const [menuAyudaAbierto, setMenuAyudaAbierto] = useState(false);
  const [menuIdiomaAbierto, setMenuIdiomaAbierto] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-200">
      <div className="flex flex-nowrap w-full items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={200} height={40} />
        </div>

        {/* Navegación */}
        <nav className="flex gap-6">
          <div className="relative">
            <button
              className="font-medium"
              onClick={() => setMenuAplicacionesAbierto(!menuAplicacionesAbierto)}
            >
              Aplicaciones
            </button>
            {menuAplicacionesAbierto && (
              <div className="absolute bg-white border mt-2 p-2 rounded shadow-lg z-20 left-0 right-0 max-w-[300px]">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Opción 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Opción 2</a>
              </div>
            )}
          </div>
          <a href="#" className="font-medium">Precios</a>
          <div className="relative">
            <button
              className="font-medium"
              onClick={() => setMenuAyudaAbierto(!menuAyudaAbierto)}
            >
              Ayuda
            </button>
            {menuAyudaAbierto && (
              <div className="absolute bg-white border mt-2 p-2 rounded shadow-lg z-20 left-0 right-0 max-w-[300px]">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Centro de Ayuda</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Blog</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Solicitar Funcionalidades</a>
              </div>
            )}
          </div>
        </nav>

        {/* Botones y opciones */}
        <div className="flex items-center gap-4">
          <a href="#" className="font-medium">Ingresar</a>
          <button className="px-4 py-2 bg-[#D31C92] text-white rounded hover:bg-[#b01a79]">
            Crear cuenta
          </button>
          <div className="relative">
            <button
              className="font-medium"
              onClick={() => setMenuIdiomaAbierto(!menuIdiomaAbierto)}
            >
              Es
            </button>
            {menuIdiomaAbierto && (
              <div className="absolute bg-white border mt-2 p-2 rounded shadow-lg z-20 left-0 right-0 max-w-[300px]">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">English</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Español</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Portugues</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Francais</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
