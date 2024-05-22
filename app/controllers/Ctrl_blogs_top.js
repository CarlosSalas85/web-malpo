import { revalidateTag } from 'next/cache';
export function Ctrl_blogs_top() {
    return new Promise((resolve, reject) => {
        var url=process.env.NEXT_PUBLIC_API_URL+'blogs/top';
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
                //next: { revalidate: 40}, // asi puedo revalidar o hacer que el cache de next se actualice cada cierto tiempo
                //   next: { tags: ['blogs_top']},
                // next: { revalidate: true } // Revalidación bajo demanda
            })
            .then(response => response.json())
            .then(data => {
                resolve(data);
                revalidateTag('blogs_top');  // Resuelve la Promesa con los datos obtenidos
            })
            .catch(error => {
                //console.log(error);
                reject(error); // Rechaza la Promesa si hay algún error
            });
    });
}