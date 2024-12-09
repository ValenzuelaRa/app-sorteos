"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ClearButton = ({ handleClear }) => (
  <button
    type="button"
    className=" text-[#b01a79] hover:text-slate-300"
    onClick={handleClear}
  >
    <FontAwesomeIcon icon={faTrashCan} /> Limpiar
  </button>
);

export default ClearButton;