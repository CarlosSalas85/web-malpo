import Image from "next/image";

const Banner = () => {
  return (
    <div className="pb-6 pt-6">
      <h1 className="ml-4 text-3xl sm:text-center">Loteo</h1>

      <div className="flex items-center justify-center">
        <div className="flex w-5/6 items-center justify-center bg-gray-50">
          <Image
            src="https://www.innovamalpo.cl/disco2/web_malpo/imagenes_proyectos/e3313049b70c76ff13a78a0a931bfac7.png"
            alt="Descripción de la imagen"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
