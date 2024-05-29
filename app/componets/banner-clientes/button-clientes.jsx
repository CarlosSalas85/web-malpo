const Button = (props) => {
  const blank = parseInt(props.blank);
  return (
    <div className="flex w-full pb-6 md:w-2/3 xl:w-1/2">
      <div className="w-full xl:w-5/6">
        <a href={props.url} target={blank === 1 ? "_blank" : "_self"}>
          <div className="fondo-malpo-gris flex h-40 w-full items-center justify-center rounded-lg pb-6 pt-6 text-white sm:pb-4 sm:pt-4">
            {/* Contenido de la tarjeta */}
            <div className="flex w-2/3 justify-start">
              <span className="ml-6 text-3xl font-normal hover:text-gray-400 md:ml-4">
                {props.titulo}
              </span>
            </div>
            {/* Icono */}
            <div className="flex w-1/3 justify-end">
              <img
                className="mr-10 h-12 w-12 md:ml-4 md:mr-4"
                alt="icono"
                src={props.icono}
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Button;
