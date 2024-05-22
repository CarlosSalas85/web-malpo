export function Ctrl_regiones() {
    return new Promise((resolve, reject) => {
        //var url = process.env.NEXT_PUBLIC_API_URL + 'proyectos/ver_ciudades';
        var url=`${process.env.NEXT_PUBLIC_API_URL}proyectos/regiones`;
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
            cache: 'no-store' ,
            // next: { revalidate: true } // Revalidación bajo demanda
        })
            .then(response => response.json())
            .then(data => {
                resolve(data); // Resuelve la Promesa con los datos obtenidos
                revalidateTag('regiones');
            })
            .catch(error => {
                //console.log(error);
                reject(error); // Rechaza la Promesa si hay algún error
            });
    });
}