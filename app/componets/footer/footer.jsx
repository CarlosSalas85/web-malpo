import "./styleFooter.css";

const Footer = () => {
  return (
    <footer className="bg-grisMalpo px-4 py-8 text-white">
      <div className="flex flex-col md:flex-row md:justify-center">
        <div className="text-left md:mr-8 md:text-center">
          {" "}
          {/* Texto centrado en md */}
          <img
            src="https://c.animaapp.com/g9H7zkhE/img/logo-malpo---blanco.svg"
            className="logo-malpo-blanco mx-0 sm:mx-auto sm:mb-6" // Centrado horizontalmente en sm, alineado a la izquierda en otros tamaños
            alt="Logo malpo blanco"
          />
          <div className="mt-10 flex flex-col items-start sm:flex-row sm:justify-between">
            <div className="text-left sm:mb-0 sm:mr-4 sm:pr-12">
              <p className="mb-4">
                <a href="#" className="hover:text-gray-400">
                  Nosotros
                </a>
              </p>
              <p className="mb-4">
                <a href="#" className="hover:text-gray-400">
                  Contacto
                </a>
              </p>
              <p className="mb-4">
                <a href="#" className="hover:text-gray-400">
                  Trabaja en Malpo
                </a>
              </p>
              <p className="mb-0">
                <a href="#" className="hover:text-gray-400">
                  Canal de denuncias
                </a>
              </p>
            </div>
            <div className="mt-10 flex items-center text-left sm:mt-0 sm:pl-12">
              <a href="#" className="mr-2 hover:text-gray-400">
                <img
                  className="img-rrss mr-2"
                  alt={`instagram`}
                  src={`https://c.animaapp.com/kJfIIeGG/img/---icon--instagram-fill-icon-@2x.png`}
                />
              </a>
              <a href="#" className="mr-2 hover:text-gray-400">
                <img
                  className="img-rrss mr-2"
                  alt={`facebook`}
                  src={`https://c.animaapp.com/kJfIIeGG/img/---icon--social-facebook-icon-@2x.png`}
                />
              </a>
              <a href="#" className="mr-2 hover:text-gray-400">
                <img
                  className="img-rrss"
                  alt={`youtube`}
                  src={`https://c.animaapp.com/kJfIIeGG/img/---icon--youtube-@2x.png`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:text-center pt-10 text-xs">
        @ 2024 Malpo.- Las imágenes y textos contenidos en este sitio web son
        meramente ilustrativos y referenciales, por lo que podrían no
        representar la realidad. La empresa se reserva la facultad de efectuar
        cambios en los proyectos. Los precios están sujetos a disponibilidad de
        los productos. Exija su cotización en las salas y puntos de ventas.
      </div>
    </footer>
  );
};

export default Footer;
