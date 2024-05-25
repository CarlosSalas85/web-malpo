import { revalidateTag } from 'next/cache';

export function Ctrl_ciudades() {
    return new Promise((resolve, reject) => {
        //var url = process.env.NEXT_PUBLIC_API_URL + 'proyectos/ver_ciudades';
        var url= process.env.NEXT_PUBLIC_API_URL+'proyectos/ciudades';
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
               next: { tags: ['ciudades']},
             //next: { revalidate: 40 } 
        })
            .then(response => response.json())
            .then(data => {
                // console.log('ESTAS EN EL Ctrl_ciudades');
                // console.log(data);
                resolve(data); // Resuelve la Promesa con los datos obtenidos
                revalidateTag('ciudades'); // Invalida y actualiza la caché para la etiqueta 'ciudades'
            })
            .catch(error => {
                //console.log(error);
                reject(error); // Rechaza la Promesa si hay algún error
            });
    });
}