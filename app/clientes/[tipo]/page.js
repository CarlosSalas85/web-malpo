"use client";
import { useSearchParams } from "next/navigation";

import BannerImage from "@/app/componets/banner/banner-imagen";
import NavClientes from "@/app/componets/banner-clientes/nav-clientes";
import ButtonClientes from "@/app/componets/banner-clientes/button-clientes";

import BannerRegiones from "@/app/function/banner-regiones-cliente";

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

const Image = () => {
  return (
    <div className="mx-auto w-5/6 pb-3 pt-3 md:ml-4 md:w-2/3">
      <picture className="relative flex h-[300px] justify-center sm:justify-start xl:h-[400px]">
        {/* Imagen de fondo para dispositivos pequeños */}
        <source
          srcSet="https://c.animaapp.com/1mOpWbot/img/descanso-visual-2@2x.png"
          media="(max-width: 640px)"
        />
        {/* Imagen de fondo para dispositivos grandes */}
        <source
          srcSet="https://c.animaapp.com/1mOpWbot/img/descanso-visual-2@2x.png"
          media="(min-width: 641px)"
        />
        {/* Imagen de fondo por defecto */}
        <img
          className="h-[300px] w-[100%] bg-cover bg-center xl:h-[400px]"
          src="https://c.animaapp.com/1mOpWbot/img/descanso-visual-2@2x.png" // Ruta de la imagen de fondo por defecto para navegadores que no admiten <picture>
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
        <NavClientes activo={search} />
        <div className="mr-auto flex w-full md:w-5/6">
          <div className={pagina === 2 ? "block" : "hidden"}>
            <div className="pb-6 pt-6">
              <div className="w-11/12">
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
                  Estaremos encantados de resolver tus dudas y consultas lo
                  antes posible. Si quieres solicitar una inspección técnica,
                  haz clic en el botón de solicitud de inspección técnica y
                  completa el formulario.
                </p>
              </div>
            </div>
            <div className="ml-0 pb-3 pt-3 md:ml-4">
              <div className="mx-auto flex w-11/12 flex-wrap justify-between md:mx-0">
                <ButtonClientes
                  url="https://www.innovamalpo.cl/Comercial/POSTVENTA/Ctrl_cliente"
                  titulo="Solicitud de inspección técnica"
                  icono="https://c.animaapp.com/cgJTDGfB/img/frame-inspect@2x.png"
                  blank="1"
                />

                <ButtonClientes
                  url="tel:6008183000"
                  titulo="Llamar a servicio al cliente"
                  icono="https://c.animaapp.com/cgJTDGfB/img/call@2x.png"
                  blank="1"
                />
              </div>
            </div>
          </div>
          <div className={pagina === 3 ? "block" : "hidden"}>
            <div className="pb-6 pt-6">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-3xl">Manuales de cuidado</h1>
                <p className="text-l ml-4 pb-4">
                  <UrlBanner />
                </p>
                <p className="text-18px ml-4">
                  Para brindarte un mejor servicio y facilitar el cuidado de tu
                  propiedad, te ofrecemos las versiones digitales de los
                  manuales de cuidado de casas y departamentos. En estos
                  documentos encontrarás información útil sobre las
                  características, instalaciones y recomendaciones para el
                  mantenimiento de tu vivienda. Te invitamos a consultarlos y
                  seguir las indicaciones para conservar tu propiedad en óptimas
                  condiciones.
                </p>
              </div>
            </div>
            <div className="ml-0 pb-3 pt-3 md:ml-4">
              <div className="mx-auto flex w-11/12 flex-wrap justify-between md:mx-0">
                <ButtonClientes
                  url="/clientes/manuales-de-compra/manual-cuidado-casas?val=1"
                  titulo="Manual de cuidado de Casas"
                  icono="https://c.animaapp.com/LZirYSzb/img/home@2x.png"
                />

                <ButtonClientes
                  url="/clientes/manuales-de-compra/manual-cuidado-departamentos?val=2"
                  titulo="Manual de cuidado de Departamentos"
                  icono="https://c.animaapp.com/LZirYSzb/img/apartment@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={pagina === 4 ? "block" : "hidden"}>
            <div className="pb-6 pt-6">
              <h1 className="ml-4 pb-8 text-3xl">
                Preguntas frecuentes de postcompra
              </h1>
              <p className="text-l ml-4 pb-4">
                <UrlBanner />
              </p>
              <p className="text-18px ml-4">
                En esta página encontrarás algunas preguntas frecuentes que
                pueden surgir después de comprar una propiedad. Esperamos que
                esta información te sea útil y te ayude a resolver cualquier
                duda que tengas sobre el proceso de post compra.
              </p>
            </div>
            <div className="pb-3 pt-3">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-2xl">
                  ¿Cuál es el periodo de garantía de una vivienda?
                </h1>
                <p className="text-l ml-4 pb-4">
                  Desde que su vivienda cuenta con recepción municipal (fecha
                  que se encuentra en la escritura de su vivienda), existen
                  plazos para hacer efectivas las garantías en caso de fallas o
                  defectos conforme a la ley 20.016:
                </p>
                <div className="text-l ml-4 pb-4">
                  <ul className="list-inside list-disc">
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        10 años de garantía cuando afectan la estructura.
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        5 años de garantía cuando afectan a los elementos
                        constructivos o de instalaciones.
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        3 años de garantía cuando afectan las terminaciones.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pb-3 pt-3">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-2xl">
                  ¿Si el calefón no funciona que debo hacer?
                </h1>
                <p className="text-l ml-4">
                  Se debe llamar al servicio técnico autorizado por la marca de
                  su calefón que corresponda a la ciudad donde usted vive, debe
                  presentar una copia del acta de entrega. En caso de no tenerla
                  puede solicitar en la sala de ventas en donde usted compró la
                  vivienda.
                </p>
                <p className="ml-4 font-semibold">
                  Post-venta no puede intervenir dicho calefón, ya que esta
                  acción anula la garantía.
                </p>
              </div>
            </div>

            <Image />

            <div className="pb-3 pt-3">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-2xl">
                  ¿Qué hacer si se baja el automático o diferencial de
                  electricidad en mi casa?
                </h1>

                <p className="text-l ml-4">
                  <span className="font-semibold">
                    El diferencial y el automático son elementos de protección
                    de la vivienda,
                  </span>{" "}
                  y si se activa alguno de ellos es porque algo está funcionando
                  mal, lo primero que se debe realizar es desconectar la
                  totalidad de los artefactos eléctricos. Si con esto aun se
                  activan las protecciones y se corta la luz es porque el
                  problema podría ser en la instalación, si no es así, comience
                  a enchufar de a uno sus artefactos y si con alguno de ellos se
                  activa la protección es el artefacto el que está fallando y es
                  recomendable que lo revise un especialista.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BannerRegiones />
    </>
  );
};

export default Page;
