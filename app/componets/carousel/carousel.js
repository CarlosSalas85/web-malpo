'use client';

import React, { useState } from "react";
import Image from "next/image";

const Carousel = (props) => {
  const modelos = props.modelos;
  const images = [
    modelos?.imagenCarrusel1,
    modelos?.imagenCarrusel2,
    modelos?.imagenCarrusel3,
    modelos?.imagenCarrusel4,
    modelos?.imagenCarrusel5,
    modelos?.imagenCarrusel6,
  ];

  // Verificar si todas las imágenes son nulas
  const allNull = images.every(image => image === null);

  // Si todas las imágenes son nulas, almacenar un arreglo con un solo elemento nulo
  const filteredImages = allNull ? [null] : 
    // De lo contrario, filtrar las imágenes no nulas que tengan extensiones válidas
    images.filter(image => image !== null && /\.(jpg|png|webp)$/i.test(image));

//   console.log("Imagenes Filtradas:", filteredImages);

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage + 3 >= filteredImages.length ? 0 : prevImage + 3
    );
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => 
      prevImage - 3 < 0 ? 0 : prevImage - 3
    );
  };

  const nextImageMobile = () => {
    setCurrentImage((prevImage) =>
      prevImage + 1 >= filteredImages.length ? 0 : prevImage + 1
    );
  };

  const prevImageMobile = () => {
    setCurrentImage((prevImage) => 
      prevImage - 1 < 0 ? 0 : prevImage - 1
    );
  };

  return (
    <div className="pb-6 pt-6">
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
            {filteredImages.map((image, index) => {
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
            {filteredImages.map((image, index) => {
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
    </div>
  );
};

export default Carousel;
