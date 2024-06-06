import { revalidateTag } from 'next/cache';

export function Ctrl_redes_sociales() {
    return new Promise((resolve, reject) => {
        var url = `${process.env.NEXT_PUBLIC_API_URL}/rrss/estado/1`;
        const apiKey =process.env.SMTP_API_KEY;
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
                next: { tags: ['redes_sociales']},
        })
            .then(response => response.json())
            .then(data => {
                resolve(data);
                revalidateTag('redes_sociales'); // Invalida y actualiza la caché para la etiqueta 'ciudades'
                // Resuelve la Promesa con los datos obtenidos
            })
            .catch(error => {
                reject(error); // Rechaza la Promesa si hay algún error
            });
    });
}
