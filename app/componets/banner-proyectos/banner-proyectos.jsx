import "./banner-proyectos.css";

const CustomButton = ({ texto, url}) => {
  return (
    <a
      href={url}
      className="mb-2 mr-2 w-full rounded-lg border border-white bg-transparent px-4 py-2 text-white hover:border-gray-400 hover:text-gray-400"
    >
      {texto}
    </a>
  );
};

const Banner = (props) => {
  return (
    <div className="color-fondo pb-6 pt-6 text-white">
      <div className="mb-8 ml-4 sm:text-center">
        <h1 className="text-3xl">{props.texto}</h1>
      </div>
      <div className="ml-4 mr-4 sm:flex sm:justify-center">
        <div className="flex flex-wrap sm:justify-center">
          {props.datos &&
            props.datos.map((elemento, index) => (
              <div
                key={index}
                className="flex w-1/3 sm:w-1/6 sm:justify-center lg:w-auto"
              >
                <CustomButton
                  texto={elemento.nombre}
                  url={elemento.url}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;




