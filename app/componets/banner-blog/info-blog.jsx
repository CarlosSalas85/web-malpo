import ShareButtons from "@/app/componets/banner-blog/compartir-rrss";

const Page = ({ datos }) => {
  const url = "https://www.malpo.cl"; // Cambia esto por la URL de tu sitio
  const title =  datos.tituloBlog; // Cambia esto por el título que desees compartir

  return (
    <>
      <div className="mx-auto mb-3 mt-3 flex w-11/12 flex-col items-start sm:flex-row sm:items-center sm:justify-between md:w-10/12">
        <h1 className="mb-3 flex-grow text-center text-3xl sm:mb-0 sm:mr-auto sm:text-center">
          {datos.subtituloBlog}
        </h1>
        <div className="flex-shrink-0 self-fisrt md:self-end">
          <ShareButtons url={url} title={title} />
        </div>
      </div>

      <div className="mx-auto mb-3 mt-3 w-11/12 md:w-10/12">
        <p className="text-18px pt-4 sm:text-center">{datos.informacionBlog}</p>
      </div>

      <div className="flex items-center justify-center">
        <div className="mx-auto mb-3 mt-3 w-11/12 md:w-10/12">
          <img
            src={datos.imagenCabecera}
            alt="Descripción de la imagen"
            className="mx-auto block h-auto w-[600px] rounded-t-lg"
          />
        </div>
      </div>

      <div className="mx-auto mb-3 mt-3 w-11/12 md:w-10/12">
        <p className="text-18px pt-1 sm:text-center">{datos.autorBlog}</p>
        <p className="text-18px pt-1 sm:text-center">{datos.fechaBlog}</p>
        <p className="text-18px pt-1 font-semibold text-rojoMalpo hover:text-gray-400 sm:text-center">
          <a href={datos.urlBlog} target="_blank">
            Ver más
          </a>
        </p>
      </div>
    </>
  );
};

export default Page;
