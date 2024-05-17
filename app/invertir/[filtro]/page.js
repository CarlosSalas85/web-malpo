import Filter from "@/app/componets/filter/filter";
import ListProyectos from "@/app/componets/filter/list-proyectos";
import BannerInvertir from "@/app/componets/banner-proyectos/banner-invertir";

const Page = () => {
  return (
    <>
      <div className="md:pb-6 md:pt-28">
        <div className="mb-16 ml-4">
          <h1 className="mb-2 text-3xl sm:text-center">
            Proyectos de Inversión
          </h1>
          <p className="text-sm sm:text-center">
            Descubre las propiedades disponibles y elige la que más te convenga
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sección 1/3 */}
          <Filter />
          {/* Sección 2/3 */}
          <ListProyectos pagina="invertir" ciudad="ciudad"/>
        </div>

        <div className="mx-auto mb-4 mt-10 w-11/12 md:w-10/12">
          <h1 className="mb-2 text-3xl sm:text-center">
            Proyectos de Inversión en MALPO
          </h1>
          <p className="sm:text-center">
            En Malpo tenemos una oferta de proyectos inmobiliarios de calidad,
            pensados para brindar las mejores oportunidades de inversión.
            Contamos con proyectos de diferentes características, ubicaciones y
            rentabilidades, adaptados a sus objetivos y expectativas. Ya sea que
            quieran diversificar su portafolio, generar ingresos pasivos, o
            aprovechar el potencial de crecimiento del mercado inmobiliario,
            tenemos lo que buscan. Consulten nuestro catálogo y conozcan todo lo
            que podemos ofrecerles.
          </p>
        </div>
        <BannerInvertir />
      </div>
    </>
  );
};

export default Page;
