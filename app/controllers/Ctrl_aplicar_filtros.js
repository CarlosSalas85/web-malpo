import { revalidateTag } from 'next/cache';


export function Ctrl_aplicar_filtros(ids) {
    return new Promise((resolve, reject) => {
        const etapaId = parseInt(ids.etapaId);
        const ciudadId = parseInt(ids.ciudadId);
        const url = `${process.env.NEXT_PUBLIC_API_URL}/filtros/listar_proyectos/${ids.estadoInversion}/${ids.tipoProyectoId}/${ids.subsidioId}/${ids.dormitorioId}/${ids.banoId}/${etapaId}/${ciudadId}`;
        var apiKey = process.env.NEXT_PUBLIC_SMTP_API_KEY;
        const username = process.env.NEXT_PUBLIC_SMTP_API_USERNAME;
        const password = process.env.NEXT_PUBLIC_SMTP_API_PASSWORD;
        const authHeader = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKey,
                'Authorization': authHeader
            },   
             next: { tags: ['filtros']},
        })
        .then(response => response.json())
        .then(data => {
            // console.log('ESTOY EN CTRL_APLICAR_FILTROS');
            // console.log(data);
            resolve(data); // Resuelve la Promesa con los datos obtenidos
            revalidateTag('filtros');
        })
        .catch(error => {
            //console.log(error);
            reject(error); // Rechaza la Promesa si hay algún error
        });
});
}