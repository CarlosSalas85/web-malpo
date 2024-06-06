import CardEjecutiva from "../card-proyecto/card-ejecutiva";


const Banner = (props) => {
  const ejecutivas = props.usuarios;
  // const ejecutivasConImagen = ejecutivas.filter(ejecutiva => ejecutiva.usuarioImagen != null);
  return (
    <>
{/*       {ejecutivasConImagen.length > 0 && ( */}
        <div className="pb-6 pt-6">
          <h1 className="ml-4 text-3xl sm:text-center">Ejecutiva/s de venta</h1>
          <div className="mx-auto mt-4 flex w-11/12 flex-col sm:items-center sm:justify-center md:flex-row xl:w-5/6">
            {/*Se imprimen todas las ejecutivas cuyas imagenes sean distintas de null */}
            {ejecutivas.map((ejecutiva, index) => {
  const { usuarioNombre, imagenUsuario, telefonoUsuario, usuarioEmail } = ejecutiva;
  // if (!usuarioNombre || !imagenUsuario || !telefonoUsuario || !usuarioEmail) {
  //   return null; // Skip rendering this CardEjecutiva
  // }
  return (
    <CardEjecutiva
      key={index}
      nombre={usuarioNombre}
      imagen={imagenUsuario}
      telefono={telefonoUsuario}
      email={usuarioEmail}
    />
  );
})}
          </div>
        </div>
 {/*      )} */}
    </>
  );
};

export default Banner;

