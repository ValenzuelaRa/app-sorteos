import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListOl } from "@fortawesome/free-solid-svg-icons";

const AppHero = () => {
  return (
    <div className="app-hero">
      <div className="app-hero__content">
        <div className="container pb-4 pt-4">
          <div className="text-center pb-3">
            <div className="app-icon mb-4 flex items-center justify-center">
              <FontAwesomeIcon icon={faListOl} style={{ color: "#B77508" }} size="2xl" />
            </div>
            <h1 className="text-4xl font-black mb-2">Sorteo por Nombres al Azar</h1>
            <p className="text-lg text-gray-700 mb-4">
              Escoge un ganador al azar de una <strong>lista de nombres</strong> con nuestra App
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHero;