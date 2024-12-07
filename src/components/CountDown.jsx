"use client";
import { useState } from "react";
import CountDown from "@/components/CountDown"; // Asegúrate de que la ruta esté correcta

export default function AppPage() {
  const [cuentaRegresiva, setCuentaRegresiva] = useState(10);

  // Funciones para aumentar o disminuir la cuenta regresiva
  const aumentarCuentaRegresiva = () => setCuentaRegresiva(cuentaRegresiva + 1);
  const disminuirCuentaRegresiva = () => setCuentaRegresiva(cuentaRegresiva > 0 ? cuentaRegresiva - 1 : 0);

  return (
    <div>
      <CountDown
        cuentaRegresiva={cuentaRegresiva}
        setCuentaRegresiva={setCuentaRegresiva}  // Pasar la función
        aumentarCuentaRegresiva={aumentarCuentaRegresiva}
        disminuirCuentaRegresiva={disminuirCuentaRegresiva}
      />
    </div>
  );
}
