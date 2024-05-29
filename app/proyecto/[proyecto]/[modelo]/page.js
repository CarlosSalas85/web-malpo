import React from "react";
import Image from "next/image";
import BannerProyecto from "@/app/componets/banner-proyectos/banner-proyecto";
import BannerModelos from "@/app/function/banner-modelos";
import BannerLogos from "@/app/componets/banner-proyectos/banner-logos";
import BannerUbicacion from "@/app/componets/banner-proyectos/banner-ubicacion";
import BannerMapa from "@/app/componets/banner-proyectos/banner-mapa";
import BannerEjecutivas from "@/app/componets/banner-proyectos/banner-ejecutivas";
import BannerAccesos from "@/app/componets/banner-proyectos/banner-accesos";
import BannerProyectos from "@/app/componets/banner-proyectos/banner-proyectos";
import BannerLoteo from "@/app/componets/banner-proyectos/banner-loteo";
import Button from "@/app/componets/button/button";
import ButtonRojo from "@/app/componets/button/button-rojo";
import ListProyecto from "@/app/componets/list-proyecto/list-proyecto";
import Carousel from "@/app/componets/carousel/carousel";
import {Ctrl_proyectos} from "@/app/controllers/Ctrl_proyectos";

const UrlBanner = (props) => {
  return (
    <>
      <a href="/proyectos/todos" className="mx-1 hover:text-gray-400">
        Proyectos
      </a>
      /
      <a href="/{$props.ciudad}" className="mx-1 hover:text-gray-400">
      {props.ciudad}
      </a>
      /
      <a href="/{$props.nombre}" className="mx-1 hover:text-gray-400">
        {props.nombre}
      </a>
    </>
  );
};

const images = [
  "https://www.innovamalpo.cl/disco2/web_malpo/imagenes_modelos/13ebb64480be8be8c89a1b2d4b9793fc.webp",
  "https://www.innovamalpo.cl/disco2/web_malpo/imagenes_modelos/13ebb64480be8be8c89a1b2d4b9793fc.webp",
  "https://www.innovamalpo.cl/disco2/web_malpo/imagenes_modelos/13ebb64480be8be8c89a1b2d4b9793fc.webp",
  "https://www.innovamalpo.cl/disco2/web_malpo/imagenes_modelos/e413f178fbf57bc0237fab014e1b8fb4.webp",
  "https://www.innovamalpo.cl/disco2/web_malpo/imagenes_modelos/e413f178fbf57bc0237fab014e1b8fb4.webp",
  "https://www.innovamalpo.cl/disco2/web_malpo/imagenes_modelos/e413f178fbf57bc0237fab014e1b8fb4.webp",
  // Agrega aquí las URLs de tus imágenes
];

