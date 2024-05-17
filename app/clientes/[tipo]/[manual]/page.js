"use client";
import { useSearchParams } from "next/navigation";
import Button from "@/app/componets/button/button";

import BannerImage from "@/app/componets/banner/banner-imagen";
import NavManuales from "@/app/componets/banner-clientes/nav-manuales";

const UrlBanner = () => {
  return (
    <>
      <a href="/clientes" className="mr-4 hover:text-gray-400">
        Clientes
      </a>
      /
      <a
        href="/clientes/manuales-de-compra?val=3"
        className="ml-2 mr-4 hover:text-gray-400"
      >
        Manuales de compra
      </a>
      /
    </>
  );
};

const Image = () => {
  return (
    <div className="mx-auto w-5/6 pb-3 pt-3 md:w-2/3 md:ml-4">
      <picture className="relative flex h-[300px] justify-center sm:justify-start xl:h-[300px]">
        {/* Imagen de fondo para dispositivos pequeños */}
        <source
          srcSet="https://c.animaapp.com/Uhs8kv2h/img/descanso-visual-2@2x.png"
          media="(max-width: 640px)"
        />
        {/* Imagen de fondo para dispositivos grandes */}
        <source
          srcSet="https://c.animaapp.com/Uhs8kv2h/img/descanso-visual-2@2x.png"
          media="(min-width: 641px)"
        />
        {/* Imagen de fondo por defecto */}
        <img
          className="h-[300px] w-[100%] bg-cover bg-center xl:h-[300px]"
          src="https://c.animaapp.com/Uhs8kv2h/img/descanso-visual-2@2x.png" // Ruta de la imagen de fondo por defecto para navegadores que no admiten <picture>
          alt=""
        />
      </picture>
    </div>
  );
};

const Page = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("val");
  const pagina = parseInt(search);
  return (
    <>
      <BannerImage
        imagenMobile="https://c.animaapp.com/Q5nw9tiI/img/hero-image.png"
        imagenDesktop="https://c.animaapp.com/Q5nw9tiI/img/hero-image.png"
      />
      <div className="flex flex-col justify-center pb-6 md:flex-row">
        <NavManuales activo={search} />
        <div className="mr-auto flex w-full md:w-5/6">
          <div className={pagina === 1 ? "block" : "hidden"}>
            <div className="pb-6 pt-6">
              <h1 className="ml-4 pb-4 text-3xl">Manual de cuidado de casas</h1>
              <p className="text-l ml-4 pb-4">
                <UrlBanner />
              </p>
              <p className="text-18px ml-4">
                Para brindarte un mejor servicio y facilitar el cuidado de tu
                propiedad, te ofrecemos las versiones digitales de los manuales
                de cuidado de casas y departamentos. En estos documentos
                encontrarás información útil sobre las características,
                instalaciones y recomendaciones para el mantenimiento de tu
                vivienda. Te invitamos a consultarlos y seguir las indicaciones
                para conservar tu propiedad en óptimas condiciones.
              </p>
            </div>

            <div className="pb-3 pt-3">
              <div className="mx-auto ml-0 flex justify-center md:ml-4 md:justify-start">
                <Button
                  titulo="Descargar Brochure"
                  imagen="https://c.animaapp.com/unMEM02m/img/picture-as-pdf-1.svg"
                />
              </div>
            </div>

            <div className="pb-3 pt-3">
              <h1 className="ml-4 pb-4 text-2xl">
                ¿Qué son las mantenciones periódicas?
              </h1>
              <p className="text-l ml-4 pb-4">
                Son todas aquellas que se realizan en forma habitual cada cierto
                tiempo o por temporadas, para evitar el deterioro de la
                propiedad, prolongar la vida útil de los elementos de la
                vivienda y evitar desperfectos por falta de revisiones.
              </p>
            </div>
            <Image />
          </div>
          <div className={pagina === 2 ? "block" : "hidden"}></div>
        </div>
      </div>
    </>
  );
};

export default Page;
