import "./banner-proyectos.css";

const CustomButton = (props) => {
  let result;
  switch (props.filtro) {
    case "ciudad":
      result = `0-${props.id}`;
      break;
    case "region":
      result = `${props.id}-0`;
      break;
    default:
      result = "";
  }
  return (
    <a
      href={`/proyectos/${result}`}
      className="flex justify-center items-center text-center mx-1 px-2 py-2 my-1 w-full rounded-lg border border-white bg-transparent text-white hover:border-gray-400 hover:text-gray-400"
    >
      {props.texto}
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
              <div key={index} className="flex w-1/3 lg:w-auto">
                <CustomButton
                  texto={elemento.nombre}
                  filtro={props.filtro}
                  id={elemento.id}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
