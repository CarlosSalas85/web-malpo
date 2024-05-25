const Button = (props) => {
  // Función de manejo de clics
  const handleClick = () => {
    console.log("Botón cotizar clickeado");
    // Aquí puedes añadir la lógica que necesites ejecutar al hacer clic
  };
  
  const isCotizarButton = props.titulo === "Cotizar" || props.titulo === "Cotizar Proyecto";
  
  return (
    <button className="fondo-malpo-rojo text-l my-2 w-[270px] rounded py-5 text-white hover:text-gray-400" onClick={isCotizarButton ? handleClick : undefined} >
      {props.titulo}
    </button>
  );
};

export default Button;
