import React from "react";

const banner = (props) => {
  return (
    <div className="relative h-[450px]">
      <picture>
        {/* Imagen de fondo para dispositivos pequeños */}
        <source srcSet={props.imagenMobile} media="(max-width: 640px)" />
        {/* Imagen de fondo para dispositivos grandes */}
        <source srcSet={props.imagenDesktop} media="(min-width: 641px)" />
        {/* Imagen de fondo por defecto */}
        <img
          className="absolute inset-0 block h-[450px] w-[100%] bg-cover bg-center"
          src={props.imagenDesktop} // Ruta de la imagen de fondo por defecto para navegadores que no admiten <picture>
          alt=""
        />
      </picture>
    </div>
  );
};

export default banner;
