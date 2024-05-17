import ButtonCustom from "./button-sin-logo";

const Button = (props) => {
  return (
    <div className="mt-4">
      <p className="text-18px ml-4 sm:text-center">{props.titulo}</p>

      <div className="mx-auto mt-4 flex flex-col items-center justify-center">
        <ButtonCustom titulo={props.boton} />
      </div>
    </div>
  );
};

export default Button;
