"use client";
import { useSearchParams } from "next/navigation";

import BannerImage from "@/app/componets/banner/banner-imagen";
import NavClientes from "@/app/componets/banner-clientes/nav-clientes";
import ButtonClientes from "@/app/componets/banner-clientes/button-clientes";

const UrlBanner = () => {
  return (
    <>
      <a href="/clientes" className="mr-4 hover:text-gray-400">
        Clientes
      </a>
      /
    </>
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
        <NavClientes activo={search} />
        <div className="mr-auto flex w-full md:w-5/6">
          <div className={pagina === 2 ? "block" : "hidden"}>
            <div className="pb-6 pt-6">
              <h1 className="ml-4 pb-4 text-3xl">Postventa</h1>
              <p className="text-l ml-4 pb-4">
                <UrlBanner />
              </p>
              <p className="text-18px ml-4">
                Si necesitas comunicarte con el servicio postventa de Malpo,
                puedes llamar al 6008183000 o enviar un correo electrónico a
                servicioalcliente@malpo.cl.
              </p>
              <p className="text-18px ml-4">
                Estaremos encantados de resolver tus dudas y consultas lo antes
                posible. Si quieres solicitar una inspección técnica, haz clic
                en el botón de solicitud de inspección técnica y completa el
                formulario.
              </p>
            </div>
            <div className="ml-4 pb-3 pt-3">
              <div className="flex w-11/12 flex-wrap justify-between ">
                <ButtonClientes
                  url="https://www.innovamalpo.cl/Comercial/POSTVENTA/Ctrl_cliente"
                  titulo="Solicitud de inspección técnica"
                  icono="https://c.animaapp.com/cgJTDGfB/img/frame-inspect@2x.png"
                />

                <ButtonClientes
                  url="#"
                  titulo="Llamar a servicio al cliente"
                  icono="https://c.animaapp.com/cgJTDGfB/img/call@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={pagina === 3 ? "block" : "hidden"}>
            <div className="pb-6 pt-6">
              <h1 className="ml-4 pb-4 text-3xl">Manuales de cuidado</h1>
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
            <div className="ml-4 pb-3 pt-3">
              <div className="flex w-11/12 flex-wrap justify-between ">
                <ButtonClientes
                  url="/clientes/manuales-de-compra/manual-cuidado-casas?val=1"
                  titulo="Manual de cuidado de Casas"
                  icono="https://c.animaapp.com/LZirYSzb/img/home@2x.png"
                />

                <ButtonClientes
                  url="/clientes/manuales-de-compra/manual-cuidado-departamentos?val=1"
                  titulo="Manual de cuidado de Departamentos"
                  icono="https://c.animaapp.com/LZirYSzb/img/apartment@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={pagina === 4 ? "block" : "hidden"}>
            <div className="pb-6 pt-6">
              <h1 className="ml-4 pb-8 text-3xl">
                Cómo comprar con Crédito Hipotecario
              </h1>
              <p className="text-18px ml-4">
                Puedes cumplir el sueño de tu vivienda propia con un crédito
                hipotecario, que es un préstamo que te otorga el banco y que
                aseguras con la propiedad que compras. No te preocupes, te
                acompañamos en cada paso del proceso y te explicamos los
                requisitos y trámites que debes realizar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
