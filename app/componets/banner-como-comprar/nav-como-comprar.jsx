"use client";
import React from "react";
import { useState } from "react";

const CustomSelect = ({ options, onChange, activo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.find((opt) => opt.value === activo),
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
    onChange(value); // Llama a la función onChange con el valor seleccionado
  };

  return (
    <div className="relative mb-6 mt-3 w-full rounded border border-black">
      <div
        className="flex cursor-pointer items-center justify-between rounded border"
        onClick={toggleDropdown}
      >
        <div className="flex w-full flex-row">
          <div className="flex w-10/12 items-center justify-start bg-blue-50">
            <span className="ml-4 py-4 text-xl">{selectedOption.label}</span>
          </div>
          <div className="flex w-2/12 items-center justify-center bg-rojoMalpo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`h-8 w-8 transform text-white transition-transform ${
                isOpen ? "-rotate-180" : ""
              }`}
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full rounded border border-gray-300 bg-white shadow-md">
          {options.map((option) => (
            <div
              key={option.value}
              className={`flex cursor-pointer items-center px-4 py-2 ${
                option.value === activo
                  ? "bg-gray-200 text-rojoMalpo"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleOptionSelect(option.value)}
            >
              <span className="text-xl">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const options = [
  { value: 1, label: "Cómo comprar" },
  { value: 2, label: "Con Subsidio" },
  { value: 3, label: "Crédito Hipotecario" },
];

const Banner = (props) => {
  const activo = parseInt(props.activo);

  const handleChange = (value) => {
    let url;
    switch (value) {
      case 1:
        url = "/como-comprar";
        break;
      case 2:
        url = "/como-comprar/con-subsidio?val=2";
        break;
      case 3:
        url = "/como-comprar/con-hipotecario?val=3";
        break;
    }
    window.location.href = url;
  };

  return (
    <>
      <div className="hidden h-56 w-1/3 justify-end px-4 pb-4 sm:flex">
        <div className="border px-6 py-6 shadow-xl">
          <div className="px-1 py-4">
            <a
              href="/como-comprar"
              className={`text-xl ${activo === 1 ? "text-rojoMalpo" : "text-grisMalpo"} hover:text-gray-400`}
            >
              Cómo comprar
            </a>
          </div>
          <div className="px-4 py-2">
            <a
              href="/como-comprar/con-subsidio?val=2"
              className={`text-xl ${activo === 2 ? "text-rojoMalpo" : "text-grisMalpo"} hover:text-gray-400`}
            >
              Con Subsidio
            </a>
          </div>
          <div className="px-4 py-2">
            <a
              href="/como-comprar/con-hipotecario?val=3"
              className={`text-xl ${activo === 3 ? "text-rojoMalpo" : "text-grisMalpo"} hover:text-gray-400`}
            >
              Crédito Hipotecario
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full px-4 pb-4 sm:hidden">
        <CustomSelect
          options={options}
          onChange={handleChange}
          activo={activo}
        />
      </div>
    </>
  );
};

export default Banner;
