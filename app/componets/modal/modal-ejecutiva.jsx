"use client";
import React from "react";
import BannerEjecutivas from "@/app/componets/banner-proyectos/banner-ejecutivas";
import { useState } from "react";

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex overflow-auto bg-gray-800 bg-opacity-75">
      <div className="relative m-auto w-full max-w-4xl rounded bg-white p-8 shadow-lg">
        <button
          className="absolute right-0 top-0 m-4 text-rojoMalpo hover:text-gray-400"
          onClick={onClose}
        >
          <img
            className="mr-3 h-8 w-8"
            alt={`icono`}
            src={`https://c.animaapp.com/o0ROixJd/img/cancel@2x.png`}
          />
        </button>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

const Page = (props) => {
  const proyectoData=props.proyecto;
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const [formData, setFormData] = useState({
    name: "",
    rut: "",
    email: "",
    phone: "",
    city: "",
    referral: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
  };

  return (
    <>
     <BannerEjecutivas usuarios={proyectoData?.datos.usuarios} />

      {modalOpen && (
        <Modal onClose={handleModalToggle}>
           <div className={`fixed inset-0 z-50 flex justify-center items-center ${modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative bg-gray-100 rounded-lg p-8 shadow-lg">
        <button
          className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-400"
          onClick={handleModalToggle}
        >
          <img
            className="w-8 h-8"
            alt="Cancel"
            src="https://c.animaapp.com/o0ROixJd/img/cancel@2x.png"
          />
        </button>
        <div className="flex items-center gap-4">
          <img
            className="w-32 h-32 object-cover"
            alt="Image"
            src={image}
          />
          <div className="flex-1">
            {["first", "last", "middle"].includes(property1) && <span className="text-xl font-bold">{nombre}</span>}
            {["first", "last", "middle"].includes(property1) && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Link href={`mailto:${email}`} target="_blank" className="flex items-center gap-1 text-black underline">
                    <img className="w-6 h-6" alt="Mail" src="https://c.animaapp.com/DeOuMZYz/img/mail-2@2x.png" title={email}/>
                    <span>Email</span>
                  </Link>
                  <Link href={`tel:+56${telefono}`} target="_blank" className="flex items-center gap-1 text-black underline">
                    <img className="w-6 h-6" alt="Call" src="https://c.animaapp.com/DeOuMZYz/img/call-2@2x.png" title={telefono}/>
                    <span>Llamar</span>
                  </Link>
                  <Link href={`https://api.whatsapp.com/send?phone=56${telefono}`} target="_blank" className="flex items-center gap-1 text-black underline">
                    {icon}
                    <span>Whatsapp</span>
                  </Link>
                </div>
                <div className="mt-4">
                <button
                  type="submit"
                  className="focus:shadow-outline rounded bg-rojoMalpo px-4 py-2 text-white hover:bg-gray-400 focus:outline-none"
                >
                  Cerrar
                </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
        </Modal>
      )}
    </>
  );
};

export default Page;
