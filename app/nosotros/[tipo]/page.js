"use client";
import { useSearchParams } from "next/navigation";

import BannerImage from "@/app/componets/banner/banner-imagen";
import NavNosotros from "@/app/componets/banner-nosotros/nav-nosotros";

import BannerRegiones from "@/app/function/banner-regiones-cliente";

const UrlBanner = () => {
  return (
    <>
      <a href="/nosotros" className="mr-4 hover:text-gray-400">
        Nosotros
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
          srcSet="https://c.animaapp.com/203Oo6ad/img/descanso-visual-2@2x.png"
          media="(max-width: 640px)"
        />
        {/* Imagen de fondo para dispositivos grandes */}
        <source
          srcSet="https://c.animaapp.com/203Oo6ad/img/descanso-visual-2@2x.png"
          media="(min-width: 641px)"
        />
        {/* Imagen de fondo por defecto */}
        <img
          className="h-[300px] w-[100%] bg-cover bg-center xl:h-[400px]"
          src="https://c.animaapp.com/203Oo6ad/img/descanso-visual-2@2x.png" // Ruta de la imagen de fondo por defecto para navegadores que no admiten <picture>
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
        imagenMobile="https://c.animaapp.com/5T1Fka1D/img/hero-image.png"
        imagenDesktop="https://c.animaapp.com/5T1Fka1D/img/hero-image.png"
      />
      <div className="flex flex-col justify-center pb-6 md:flex-row">
        <NavNosotros activo={search} />
        <div className="mr-auto flex w-full md:w-5/6">
          <div className={pagina === 2 ? "block" : "hidden"}>
            <div className="pb-6 pt-6">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-3xl">Misión y Visión</h1>
                <p className="text-l ml-4 pb-4">
                  <UrlBanner />
                </p>
                <h1 className="ml-4 pb-4 text-2xl">Misión de Malpo</h1>
                <p className="text-18px ml-4">
                  Existimos por y para nuestros clientes. Somos una empresa
                  nacional, que produce viviendas con calidad de vida y
                  dignidad, en un marco de ética y responsabilidad social
                  empresarial. Nuestros clientes contarán siempre con un
                  servicio de calidad, flexible y personalizado, acompañándolos
                  incluso más allá de la compra, todo ello basado en la alta
                  capacidad y compromiso de nuestros equipos de trabajo de
                  profesionales y técnicos.
                </p>
              </div>
            </div>

            <div className="pb-3 pt-3">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-2xl">Visión de Malpo</h1>
                <p className="text-l ml-4">
                  Queremos llegar a ser líderes en la construcción de viviendas
                  en Chile, logrando un constante crecimiento en la
                  participación de mercado nacional. Nos interesa fomentar
                  alianzas estratégicas en toda nuestra cadena de valor, de
                  forma tal que se proyecten en el tiempo con nuestros clientes
                  y proveedores. Debemos estar en un constante desarrollo
                  innovativo, con altos estándares de calidad y seguridad
                  utilizando tecnología de punta. Para todo ello reconocemos el
                  valor de las personas que constituyen nuestro equipo de
                  trabajo y estimulamos su constante desarrollo, teniendo como
                  objetivo atraer a los mejores siempre.
                </p>
              </div>
            </div>
          </div>
          <div className={pagina === 3 ? "block" : "hidden"}>
            <div className="pb-6 pt-6">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-3xl">Filosofía</h1>
                <p className="text-l ml-4 pb-4">
                  <UrlBanner />
                </p>
                <h1 className="ml-4 pb-4 text-2xl">Respaldo y confianza</h1>
                <p className="text-18px ml-4">
                  Queremos llegar a ser líderes en la construcción de viviendas
                  en Chile, logrando un constante crecimiento en la
                  participación de mercado nacional. Nos interesa fomentar
                  alianzas estratégicas en toda nuestra cadena de valor, de
                  forma tal que se proyecten en el tiempo con nuestros clientes
                  y proveedores. Debemos estar en un constante desarrollo
                  innovativo, con altos estándares de calidad y seguridad
                  utilizando tecnología de punta. Para todo ello reconocemos el
                  valor de las personas que constituyen nuestro equipo de
                  trabajo y estimulamos su constante desarrollo, teniendo como
                  objetivo atraer a los mejores siempre.
                </p>
              </div>
            </div>
            <div className="pb-3 pt-3">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-2xl">Diseño e Innovación</h1>
                <p className="text-l ml-4">
                  Queremos llegar a ser líderes en la construcción de viviendas
                  en Chile, logrando un constante crecimiento en la
                  participación de mercado nacional. Nos interesa fomentar
                  alianzas estratégicas en toda nuestra cadena de valor, de
                  forma tal que se proyecten en el tiempo con nuestros clientes
                  y proveedores. Debemos estar en un constante desarrollo
                  innovativo, con altos estándares de calidad y seguridad
                  utilizando tecnología de punta. Para todo ello reconocemos el
                  valor de las personas que constituyen nuestro equipo de
                  trabajo y estimulamos su constante desarrollo, teniendo como
                  objetivo atraer a los mejores siempre.
                </p>
              </div>
            </div>
            <Image />
            <div className="pb-3 pt-3">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-2xl">Calidad y Precio</h1>
                <p className="text-l ml-4">
                  Buscamos llegar siempre a la mejor relación precio-calidad en
                  cada uno de nuestros proyectos presentes en cada ciudad de las
                  regiones V, VI, VII, VIII y R.M. Siempre en beneficio de la
                  familia.
                </p>
              </div>
            </div>
            <div className="pb-3 pt-3">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-2xl">Nuestro Compromiso</h1>
                <p className="text-l ml-4">
                  En constructora Malpo nuestro compromiso día a día ha sido con
                  cada uno de nuestros trabajadores, más que una empresa son
                  personas, nuestro principal compromiso está con ellos, sólo
                  entendiendo esto haremos una empresa más eficiente.
                </p>
              </div>
            </div>
          </div>
          <div className={pagina === 4 ? "block" : "hidden"}>
            <div className="pb-6 pt-6">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-3xl">Historia</h1>
                <p className="text-l ml-4 pb-4">
                  <UrlBanner />
                </p>
                <h1 className="ml-4 pb-4 text-2xl">Los Orígenes</h1>
                <p className="text-18px ml-4">
                  Constructora Malpo Ltda. Nace el 4 de Septiembre de 1984 de
                  una idea empresarial que tuvieron dos profesionales en los
                  años 80, donde se veía la gran necesidad de viviendas en Talca
                  y la región, enfocada en productos de gran calidad. Este sueño
                  fue impulsado por Hugo Obrador Rousseau (Arquitecto) y Ricardo
                  Moraga Sánchez (constructor Civil), gracias a sus espíritus
                  emprendedores, tenaces y de mucha constancia en una época de
                  crisis.
                </p>
              </div>
            </div>
            <div className="pb-3 pt-3">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-2xl">Trayectoria</h1>
                <p className="text-l ml-4">
                  Tras 30 años de historia inmobiliaria ininterrumpida,
                  Constructora Malpo se ha posicionado en un lugar de excelencia
                  del área, en las regiones V, VI, VII, VIII y R.M. Conjuntos
                  residenciales, loteos, edificios, centros de eventos y obras
                  mayores, es lo que somos. Nuestros logros nos avalan, Parque
                  Universitario, Diario el Centro, Colegio Inglés, Centro de
                  Eventos Fimaule, Edificio y Loteo Buen Pastor, Loteo Doña
                  Ignacia, Universidad Santo Tomás realizados en Talca y la
                  reconstrucción de más de 20.000 viviendas entre la V, VI, VII,
                  VIII y R.M. Regiones, son una buena muestra de los proyectos
                  que hemos realizado.
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
