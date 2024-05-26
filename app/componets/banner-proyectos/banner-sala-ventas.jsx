import Button from "../../componets/button/button-sin-logo";

const CustonButton = (props) => {
  return (
    <div className="mt-4">
      <p className="text-18px ml-4 sm:text-center">{props.titulo}</p>

      <div className="mx-auto mt-4 flex flex-col items-center justify-center">
        <Button titulo={props.boton} url={props.url} target="1"/>
      </div>
    </div>
  );
};

const Banner = (props) => {
  console.log("La informacion de las salas son:", props);
  const salas = props.salas;

  const obtenerTitulo = (sala) => {
    let titulo = `${sala.direccionSala} - ${sala.horario1}`;
    if (sala.horario2) {
      titulo += `, ${sala.horario2}`;
    }
    if (sala.horario3) {
      titulo += `, ${sala.horario3}`;
    }
    titulo += ". Agendar previamente con la ejecutiva";
    return titulo;
  };


  return (
    <div className="pb-6 pt-6">
      <h1 className="ml-4 text-3xl sm:text-center">Sala de Ventas</h1>
      {salas.map((sala, index) => (
        <CustonButton
          key={index} // Asegúrate de proporcionar una clave única para cada elemento mapeado
          titulo={obtenerTitulo(sala)}
          boton="Ver Sala de Ventas en Maps"
          url={sala.urlSala}
        />
      ))}
    </div>
  );
};

export default Banner;
