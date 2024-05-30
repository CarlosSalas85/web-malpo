const Button = (props) => {
  const blank = parseInt(props.blank);
  return (
    <a
      href={props.url}
      target={blank === "1" ? "_blank" : "_self"}
      className="text-l my-2 flex w-[270px] items-center justify-center rounded border border-rojoMalpo py-5 text-rojoMalpo hover:text-gray-400"
    ><span className="flex items-center">
        <span>{props.titulo}</span>
        <img className="ml-2 h-4 w-4" alt={`paginacion`} src={props.imagen} />
      </span>
    </a>
  );
};

export default Button;
