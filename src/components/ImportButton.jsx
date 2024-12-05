"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";

const ImportButton = () => (
  <button type="button" className="btn btn-link text-[#b01a79]">
    <FontAwesomeIcon icon={faFileImport} /> Importar desde archivo
  </button>
);

export default ImportButton;
