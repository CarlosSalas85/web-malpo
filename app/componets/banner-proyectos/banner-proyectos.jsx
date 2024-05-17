import "./banner-proyectos.css";

const CustomButton = (props) => {
  return (
    <a
      href={`/proyectos/${props.filtro}`}
      className="mb-2 mr-2 w-full rounded-lg border border-white bg-transparent px-4 py-2 text-white hover:border-gray-400 hover:text-gray-400"
    >
      {props.texto}
    </a>
  );
};

const Banner = (props) => {
  const buttons = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="color-fondo pb-6 pt-6 text-white">
      <div className="mb-8 ml-4 sm:text-center">
        <h1 className="text-3xl">{props.texto}</h1>
      </div>
      <div className="ml-4 mr-4 sm:flex sm:justify-center">
        <div className="flex flex-wrap sm:justify-center">
          {buttons.map((index) => (
            <div
              key={index}
              className={`flex w-1/3 sm:w-1/6 sm:justify-center lg:w-auto`}
            >
              <CustomButton texto={props.titulo} filtro={props.filtro} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
