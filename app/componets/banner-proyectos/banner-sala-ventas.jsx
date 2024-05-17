import Button from "../../componets/button/button-sin-logo";

const CustonButton = (props) => {
  return (
    <div className="mt-4">
      <p className="text-18px ml-4 sm:text-center">{props.titulo}</p>

      <div className="mx-auto mt-4 flex flex-col items-center justify-center">
        <Button titulo={props.boton} url={props.url}/>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="pb-6 pt-6">
      <h1 className="ml-4 text-3xl sm:text-center">Sala de Ventas</h1>

      <CustonButton
        titulo={`1 NORTE 223 - horario 11,horario 2. Agendar previamente con la ejecutiva`}
        boton={`Ver Sala de Ventas en Maps`}
        url="#"
      />

      <CustonButton
        titulo={`1 norte 904 - 08:30,17:30. Agendar previamente con la ejecutiva`}
        boton={`Ver Sala de Ventas en Maps`}
        url="#"
      />
    </div>
  );
};

export default Banner;
