"use client";
import { useSearchParams } from "next/navigation";
import Button from "@/app/componets/button/button";

import BannerImage from "@/app/componets/banner/banner-imagen";
import NavManuales from "@/app/componets/banner-clientes/nav-manuales";

import BannerRegiones from "@/app/function/banner-regiones-cliente";

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
    <div className="mx-auto w-5/6 pb-3 pt-3 md:ml-4 md:w-2/3">
      <picture className="relative flex h-[300px] justify-center sm:justify-start xl:h-[400px]">
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
          className="h-[300px] w-[100%] bg-cover bg-center xl:h-[400px]"
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
      <div className="flex flex-col justify-center px-2 pb-6 md:flex-row">
        <NavManuales activo={search} />
        <div className="mr-auto flex w-full md:w-5/6">
          <div className={pagina === 1 ? "block" : "hidden"}>
            <div className="pb-6 pt-6">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-3xl">
                  Manual de cuidado de casas
                </h1>
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

            <div className="pb-3 pt-3">
              <div className="mx-auto ml-0 flex justify-center md:ml-4 md:justify-start">
                <Button
                  titulo="Descargar Brochure"
                  imagen="https://c.animaapp.com/unMEM02m/img/picture-as-pdf-1.svg"
                  url="https://www.innovamalpo.cl/disco2/web_malpo/pdfs/Manual_casa.pdf"
                  pdf="1"
                />
              </div>
            </div>

            <div className="pb-3 pt-3">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-2xl">
                  ¿Qué son las mantenciones periódicas?
                </h1>
                <p className="text-l ml-4 pb-4">
                  Son todas aquellas que se realizan en forma habitual cada
                  cierto tiempo o por temporadas, para evitar el deterioro de la
                  propiedad, prolongar la vida útil de los elementos de la
                  vivienda y evitar desperfectos por falta de revisiones.
                </p>
              </div>
            </div>
            <Image />

            <div className="pb-3 pt-3">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-2xl">Estructura soportante</h1>
                <p className="text-l ml-4 pb-4">
                  Es el conjunto de elementos que vinculados entre sí son
                  capaces de generar la resistencia y apoyo para mantener el
                  espacio arquitectónico sin sufrir deformaciones en la
                  vivienda. Incluye: cimientos, sobrecimientos y radieres;
                  pilares, vigas y losas; muros y techumbre.
                </p>

                <p className="text-l ml-4 pb-4">
                  Constructora Malpo utiliza materiales de excelente calidad
                  para hacer de la estructura de su vivienda la más resistente e
                  invulnerable. Sin embargo, existen situaciones que debe evitar
                  para sortear dificultades derivadas de una mantención no
                  profesional y mal asesorada.
                </p>

                <p className="text-l ml-4 pb-4">
                  Si desea realizar una modificación en la estructura de la
                  vivienda debe tener en cuenta:
                </p>

                <div className="text-l ml-4 pb-4">
                  <ul className="list-inside list-disc">
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        Revisar siempre los planos de las instalaciones, para
                        así evitar daños involuntarios.
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        Asegurarse de ubicar el lugar exacto donde se encuentran
                        llaves de paso de agua y gas.
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        La misma recomendación se hace para los empalmes
                        eléctricos y cualquier conexión de este tipo.
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-l ml-4 pb-4">
                  Es importante recalcar que si usted no sabe arreglar un
                  desperfecto de estas características, no intervenga hasta
                  llamar a un técnico especialista.
                </p>

                <p className="text-l ml-4 pb-4">
                  Para realizar cambios en el interior de la vivienda, debe
                  saber:
                </p>

                <div className="text-l ml-4 pb-4">
                  <ul className="list-inside list-disc">
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        Si bien es posible mover o eliminar tabiques, no debe
                        modificar de ninguna manera vigas, pilares, tensores o
                        diagonales.
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        Cualquier inconveniente derivado de intervenciones en la
                        estructura de la vivienda puede ocasionar graves daños.
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        Consulte siempre con un profesional calificado.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={pagina === 2 ? "block" : "hidden"}>
            <div className="pb-6 pt-6">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-3xl">
                  Manual de cuidado de departamentos
                </h1>
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

            <div className="pb-3 pt-3">
              <div className="mx-auto ml-0 flex justify-center md:ml-4 md:justify-start">
                <Button
                  titulo="Descargar Brochure"
                  imagen="https://c.animaapp.com/unMEM02m/img/picture-as-pdf-1.svg"
                  url="https://www.innovamalpo.cl/disco2/web_malpo/pdfs/Manual_dpto.pdf"
                  blank="1"
                />
              </div>
            </div>

            <div className="pb-3 pt-3">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-2xl">
                  ¿Qué son las mantenciones periódicas?
                </h1>
                <p className="text-l ml-4 pb-4">
                  Son todas aquellas que se realizan en forma habitual cada
                  cierto tiempo o por temporadas, para evitar el deterioro de la
                  propiedad, prolongar la vida útil de los elementos de la
                  vivienda y evitar desperfectos por falta de revisiones.
                </p>
              </div>
            </div>
            <Image />

            <div className="pb-3 pt-3">
              <div className="w-11/12">
                <h1 className="ml-4 pb-4 text-2xl">Estructura soportante</h1>
                <p className="text-l ml-4 pb-4">
                  Es el conjunto de elementos que vinculados entre sí son
                  capaces de generar la resistencia y apoyo para mantener el
                  espacio arquitectónico sin sufrir deformaciones en la
                  vivienda. Incluye: cimientos, sobrecimientos y radieres;
                  pilares, vigas y losas; muros y techumbre.
                </p>

                <p className="text-l ml-4 pb-4">
                  Constructora Malpo utiliza materiales de excelente calidad
                  para hacer de la estructura de su vivienda la más resistente e
                  invulnerable. Sin embargo, existen situaciones que debe evitar
                  para sortear dificultades derivadas de una mantención no
                  profesional y mal asesorada.
                </p>

                <p className="text-l ml-4 pb-4">
                  Si desea realizar una modificación en la estructura de la
                  vivienda debe tener en cuenta:
                </p>

                <div className="text-l ml-4 pb-4">
                  <ul className="list-inside list-disc">
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        Revisar siempre los planos de las instalaciones, para
                        así evitar daños involuntarios.
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        Asegurarse de ubicar el lugar exacto donde se encuentran
                        llaves de paso de agua y gas.
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        La misma recomendación se hace para los empalmes
                        eléctricos y cualquier conexión de este tipo.
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-l ml-4 pb-4">
                  Es importante recalcar que si usted no sabe arreglar un
                  desperfecto de estas características, no intervenga hasta
                  llamar a un técnico especialista.
                </p>

                <p className="text-l ml-4 pb-4">
                  Para realizar cambios en el interior de la vivienda, debe
                  saber:
                </p>

                <div className="text-l ml-4 pb-4">
                  <ul className="list-inside list-disc">
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        Si bien es posible mover o eliminar tabiques, no debe
                        modificar de ninguna manera vigas, pilares, tensores o
                        diagonales.
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        Cualquier inconveniente derivado de intervenciones en la
                        estructura de la vivienda puede ocasionar graves daños.
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mr-2">&#8226;</span>
                      <span className="ml-4">
                        Consulte siempre con un profesional calificado.
                      </span>
                    </li>
                  </ul>
                </div>
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
