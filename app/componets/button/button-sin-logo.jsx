const Button = (props) => {
  return (
    <a
      href={props.url}  target={props.target === "1" ? "_blank" : "_self"}
      className="text-l my-2 flex w-[270px] items-center justify-center rounded border border-rojoMalpo py-5 text-rojoMalpo hover:text-gray-400"
    >
      <span className="flex items-center">
        <span>{props.titulo}</span>
      </span>
    </a>
  );
};

export default Button;
