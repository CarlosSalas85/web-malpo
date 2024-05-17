import Button from "../../componets/button/button-card";


const Banner = () => {
  return (
    <div className="pb-6 pt-6">
      <h1 className="ml-4 text-3xl sm:text-center">Ubicación</h1>

      <Button
        titulo={`32 Sur 1 y 1/2 Poniente. Agendar previamente con la ejecutiva`}
        boton={`Ver Ubicación Proyecto en Maps`}
        url="#"
      />
    </div>
  );
};

export default Banner;
