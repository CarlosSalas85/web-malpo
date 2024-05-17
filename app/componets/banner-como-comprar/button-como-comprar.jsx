const Button = (props) => {
  return (
    <div className="mt-4 w-full px-4 md:mt-0 md:w-3/5 xl:w-96">
      <a href={props.url}>
        <div className="flex h-44 flex-col items-center justify-center rounded-xl border bg-grisMalpo px-2 text-white shadow-xl">
          <span className="text-center text-3xl font-normal hover:text-gray-400">
            {props.titulo}
          </span>

          <img
            className="mt-3 h-12 w-12"
            alt="icono"
            src={props.icono}
          />
        </div>
      </a>
    </div>
  );
};

export default Button;
