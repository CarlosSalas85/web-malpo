import React from "react";

const banner = (props) => {
  
  const proyecto = props.proyecto;
  return (
    <div className="relative h-[500px]">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-400"></div>
      <picture>
        {/* Imagen de fondo para dispositivos pequeños */}
        <source
          srcSet={props.imagenMobile}
          media="(max-width: 640px)"
        />
        {/* Imagen de fondo para dispositivos grandes */}
        <source
          srcSet={props.imagenCabecera}
          media="(min-width: 641px)"
        />
        {/* Imagen de fondo por defecto */}
        <img
          className="absolute inset-0 block h-[500px] w-[100%] bg-cover bg-center"
          srcSet={props.imagenCabecera} // Ruta de la imagen de fondo por defecto para navegadores que no admiten <picture>
          alt=""
          style={{ opacity: "0.7" }} // Ajusta la opacidad según sea necesario
        />
      </picture>
      <div className="absolute inset-0 ml-4 flex flex-col justify-end md:ml-0 md:items-center">
        <div className="mb-5 text-white md:text-center">
          <h1 className="text-3xl font-bold">{props.nombre}</h1>
          <p className="text-xl">{props.url}</p>
        </div>
      </div>
    </div>
  );
};

export default banner;
