import Button from "../../componets/button/button-card";


const Banner = (props) => {
  const proyecto=props.proyecto;
  return (
    <>
    {proyecto && (
    <div className="pb-6 pt-6">
      <h1 className="ml-4 text-3xl sm:text-center">Ubicación</h1>
      <Button
        titulo={`${proyecto.direccionProyecto}.Agendar previamente con la ejecutiva`}
        boton={`Ver Ubicación Proyecto en Maps`}
        url={`${proyecto.urlLinkProyecto}`}
        target="1"
      />
    </div>
   )}
   </>
  );
};

export default Banner;