export default async function Modelos({params: { modelo }, searchParams:{val1,val2}}){
  // console.log("El valor de params:{modelo}", modelo,val1,val2);
  const proyectoData = await Ctrl_proyectos(val1);
  const idModelo = val2;
  const modelosData = proyectoData?.datos?.modelos;
  const modeloData = modelosData.filter(modelo => modelo.idModelo === idModelo);
  const filtroDecodificado = modelo ? decodeURIComponent(modelo) : "";
  const url = <UrlBanner nombre={proyectoData?.datos?.proyecto?.nombreWebProyecto} ciudad={proyectoData?.datos?.proyecto?.comunaNombre} />;
  var tour360Modelo = modeloData[0]?.Modelos?.tour360Modelo; // Asegurate de manejar posibles valores nulos o indefinidos

  if (tour360Modelo && /^(http|https):\/\/\S+$/i.test(tour360Modelo)) {
      console.log('Es un enlace URL válido:', tour360Modelo);
  } else {
      console.log('No es un enlace URL válido o es nulo.');
  }
  tour360Modelo=null;

  // const [currentImage, setCurrentImage] = useState(0);

  // const nextImage = () => {
  //   setCurrentImage((prevImage) =>
  //     prevImage + 3 >= images.length ? 0 : prevImage + 3,
  //   );
  // };

  // const prevImage = () => {
  //   setCurrentImage((prevImage) => (prevImage - 3 < 0 ? 0 : prevImage - 3));
  // };

  // const nextImageMobile = () => {
  //   setCurrentImage((prevImage) =>
  //     prevImage + 1 >= images.length ? 0 : prevImage + 1,
  //   );
  // };

  // const prevImageMobile = () => {
  //   setCurrentImage((prevImage) => (prevImage - 1 < 0 ? 0 : prevImage - 1));
  // };

  return (
    <>
      <BannerProyecto url={url} />

      <div className="mx-auto mb-4 mt-4 w-11/12 md:w-10/12">
        <h1 className="mb-4 text-3xl sm:text-center">{modeloData[0].Modelos.nombreModelo}</h1>
        <p className="text-18px sm:text-center">
        {modeloData[0].Modelos.informacionModelo}   
        </p>
      </div>

      <div className="mb-6 mt-6 flex justify-center">
        <div className="flex w-3/4 flex-col items-center justify-between text-center xl:w-2/3 xl:flex-row">
         <ButtonRojo titulo=" Cotizar Proyecto"/>

          <Button
            titulo="Tour Virtual"
            imagen="https://c.animaapp.com/UruCFYUm/img/---icon--3d-rotation-@2x.png"
            url="#tourvirtual" 
          />
          <Button
            titulo="Descargar Brochure"
            imagen="https://c.animaapp.com/unMEM02m/img/picture-as-pdf-1.svg"
            href={proyectoData?.datos?.recursos?.pdfBrochure || "#"}
            target="1"
          />
        </div>
      </div>

      <div className="pb-6 pt-6">
        <h1 className="ml-4 text-3xl sm:text-center">Atributos del modelo</h1>
         <ListProyecto caracteristicas={modelosData[0].Modelos} tipo="modelos"/> 
      </div>

      {proyectoData?.datos?.logos && (
        <div className="pb-6 pt-6">
          <div className="flex flex-wrap justify-start xl:justify-center">
            <BannerLogos logos={proyectoData?.datos?.logos} />
          </div>
        </div>
      )}

       <div className="pb-6 pt-6">
        <h1 className="ml-4 text-3xl sm:text-center">Planta</h1>
        <div className="mt-4 flex justify-center">
          <div className="flex w-2/3 flex-col sm:flex-row">
            {/* Div 1 */}
            {modeloData[0].Modelos.imagenPiso1 != null && (
            <div className="mx-2 w-full border-gray-300 shadow-md sm:order-first sm:w-1/2 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-center text-2xl">Planta del 1er piso</h2>
              <Image
                src={modeloData[0].Modelos.imagenPiso1}
                alt="piso"
                width={500}
                height={100}
                className="mx-auto h-auto"
              />
            </div>
            )}
            {/* Div 2 */}
            {modeloData[0].Modelos.imagenPiso2 != null && (
            <div className="mx-2 w-full border-gray-300 shadow-md sm:order-last sm:w-1/2 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-center text-2xl">Planta del 2do piso</h2>
              <Image
                src={modeloData[0].Modelos.imagenPiso2}
                alt="piso"
                width={500}
                height={100}
                className="mx-auto h-auto"
              />
            </div>
            )}
          </div>
        </div>
      </div> 
      {modeloData[0].Modelos != null && (
       <Carousel modelos={modelosData[0]?.Modelos}/> 
      )}
      {/* <div className="pb-6 pt-6">
        <h1 className="ml-4 text-3xl sm:text-center">Imágenes del modelo</h1>
        <div className="relative mx-auto mt-4 hidden w-full md:flex md:w-5/6 md:justify-center">
          <button className="" onClick={prevImage}>
            <img
              src="https://c.animaapp.com/UruCFYUm/img/navigate-before.svg"
              alt="Previous"
            />
          </button>

          <div className="relative flex w-8/12 justify-center overflow-hidden">
            <div className="flex">
              {images.map((image, index) => {
                const isCurrent = index === currentImage;
                const isVisible =
                  index >= currentImage && index <= currentImage + 2;
                return (
                  <div
                    key={index}
                    className={`mx-2 ${isCurrent || isVisible ? "block" : "hidden"}`}
                  >
                    <Image
                      src={image}
                      alt="Carousel"
                      width={250}
                      height={150}
                      className="mx-auto h-auto"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <button className="" onClick={nextImage}>
            <img
              src="https://c.animaapp.com/UruCFYUm/img/navigate-next.svg"
              alt="Next"
            />
          </button>
        </div>

        <div className="relative mx-auto mt-4 flex w-full md:hidden md:w-5/6 md:justify-center">
          <button className="" onClick={prevImageMobile}>
            <img
              src="https://c.animaapp.com/UruCFYUm/img/navigate-before.svg"
              alt="Previous"
            />
          </button>

          <div className="relative flex w-full justify-center overflow-hidden">
            <div className="flex">
              {images.map((image, index) => {
                const isCurrent = index === currentImage;
                return (
                  <div
                    key={index}
                    className={`mx-2 w-full ${isCurrent ? "block" : "hidden"}`}
                  >
                    <Image
                      src={image}
                      alt="Carousel"
                      width={250}
                      height={150}
                      className="mx-auto h-auto"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <button className="" onClick={nextImageMobile}>
            <img
              src="https://c.animaapp.com/UruCFYUm/img/navigate-next.svg"
              alt="Next"
            />
          </button>
        </div>
      </div> */}

      
      <div id="tourvirtual" className="pb-6 pt-6">
        <h1 className="ml-4 text-3xl sm:text-center">Tour Virtual</h1>
        <div className="mt-4 flex justify-center">
          <iframe
            className="h-[400px] w-full px-2"
            title="Tu título"
            src="https://my.matterport.com/show/?m=qPhZeomSxNT"
            frameBorder="0"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
      
      {proyectoData?.datos?.proyecto && (
        <BannerUbicacion proyecto={proyectoData?.datos?.proyecto} />
      )}
      {proyectoData?.datos?.proyecto && (
      <BannerMapa proyecto={proyectoData?.datos?.proyecto} />
      )}
      {/* <BannerEjecutivas /> */}
      {proyectoData?.datos?.proyecto?.imagenLoteo && (
      <BannerLoteo imagenLoteo={proyectoData?.datos?.proyecto?.imagenLoteo} />
      )}
      <div id="ejecutivas">
       {proyectoData?.datos?.usuarios && (
      <BannerEjecutivas usuarios={proyectoData?.datos.usuarios} />
       )}
       </div>
      <BannerAccesos />
      <BannerModelos id={idModelo}/>
    </>
  );
};


