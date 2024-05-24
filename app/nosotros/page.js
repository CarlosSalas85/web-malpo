"use client";
import BannerImage from "@/app/componets/banner/banner-imagen";
import NavNosotros from "@/app/componets/banner-nosotros/nav-nosotros";

import BannerRegiones from "@/app/function/banner-regiones-cliente";

const Page = () => {
  return (
    <>
      <BannerImage
        imagenMobile="https://c.animaapp.com/5T1Fka1D/img/hero-image.png"
        imagenDesktop="https://c.animaapp.com/5T1Fka1D/img/hero-image.png"
      />
      <div className="flex flex-col justify-center pb-6 md:flex-row">
        <NavNosotros activo="1" />
        <div className="mr-auto flex flex-col md:w-5/6">
          <div className="pb-6 pt-8">
            <div className="w-11/12">
              <h1 className="ml-4 pb-8 text-3xl md:ml-0">Nosotros</h1>
              <p className="text-18px mb-4 px-4 md:px-0">
                Somos una empresa inmobiliaria con años de experiencia en el
                mercado. Nuestro equipo está formado por agentes capacitados y
                comprometidos, que conocen las necesidades y expectativas de
                nuestros clientes.
              </p>
              <p className="text-18px px-4 md:px-0">
                Existimos por y para nuestros clientes. Somos una empresa
                nacional, que produce viviendas con calidad de vida y dignidad,
                en un marco de ética y responsabilidad social empresarial.
                Nuestros clientes contarán siempre con un servicio de calidad,
                flexible y personalizado, acompañándolos incluso más allá de la
                compra, todo ello basado en la alta capacidad y compromiso de
                nuestros equipos de trabajo de profesionales y técnicos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BannerRegiones />
    </>
  );
};

export default Page;
