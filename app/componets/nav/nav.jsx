"use client";
import { useState } from "react";
import "./styleNav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-transparente">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 sm:justify-center">
        <div className="hidden md:flex md:items-center">
          <img
            src="https://c.animaapp.com/g9H7zkhE/img/logo-malpo---blanco.svg"
            className="logo-malpo-blanco"
            alt="Logo malpo blanco"
          />
        </div>

        <div className="flex w-full items-center justify-between md:w-auto">
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-white p-2 text-gray-500 hover:border-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:border-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <svg
              className="mr-2 h-5 w-5 text-white" // Añadimos la clase text-white para establecer el color del icono y margen a la derecha
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <span className="text-white">Menú</span>{" "}
            {/* Agregamos el texto "Menú" */}
          </button>

          <img
            src="https://c.animaapp.com/g9H7zkhE/img/logo-malpo---blanco.svg"
            className="logo-malpo-blanco md:hidden" // Ocultamos el logo en dispositivos mayores a mobile
            alt="Logo malpo blanco"
          />
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full text-white md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col p-4 font-medium md:mt-0 md:flex-row md:space-x-4 md:p-0 rtl:space-x-reverse">
            <li>
              <a
                href="/"
                className="block px-3 py-2 hover:text-gray-400"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/proyectos"
                className="block px-3 py-2 hover:text-gray-400"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a href="/invertir/todos" className="block px-3 py-2 hover:text-gray-400">
                Invertir
              </a>
            </li>
            <li>
              <a href="/como-comprar" className="block px-3 py-2 hover:text-gray-400">
                Cómo comprar
              </a>
            </li>
            <li>
              <a href="/clientes" className="block px-3 py-2 hover:text-gray-400">
                Clientes
              </a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 hover:text-gray-400">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="block px-3 py-2 hover:text-gray-400">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
