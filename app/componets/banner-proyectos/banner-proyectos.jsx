'use client';
import React, { useState, useEffect } from "react";
import { Ctrl_ciudades } from "@/app/controllers/Ctrl_ciudades";
import { Ctrl_regiones } from "@/app/controllers/Ctrl_regiones";
import "./banner-proyectos.css";

const CustomButton = ({ texto, filtro }) => {
  console.log("nombre, filtro", texto, filtro);
  return (
    <a
      href={`/proyectos/${filtro}`}
      className="mb-2 mr-2 w-full rounded-lg border border-white bg-transparent px-4 py-2 text-white hover:border-gray-400 hover:text-gray-400"
    >
      {texto}
    </a>
  );
};



const Banner = ({ texto, filtro }) => {
  console.log("texto:", texto);
  console.log("filtro:", filtro);

  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let result;
        switch (filtro) {
          case "ciudad":
            result = await Ctrl_ciudades();
            break;
          case "regiones":
            result = await Ctrl_regiones();
            break;
          default:
            throw new Error("Filtro no reconocido");
        }
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="color-fondo pb-6 pt-6 text-white">
        <div className="mb-8 ml-4 sm:text-center">
          <h1 className="text-3xl">{texto}</h1>
        </div>
        <div className="ml-4 mr-4 sm:flex sm:justify-center">
          <div className="flex flex-wrap sm:justify-center">

            {data && data.datos.map((elemento, index) => (
              <div
                key={index}
                className="flex w-1/3 sm:w-1/6 sm:justify-center lg:w-auto"
              >
                <CustomButton
                  texto={elemento.nombre}
                  filtro={filtro}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
  </>
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
