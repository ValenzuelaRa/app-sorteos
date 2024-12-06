"use client";

import { useState, useEffect } from "react"; 
import ColorLogo from "@/components/ColorLogo";
import CountDown from "@/components/CountDown";
import Logo from "@/components/Logo";
import SuplControl from "@/components/SuplControl";
import SwitchControl from "@/components/SwitchControl";
import WinControl from "@/components/WinControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import Participants from "@/components/Participans";

export default function AppPage() {
  const [ganadores, setGanadores] = useState(0);
  const [suplentes, setSuplentes] = useState(0);
  const [cuentaRegresiva, setCuentaRegresiva] = useState(10);
  const [filtrarDuplicados, setFiltrarDuplicados] = useState(false);
  const [switches, setSwitches] = useState([false, false, false]);
  const [titulo, setTitulo] = useState(""); 
  const [participantes, setParticipantes] = useState([]);
  const [mostrarSorteos, setMostrarSorteos] = useState(true); // Controlar visibilidad

  useEffect(() => {
    const savedText = localStorage.getItem("text");
    if (savedText) {
      const participantesList = savedText
        .split("\n")
        .filter((line) => line.trim() !== "");
      setParticipantes(participantesList);
    }
  }, []);

  useEffect(() => {
    const savedTitulo = localStorage.getItem('titulo');
    if (savedTitulo) {
      setTitulo(savedTitulo);
    }
  }, []);

  const aumentarGanadores = () => setGanadores(ganadores + 1);
  const disminuirGanadores = () => setGanadores(ganadores > 0 ? ganadores - 1 : 0);
  const aumentarSuplentes = () => setSuplentes(suplentes + 1);
  const disminuirSuplentes = () => setSuplentes(suplentes > 0 ? suplentes - 1 : 0);
  const aumentarCuentaRegresiva = () => setCuentaRegresiva(cuentaRegresiva + 1);
  const disminuirCuentaRegresiva = () => setCuentaRegresiva(cuentaRegresiva > 0 ? cuentaRegresiva - 1 : 0);
  const toggleFiltrarDuplicados = () => setFiltrarDuplicados(!filtrarDuplicados);

  const toggleSwitch = (index) => {
    setSwitches((prev) => {
      const newSwitches = [...prev];
      newSwitches[index] = !newSwitches[index];
      return newSwitches;
    });
  };

  const switchLabels = [
    "Eliminar Publicidad",
    "Bonus & Chances Extra",
    "Excluir Participantes",
  ];

  

  return (
    <main role="main" className="w-full">
      <div id="container" className="relative mx-auto max-w-[800px] px-4">
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          <Logo />
          
          <div className="w-full max-w-[500px] py-10 bg-gradient-to-r from-purple-700 to-pink-500 rounded-lg shadow-2xl">
            <h1 className="text-2xl font-bold text-center text-white mb-4 pb-2">
              Opciones
            </h1>
            {mostrarSorteos && (  // Mostrar solo si mostrarSorteos es true
              <div id="sorteos" className="border-t border-neutral-50 px-4 py-3 w-full">
                <div className="mb-3">
                  <label className="font-light text-lg text-gray-200">Título</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                  />
                </div>

                <WinControl
                  ganadores={ganadores}
                  aumentarGanadores={aumentarGanadores}
                  disminuirGanadores={disminuirGanadores}
                />
                <SuplControl
                  suplentes={suplentes}
                  aumentarSuplentes={aumentarSuplentes}
                  disminuirSuplentes={disminuirSuplentes}
                />

                <div className="flex items-center justify-between mb-3">
                  <label className="text-xl font-semibold text-white">Premios</label>
                  <button className="bg-purple-600 text-white rounded-md px-4 py-2">
                    Definir
                  </button>
                </div>
                <SwitchControl
                  label="Filtrar Duplicados"
                  checked={filtrarDuplicados}
                  onChange={toggleFiltrarDuplicados}
                />

                <div className="flex items-center text-yellow-400 text-sm font-bold py-4">
                  <FontAwesomeIcon icon={faStar} className="mr-2" />
                  AppSorteosPRO
                </div>

                <div className="border-t border-l-neutral-300 py-4">
                  {switchLabels.map((label, index) => (
                    <SwitchControl
                      key={index}
                      label={label}
                      checked={switches[index]}
                      onChange={() => toggleSwitch(index)}
                      id={`switch-${index}`}
                    />
                  ))}
                  <CountDown
                    cuentaRegresiva={cuentaRegresiva}
                    aumentarCuentaRegresiva={aumentarCuentaRegresiva}
                    disminuirCuentaRegresiva={disminuirCuentaRegresiva}
                  />
                </div>

                <div className="flex items-center text-yellow-400 text-sm font-bold py-4">
                  <FontAwesomeIcon icon={faPalette} className="mr-2" />
                  Identidad de Marca
                </div>

                <div className="border-t border-l-neutral-300 py-4">
                  <ColorLogo setMostrarSorteos={setMostrarSorteos} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Siempre mostrar Participants */}
      <div id="container" className="relative mx-auto max-w-[800px] px-2 mt-5">
        <Participants participantes={participantes} />
      </div>
    </main>
  );
}
