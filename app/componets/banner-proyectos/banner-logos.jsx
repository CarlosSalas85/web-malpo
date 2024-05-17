import Image from "next/image";

const Banner = () => {
  return (
    <div className="mt-6 w-full text-center sm:w-full md:mt-0 md:w-1/3 xl:w-1/5">
      <Image
        src="https://www.innovamalpo.cl/disco2/web_malpo/imagenes_logos/7e8f1486508d2d8e4806d19ce5fc6450.webp"
        alt="logo"
        className="inline-block h-auto max-w-full shadow-md shadow-gray-800"
        width={180}
        height={80}
      />
    </div>
  );
};

export default Banner;
