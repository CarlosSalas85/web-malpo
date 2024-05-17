import Image from "next/image";

const Cards = (props) => {
  return (
    <div className="mx-2 my-2 flex w-full justify-center border shadow md:my-0 md:w-1/3 dark:border-gray-700 dark:bg-gray-800">
      {/* Primera sección */}
      <div className="w-1/3">
        <Image
          src={props.imagen}
          alt="usuario"
          width={120}
          height={120}
          className="inset-0 h-full w-full object-cover"
        />
      </div>
      {/* Segunda sección */}
      <div className="w-2/3 pl-2">
        <a href="">
          <h1 className=" text-lg font-semibold">{props.nombre}</h1>
          <span className="mt-4 flex items-center text-center">
            <img
              className="mr-3 h-8 w-8"
              alt={`icono`}
              src={`https://c.animaapp.com/DeOuMZYz/img/touch-app@2x.png`}
            />
            <span className="text-l text-rojoMalpo hover:text-gray-400">
              Contactar
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Cards;
