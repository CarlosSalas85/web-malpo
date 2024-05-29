"use client";
import BannerImage from "@/app/componets/banner/banner-imagen";
import NavClientes from "@/app/componets/banner-clientes/nav-clientes";
import ButtonClientes from "@/app/componets/banner-clientes/button-clientes";

import BannerRegiones from "@/app/function/banner-regiones-cliente";

const Page = () => {
  return (
    <>
      <BannerImage
        imagenMobile="https://c.animaapp.com/Q5nw9tiI/img/hero-image.png"
        imagenDesktop="https://c.animaapp.com/Q5nw9tiI/img/hero-image.png"
      />
      <div className="flex flex-col justify-center pb-6 md:flex-row">
        <NavClientes activo="1" />
        <div className="mr-auto flex flex-col md:w-5/6">
          <div className="pb-6 pt-8">
            <div className="w-11/12">
              <h1 className="ml-4 pb-8 text-3xl md:ml-0">Clientes</h1>
              <p className="text-18px px-4 md:px-0">
                Bienvenidos a la página de clientes de Malpo. Aquí podrán
                encontrar información relevante en cuanto a la solicitud de
                inspección de post venta, los manuales de cuidado de sus
                propiedades y las preguntas frecuentes. Nuestro objetivo es
                brindarles un servicio de calidad y satisfacer sus necesidades.
                Esperamos que esta página les sea de utilidad y que nos
                contacten ante cualquier duda o consulta.
              </p>
            </div>
          </div>

          <div className="pb-3 pt-3">
            <div className="mx-auto flex w-11/12 flex-wrap justify-between md:mx-0">
              <ButtonClientes
                url="/clientes/post-venta?val=2"
                titulo="PostVenta"
                icono="https://c.animaapp.com/Q5nw9tiI/img/help-clinic@2x.png"
              />

              <ButtonClientes
                url="/clientes/preguntas-frecuentes?val=4"
                titulo="Preguntas Frecuentes Post-compra"
                icono="https://c.animaapp.com/Q5nw9tiI/img/quiz@2x.png"
              />

              <ButtonClientes
                url="/clientes/manuales-de-compra?val=3"
                titulo="Manuales de cuidado"
                icono="https://c.animaapp.com/Q5nw9tiI/img/library-books@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <BannerRegiones />
    </>
  );
};

export default Page;
