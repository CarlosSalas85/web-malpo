import Button from "../../componets/button/button";

const Banner = () => {
  return (
    <div className="mb-4 mt-4 flex flex-col justify-center md:flex-row md:px-0">
      {/* Mapa de Google */}
      <div className="flex w-full justify-center px-4 md:w-2/5 md:justify-end">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.6377725850143!2d-71.66930902483746!3d-35.439002102089326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665c6a9d1a535d9%3A0x666c27b07da58d!2s1%20Ote.%20145%2C%20Talca%2C%20Maule!5e0!3m2!1ses-419!2scl!4v1715271241858!5m2!1ses-419!2scl"
          className="h-[350px] w-[500px] self-end border border-gray-300 shadow-md dark:border-gray-700 dark:bg-gray-800"
          title="Google Map"
        ></iframe>
      </div>
      {/* Título */}
      <div className="w-full pl-4 md:w-2/5 md:pl-2 mt-4 md:mt-0">
        <h1 className="text-3xl">Doña Ignacia</h1>
        <div className="text-18px flex">
          <p className="mr-2 font-semibold">Dirección:</p>
          <p>32 Sur 1 y 1/2 Poniente</p>
        </div>
        <div className="flex justify-center pt-6 sm:justify-start">
          <Button
            titulo={`Ver Ubicación Proyecto en Maps`}
            imagen={`https://c.animaapp.com/sQwZVHMV/img/vector.svg`}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
