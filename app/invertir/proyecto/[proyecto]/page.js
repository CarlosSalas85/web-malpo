"use client";
import React from "react";
import BannerProyecto from "@/app/componets/banner-proyectos/banner-proyecto";
import BannerAccesos from "@/app/componets/banner-proyectos/banner-accesos";
import Button from "@/app/componets/button/button-sin-logo";

const UrlBanner = (props) => {
  return (
    <>
      <a href="#" className="mx-1 hover:text-gray-400">
        Invertir
      </a>
      /
      <a href="#" className="mx-1 hover:text-gray-400">
        {props.nombre}
      </a>
    </>
  );
};

const Proyecto = ({ params: { proyecto } }) => {
  const filtroDecodificado = proyecto ? decodeURIComponent(proyecto) : "";
  const url = <UrlBanner nombre={filtroDecodificado} />;
  const nombre = filtroDecodificado;

  const urlButton = `/proyectos/ciudad/${proyecto}?val=1`;

  return (
    <>
      <BannerProyecto url={url} nombre={nombre} />

      <div className="mx-auto mb-4 mt-4 w-11/12 md:w-10/12">
        <h1 className="mb-4 text-3xl sm:text-center">
          Información para inversionistas
        </h1>
        <p className="text-18px sm:text-center">
          El mejor sector de Talca , un barrio seguro, tranquilo, con servicios,
          supermercado, colegios, jardines infantiles y áreas comerciales a la
          mano. Y, por supuesto, con la mejor proyección y plusvalía.
        </p>
      </div>

      <div className="pb-6 pt-6">
        <h1 className="ml-4 text-xl font-semibold sm:text-center">
          Departamentos de 56, 62 mts² construidos, 3 dormitorios y 2 baños
        </h1>
        <div className="mt-4 flex justify-center sm:justify-between">
          <div className="mx-auto flex w-full items-center justify-center sm:w-1/3">
            {/* Tu lista de elementos aquí */}
            <ul className="list-disc p-4 text-lg">
              <li className="py-2">A sólo 3 min de Universidades</li>
              <li className="py-2">Cercana a servicios básicos</li>
              <li className="py-2">Finas terminaciones</li>
              <li className="py-2">Piso de hormigón platachado</li>
              <li className="py-2">Puerta de acceso a vidriada tipo protex</li>
              <li className="py-2">Ventanas de aluminio</li>
              {/* Agrega más elementos según sea necesario */}
            </ul>
          </div>
        </div>
        <div>
          <div className="mt-4 flex justify-center sm:justify-between">
            <div className="mx-auto flex w-full items-center justify-start sm:w-1/3">
              {/* Tu lista de elementos aquí */}
              <ul className="list-disc p-4 text-lg">
                <li className="flex items-center">
                  <img
                    className="mr-3 h-8 w-8"
                    alt={`icono`}
                    src={`https://c.animaapp.com/AuWMAeuM/img/house.svg`}
                  />
                  Dividendo promedio $300.000
                </li>
                <li className="flex items-center">
                  <img
                    className="mr-3 h-8 w-8"
                    alt={`icono`}
                    src={`https://c.animaapp.com/AuWMAeuM/img/house.svg`}
                  />
                  Plusvalia anual +7%
                </li>
                <li className="flex items-center">
                  <img
                    className="mr-3 h-8 w-8"
                    alt={`icono`}
                    src={`https://c.animaapp.com/AuWMAeuM/img/house.svg`}
                  />
                  Arriendo promedio $300.0000
                </li>
                {/* Agrega más elementos según sea necesario */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-6 pt-3">
        <div className="mx-auto flex flex-col items-center justify-center">
          <Button
            titulo="Ver Información general del proyecto"
            url={urlButton}
          />
        </div>
      </div>

      <BannerAccesos />
    </>
  );
};

export default Proyecto;
