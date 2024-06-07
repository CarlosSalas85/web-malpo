// "use client";
import React from "react";
import BannerProyecto from "@/app/componets/banner-proyectos/banner-proyecto";
import BannerAccesos from "@/app/componets/banner-proyectos/banner-accesos";
import Button from "@/app/componets/button/button-sin-logo";
import { Ctrl_aplicar_filtros } from "@/app/controllers/Ctrl_aplicar_filtros";
import { Ctrl_proyectos } from "@/app/controllers/Ctrl_proyectos";
import { Ctrl_proyectos_invertir } from "@/app/controllers/Ctrl_proyectos_invertir";

const UrlBanner = (props) => {
  return (
    <>
      <a href="/invertir/proyectos" className="mx-1 hover:text-gray-400">
        Invertir
      </a>
      /
      <a href="/" className="mx-1 hover:text-gray-400">
        {/* {props.nombre} */}
      </a>
    </>
  );
};



export default async function Proyecto ({ params: { proyecto }, searchParams: { val } }){
  
  const filtroDecodificado = proyecto ? decodeURIComponent(proyecto) : "";
  const idProyecto=val;
  const urlButton = `/proyecto/${proyecto}?val=${idProyecto}`;
  const Invertir= await Ctrl_proyectos_invertir(idProyecto);
  const proyectoInvertir = Invertir?.datos;



// Funcion que se encarga de hacer el separador de miles
const formatNumberWithThousandSeparator = (number) => {
  return number.toLocaleString('es-ES');
};

const proyectoInversionistaData = await Ctrl_proyectos(idProyecto);
const nombre=proyectoInversionistaData?.datos?.proyecto?.nombreWebProyecto;
const modelosData = proyectoInversionistaData?.datos?.modelos;
const nombreTipo = modelosData[0]?.nombreTipo;
  // Array para almacenar los valores de mt2Contruidos
  const mt2Array = modelosData.map((modelo) => parseInt(modelo?.m2Contruidos));
 
  // Construir el string con los valores de mt2Contruidos
  const mt2String = mt2Array.join(", ") + " mts²";
  const dividendo =formatNumberWithThousandSeparator(parseInt(proyectoInvertir?.dividendo));
  const arriendo =formatNumberWithThousandSeparator(parseInt(proyectoInvertir?.arriendo));
  const imagenCabecera=proyectoInversionistaData?.datos?.proyecto?.imagenCabecera;
  const imagenMiniatura=proyectoInversionistaData?.datos?.proyecto.imagenMiniatura;
  const urlEficienciaEnergetica = proyectoInversionistaData?.datos?.recursos?.idTipo == "2" ? "https://web.malpo.cl/minisitios/departamento/"  : "https://web.malpo.cl/minisitios/casa/";
  const url = <UrlBanner nombre={nombre} /* idRegion={proyectoInversionistaData?.datos?.proyecto?.idRegion} nombreRegion={proyectoInversionistaData?.datos?.proyecto?.regionNombre} idComuna={proyectoInversionistaData?.datos?.proyecto?.idComuna} comunaNombre={proyectoInversionistaData?.datos?.proyecto?.comunaNombre} *//>;
  return (
    <>
      <BannerProyecto url={url} nombre={nombre} imagenCabecera={imagenCabecera} imagenMiniatura={imagenMiniatura}/>

      <div className="mx-auto mb-4 mt-4 w-11/12 md:w-10/12">
        <h1 className="mb-4 text-3xl sm:text-center">
        {proyectoInvertir?.tituloInversion}
        </h1>
        {/* <p className="text-18px sm:text-center">
         {proyectoInvertir.informacionInversion}
        </p> */}
      </div>

      <div className="pb-3 pt-3">
        <h1 className="ml-4 text-xl font-semibold sm:text-center">
  {proyectoInvertir.informacionInversion}        </h1>
        <div className="mt-4 flex justify-center sm:justify-between">
          <div className="mx-auto flex w-full items-center justify-center sm:w-1/3">
            {/* Tu lista de elementos aquí */}
            <ul className="list-disc p-4 text-lg">
              {/* <li className="py-2">A sólo 3 min de Universidades</li>
              <li className="py-2">Cercana a servicios básicos</li>
              <li className="py-2">Finas terminaciones</li>
              <li className="py-2">Piso de hormigón platachado</li>
              <li className="py-2">Puerta de acceso a vidriada tipo protex</li>
              <li className="py-2">Ventanas de aluminio</li> */}
                   {proyectoInvertir.listadoInversion}

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
                    src="/iconos/invertir/dividendo.png"
                  />
                  Dividendo promedio ${dividendo}
                </li>
                <li className="flex items-center">
                  <img
                    className="mr-3 h-8 w-8"
                    alt={`icono`}
                    src="/iconos/invertir/plusvalia.png"
                  />
                  Plusvalia anual +{proyectoInvertir.plusvalia}%
                </li>
                <li className="flex items-center">
                  <img
                    className="mr-3 h-8 w-8"
                    alt={`icono`}
                    src="/iconos/invertir/arriendo.png"
                  />
                  Arriendo promedio ${arriendo}
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

      <BannerAccesos url={urlEficienciaEnergetica} />

    </>
  );
};

