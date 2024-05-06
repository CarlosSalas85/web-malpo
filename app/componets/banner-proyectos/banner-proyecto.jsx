import React from "react";

const banner = (props) => {
  console.log(props);
  return (
    <div
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://www.innovamalpo.cl/disco2/web_malpo/imagenes_proyectos/8bd09bee54b5836338d310d98f224466.png")',
      }}
    >
      
      <div className="absolute inset-0 flex flex-col items-center justify-end">
        <div className="mb-5 text-center text-white">
          <h1 className="text-3xl font-bold">Tu Título Aquí</h1>
          <p className="text-xl">
            <a href="#" className="mx-1 hover:text-gray-400">
              Proyectos
            </a>
            /
            <a href="#" className="mx-1 hover:text-gray-400">
              {props.idProyecto}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default banner;
