import Image from "next/image";

const Banner = (props) => {
  const logos=props.logos;
  return (
    <>
    {logos.map((logo, index) => (
    <div className="mt-6 w-full text-center sm:w-full md:mt-0 md:w-1/3 xl:w-1/5">
      <Image
        src={logo.imagenLogo}
        alt="logo"
        className="inline-block h-auto max-w-full shadow-md shadow-gray-800"
        width={180}
        height={80}
      />
    </div>
     ))}
    </>
  );
};

export default Banner;
