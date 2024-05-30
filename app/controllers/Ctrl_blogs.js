import { revalidateTag } from 'next/cache';

export function Ctrl_blogs() {
    return new Promise((resolve, reject) => {
        //var url = process.env.NEXT_PUBLIC_API_URL + 'proyectos/ver_ciudades';
        var url=process.env.NEXT_PUBLIC_API_URL+'blogs/blogs';
        var apiKey =process.env.SMTP_API_KEY;
        const username = process.env.SMTP_API_USERNAME;
        const password = process.env.SMTP_API_PASSWORD;
        const authHeader = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
         
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKey,
                'Authorization': authHeader
            },
              next: { tags: ['blogs']},
            // next: { revalidate: true } // Revalidación bajo demanda
        })
            .then(response => response.json())
            .then(data => {
                resolve(data); // Resuelve la Promesa con los datos obtenidos
                revalidateTag('blogs'); //RevalidateTag para limpiar el cache de nextjs
            })
            .catch(error => {
                //console.log(error);
                reject(error); // Rechaza la Promesa si hay algún error
            });
    });
}