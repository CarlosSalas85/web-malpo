const Button = (props) => {
  return (
    <div className="mt-4 w-full px-4 md:mt-0 md:w-1/3">
      <a href={props.url} target={props.target === "1" ? "_blank" : "_self"}>
        <div className="flex h-36 items-center justify-between rounded-xl border bg-grisMalpo px-2 text-white shadow-xl">
          <span className="text-3xl font-normal hover:text-gray-400">
            {props.nombre}
          </span>

          <img className="h-12 w-12" alt="icono" src={props.icono} />
        </div>
      </a>
    </div>
  );
};

export default Button;
