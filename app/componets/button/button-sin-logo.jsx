const Button = (props) => {
  return (
    <a
      href={props.url}
      className="text-l my-2 flex w-[270px] items-center justify-center rounded border border-rojoMalpo py-5 text-rojoMalpo hover:text-gray-400"
    >
      <span className="flex items-center">
        <span>{props.titulo}</span>
      </span>
    </a>
  );
};

export default Button;
