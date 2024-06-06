import React from "react";
import BannerImage from "@/app/componets/banner/banner-imagen";
import FormAgendamiento from "@/app/componets/FormularioAgendamientoInversionista/FormularioAgendamientoInversionista"; // Importa el componente del formulario del lado del cliente
import BannerBlog from "@/app/componets/banner-blog/banner-blog";

const Page = () => {
  return (
    <>
      <BannerImage
        imagenMobile="https://c.animaapp.com/ldNQXCM1/img/hero-image.png"
        imagenDesktop="https://c.animaapp.com/ldNQXCM1/img/hero-image.png"
      />

      <div className="mx-auto mb-4 mt-10 w-11/12 md:w-10/12">
        <h1 className="mb-2 text-3xl sm:text-center">
          Atención virtual para Inversionistas
        </h1>
        <p className="text-18px pt-4 sm:text-center">
          ¿Estás pensando en comprar una casa o un departamento como inversión?
          ¿Quieres conocer las mejores opciones del mercado, los beneficios
          tributarios y las proyecciones de rentabilidad? Entonces, no te
          pierdas la oportunidad de agendar una videollamada con una ejecutiva
          de asesoramiento de Malpo.
        </p>

        <p className="text-18px pt-4 sm:text-center">
          Nuestra ejecutiva te orientará y resolverá todas tus dudas, sin que
          tengas que salir de tu casa u oficina. Solo tienes que ingresar tus
          datos, elegir el día y la hora que más te acomode, y listo.
        </p>

        <p className="text-18px pt-4 font-semibold sm:text-center">
          *confirmaremos la hora mediante llamada telefónica.
        </p>
      </div>

      <FormAgendamiento/> {/* Renderiza el componente del formulario del lado del cliente */}
    
      <BannerBlog />
      
    </>
  );
};

export default Page;
