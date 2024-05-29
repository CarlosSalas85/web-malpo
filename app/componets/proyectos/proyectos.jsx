'use client'
import React from 'react'
import Filter from "@/app/componets/filter/filter";
import ListProyectos from "@/app/componets/filter/list-proyectos";
import { useState } from 'react';

function Proyectos({ filtros, filtroUrl, proyectos, pagina, paginaDetalle, inversion }) {
    const [proyectosFiltrados, setProyectosFiltrados] = useState(proyectos ? proyectos : []);
    return (
        <>
            <Filter filtros={filtros} proyectos={proyectos} filtroUrl={filtroUrl} setFiltrarProyectos={setProyectosFiltrados} pagina={pagina} />
            <ListProyectos pagina={pagina} paginaDetalle={paginaDetalle} ciudad="ciudad" estadoInversion={inversion} proyectos={proyectosFiltrados} />
        </>
    )
}

export default Proyectos