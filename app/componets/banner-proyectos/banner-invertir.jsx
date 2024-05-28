import ButtonAcceso from "../button/button-acceso";

const Banner = () => {
  return (
    <div className="pb-6 pt-6">
      <h1 className="ml-4 text-3xl sm:text-center">Accesos rápidos</h1>

      <div className="mx-auto mt-4 flex w-11/12 flex-col sm:items-center sm:justify-center md:flex-row xl:w-5/6">
        <ButtonAcceso
          nombre="Beneficios de invertir"
          icono="https://c.animaapp.com/K6aqUhg9/img/real-estate-agent@2x.png"
          url="/invertir/atencion-virtual-inversionistas"
        />
        <ButtonAcceso
          nombre="Preguntas frecuentes Inversionistas"
          icono="https://c.animaapp.com/9f5vD9WN/img/home@2x.png"
          url="/clientes/preguntas-frecuentes?val=4"
        />       
      </div>
    </div>
  );
};

export default Banner;
