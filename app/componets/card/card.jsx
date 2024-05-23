import CustomCards from "../card-proyecto/card-proyecto";
import "./card.css";

const Card = (props) => {
  return (
    <div className="pb-6 pt-6">
      <div className="mb-4 ml-4">
        <h1 className="mb-2 text-3xl sm:text-center">{props.texto}</h1>

        <div className="flex justify-start overflow-x-auto overflow-y-hidden xl:justify-center">
          <CustomCards />
          <div className="card-largo-ver-todo relative mr-4 flex flex-shrink-0 ">
            <a href="#">
              <div className="absolute inset-0 mb-1 mt-1 flex items-center justify-center shadow-md">
                <div className="text-center">
                  <h2 className="text-xl text-gray-700 hover:text-gray-400">
                    Ver Todo
                  </h2>
                  <img
                    className="img-logo-ver-todo mx-auto"
                    src="https://c.animaapp.com/q4YMxaTP/img/expand-circle-down@2x.png"
                    alt="Icono"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
