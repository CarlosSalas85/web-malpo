import "./banner-proyectos.css";

const CustomButton = (props) => {
  let result;
  switch (props.filtro) {
    case "ciudad":
      result = `0-${props.id}`;
      break;
    case "region":
      result = `${props.id}-0`;
      break;
    default:
      result = "";
  }
  return (
    <a
      href={`/proyectos/${result}`}
      className="mb-2 mr-2 w-full rounded-lg border border-white bg-transparent px-4 py-2 text-white hover:border-gray-400 hover:text-gray-400"
    >
      {props.texto}
    </a>
  );
};

const Banner = (props) => {
  return (
    <div className="color-fondo pb-6 pt-6 text-white">
      <div className="mb-8 ml-4 sm:text-center">
        <h1 className="text-3xl">{props.texto}</h1>
      </div>
      <div className="ml-4 mr-4 sm:flex sm:justify-center">
        <div className="flex flex-wrap sm:justify-center">
          {props.datos &&
            props.datos.map((elemento, index) => (
              <div
                key={index}
                className="flex w-1/3 sm:w-1/6 sm:justify-center lg:w-auto"
              >
                <CustomButton
                  texto={elemento.nombre}
                  filtro={props.filtro}
                  id={elemento.id}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;




// import "./banner-proyectos.css";

// const CustomButton = ({ texto, filtro }) => {
//   console.log("nombre, filtro", texto, filtro);
//   return (
//     <a
//       href={`/proyectos/${filtro}`}
//       className="mb-2 mr-2 w-full rounded-lg border border-white bg-transparent px-4 py-2 text-white hover:border-gray-400 hover:text-gray-400"
//     >
//       {texto}
//     </a>
//   );
// };

// const Banner = (props) => {
//   console.log("titulo", props.titulo);

//   // Asegurarse de que props.titulo es un array antes de mapearlo
//   if (!Array.isArray(props.titulo)) {
//     console.error("props.titulo no es un array:", props.titulo);
//     return null;
//   }

//   // Extraer los nombres de los elementos en props.titulo
//   const buttons = props.titulo.map(elemento => elemento.nombre);

//   return (
//     <div className="color-fondo pb-6 pt-6 text-white">
//       <div className="mb-8 ml-4 sm:text-center">
//         <h1 className="text-3xl">{props.texto}</h1>
//       </div>
//       <div className="ml-4 mr-4 sm:flex sm:justify-center">
//         <div className="flex flex-wrap sm:justify-center">
//           {buttons.map((nombre, index) => (
//             <div
//               key={index}
//               className="flex w-1/3 sm:w-1/6 sm:justify-center lg:w-auto"
//             >
//               <CustomButton texto={nombre} filtro={props.filtro} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
