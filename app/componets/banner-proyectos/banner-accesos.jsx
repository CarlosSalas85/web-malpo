import ButtonAcceso from "../button/button-acceso";

const Banner = () => {
  return (
    <div className="pb-6 pt-6">
      <h1 className="ml-4 text-3xl sm:text-center">Accesos rápidos</h1>

      <div className="mx-auto mt-4 flex w-11/12 flex-col sm:items-center sm:justify-center md:flex-row xl:w-5/6">
        <ButtonAcceso
          nombre="Pagar reserva"
          icono="https://c.animaapp.com/K6aqUhg9/img/real-estate-agent@2x.png"
          url="https://www.malpo.cl/reserva/"
        />
        <ButtonAcceso
          nombre="Próximos proyectos"
          icono="https://c.animaapp.com/9f5vD9WN/img/home@2x.png"
          url="#"
        />
        <div className="mt-4 w-full px-4 md:mt-0 md:w-1/3">
          <a href="https://web.malpo.cl/minisitios/casa/?_gl=1*1nx85nh*_ga*MTM5ODE3MjU3OC4xNzA2ODg1OTUy*_ga_5Y7BMCKGES*MTcxNDA1NDMxNC4zNC4xLjE3MTQwNTQzMzAuMC4wLjA.">
            <div className="flex h-36 items-center justify-between rounded-xl border px-2 text-verdeMalpo shadow-xl">
              <span className="text-3xl font-normal hover:text-gray-400">
                Eficiencia energética certificada
              </span>

              <img
                className="h-12 w-12"
                alt="icono"
                src="https://c.animaapp.com/AsJa2dB8/img/energy-savings-leaf-2@2x.png"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
