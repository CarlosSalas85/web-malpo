import CardEjecutiva from "../card-proyecto/card-ejecutiva";

const Banner = () => {
  return (
    <div className="pb-6 pt-6">
      <h1 className="ml-4 text-3xl sm:text-center">Ejecutiva/s de venta</h1>

      <div className="mx-auto mt-4 flex w-11/12 flex-col sm:items-center sm:justify-center md:flex-row xl:w-5/6">
        <CardEjecutiva
          nombre="EJECUTIVA 1"
          imagen="https://www.innovamalpo.cl/disco2/web_malpo/imagenes_usuarios/6db32c8d5dba6d0da69a33e4f81962c6.jpg"
        />
        <CardEjecutiva
          nombre="EJECUTIVA 2"
          imagen="https://www.innovamalpo.cl/disco2/web_malpo/imagenes_usuarios/6db32c8d5dba6d0da69a33e4f81962c6.jpg"
        />
      </div>
    </div>
  );
};

export default Banner;
