"use client";
import { useSearchParams } from "next/navigation";

import BannerImage from "@/app/componets/banner/banner-imagen";
import NavComoComprar from "@/app/componets/banner-como-comprar/nav-como-comprar";

import BannerRegiones from "@/app/function/banner-regiones-cliente";

const ListItems = () => {
  return (
    <>
      <Item
        numero="1"
        titulo="Cotización"
        texto="Se puede realizar de manera online en nuestra página web o Presencial en nuestras oficinas."
      />
      <Item
        numero="2"
        titulo="Pre aprobación del crédito"
        texto="En esta etapa tienes que solicitar una preaprobación con un banco de tu crédito hipotecario."
      />
      <Item
        numero="3"
        titulo="Reserva"
        texto="De la unidad que vas a comprar.  Consiste en dejar un pago que se abona al valor de la propiedad."
      />
      <Item
        numero="4"
        titulo="Promesa"
        texto="Aquí queda establecido contractualmente el precio, pago del pie y detalles de la propiedad."
      />
      <Item
        numero="5"
        titulo="Crédito Hipotecario"
        texto="En esta etapa nos contactaremos con el banco y coordinaremos el departamento y el crédito que tienes aprobado."
      />
      <Item
        numero="6"
        titulo="Escritura"
        texto="Es el documento legal entre Malpo, el banco y el cliente, que se realiza ante notario. El plazo es de 60 días corridos, luego de lo cual serás informado."
      />
      <Item
        numero="7"
        titulo="Entrega"
        texto="Luego de haber firmado la escritura, y si pagos pendientes. Se realiza el pago de la propiedad, en este momento tambien se hace la inspección final junto a nosotros."
      />
      <Item
        numero="8"
        titulo="Postventa"
        texto="Desde la recepción de tu propiedad comenzará a regir la garantía, la que cubrirá cualquier daño de construcción dentro de las políticas de garantía Malpo."
      />
    </>
  );
};

const Item = (props) => {
  return (
    <div className="flex flex-col items-center py-5 xl:flex-row">
      <div className="mb-2 mr-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-black">
        <span className="text-4xl font-bold">{props.numero}</span>
      </div>
      <div className="ml-4 w-5/6">
        <h1 className="mb-2 text-2xl font-semibold">{props.titulo}</h1>
        <p className="text-xl">{props.texto}</p>
      </div>
    </div>
  );
};

const Image = () => {
  return (
    <div className="mx-auto w-5/6 pb-3 pt-3 md:mx-0 md:w-2/3">
      <picture className="relative flex h-[200px] justify-center sm:justify-start xl:h-[300px]">
        {/* Imagen de fondo para dispositivos pequeños */}
        <source
          srcSet="https://c.animaapp.com/ymkKGZCh/img/descanso-visual-1.png"
          media="(max-width: 640px)"
        />
        {/* Imagen de fondo para dispositivos grandes */}
        <source
          srcSet="https://c.animaapp.com/ymkKGZCh/img/descanso-visual-1.png"
          media="(min-width: 641px)"
        />
        {/* Imagen de fondo por defecto */}
        <img
          className="h-[200px] w-[100%] bg-cover bg-center xl:h-[300px]"
          src="https://c.animaapp.com/ymkKGZCh/img/descanso-visual-1.png" // Ruta de la imagen de fondo por defecto para navegadores que no admiten <picture>
          alt=""
        />
      </picture>
    </div>
  );
};

const Button = () => {
  return (
    <div className="pb-3 pt-3">
      <div className="mx-auto flex justify-center md:justify-start">
        <div className="w-5/6 sm:w-2/3 md:w-1/2 ">
          <a href="#">
            <div className="fondo-malpo-gris flex h-32 w-full items-center justify-center rounded-lg pb-6 pt-6 text-white sm:pb-4 sm:pt-4">
              {/* Contenido de la tarjeta */}
              <span className="ml-6 text-3xl font-normal hover:text-gray-400 md:ml-0 md:text-center">
                Formas de Financiamiento
              </span>
              {/* Icono */}
              <img
                className="mr-10 h-12 w-12 md:ml-4 md:mr-4"
                alt="icono"
                src="https://c.animaapp.com/7t0NYydm/img/account-balance-1@2x.png"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const UrlBanner = () => {
  return (
    <>
      <a href="/como-comprar" className="mr-4 hover:text-gray-400">
        Cómo comprar
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
        imagenMobile="https://c.animaapp.com/ymkKGZCh/img/hero-image.png"
        imagenDesktop="https://c.animaapp.com/ymkKGZCh/img/hero-image.png"
      />
      <div className="flex flex-col justify-center pb-6 md:flex-row">
        <NavComoComprar activo={search} />
        <div className="mr-auto flex w-full md:w-5/6">
          <div className="w-11/12">
            <div className={pagina === 2 ? "block" : "hidden"}>
              <div className="pb-6 pt-6">
                <h1 className="ml-4 pb-4 text-3xl">
                  Cómo comprar con Subsidio
                </h1>
                <p className="text-l ml-4 pb-4">
                  <UrlBanner />
                </p>
                <p className="text-18px ml-4">
                  Puedes cumplir el sueño de tu vivienda propia con un subsidio
                  habitacional, que es una ayuda económica que te entrega el
                  Estado para comprar una propiedad nueva o usada, según tu
                  nivel de ingresos y ahorro. No te preocupes, te acompañamos en
                  cada paso del proceso y te explicamos los requisitos y
                  trámites que debes realizar.
                </p>
              </div>
              <div className="pb-6 pt-6">
                <h1 className="ml-4 pb-8 text-3xl">
                  Proceso de compra con subsidio
                </h1>
                <ListItems />
              </div>
              <Image />
              <Button />
            </div>
            <div className={pagina === 3 ? "block" : "hidden"}>
              <div className="pb-6 pt-6">
                <h1 className="ml-4 pb-8 text-3xl">
                  Cómo comprar con Crédito Hipotecario
                </h1>
                <p className="text-l ml-4 pb-4">
                  <UrlBanner />
                </p>
                <p className="text-18px ml-4">
                  Puedes cumplir el sueño de tu vivienda propia con un crédito
                  hipotecario, que es un préstamo que te otorga el banco y que
                  aseguras con la propiedad que compras. No te preocupes, te
                  acompañamos en cada paso del proceso y te explicamos los
                  requisitos y trámites que debes realizar.
                </p>
              </div>
              <div className="pb-6 pt-6">
                <h1 className="ml-4 pb-8 text-3xl">
                  Proceso de compra con Crédito Hipotecario
                </h1>
                <ListItems />
              </div>
              <Image />
              <Button />
            </div>
          </div>
        </div>
      </div>
      <BannerRegiones />
    </>
  );
};

export default Page;
