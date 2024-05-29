import CardEjecutiva from "../card-proyecto/card-ejecutiva";

const Banner = (props) => {
  const ejecutivas=props.usuarios;
  return (
    <div className="pb-6 pt-6">
      <h1 className="ml-4 text-3xl sm:text-center">Ejecutiva/s de venta</h1>

      <div className="mx-auto mt-4 flex w-11/12 flex-col sm:items-center sm:justify-center md:flex-row xl:w-5/6">
      {ejecutivas.map((ejecutiva, index) => (
        <CardEjecutiva
          nombre={ejecutiva.usuarioNombre}
          imagen={ejecutiva.imagenUsuario}
        />
      ))}
      </div>
    </div>
  );
};

export default Banner;
