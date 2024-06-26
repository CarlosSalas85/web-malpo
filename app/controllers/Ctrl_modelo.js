export function Ctrl_modelo(id) {
    return new Promise((resolve, reject) => {
        //var url = process.env.NEXT_PUBLIC_API_URL + 'proyectos/ver_ciudades';
        var url = process.env.NEXT_PUBLIC_API_URL + `proyectos/modelo/${id}`;
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
            
            next: { tags: [`${id}`] },
        })
            .then(response => response.json())
            .then(data => {
                resolve(data); // Resuelve la Promesa con los datos obtenidos
                // console.log(data);
                revalidateTag(`${id}`);
            })
            .catch(error => {
                //console.log(error);
                reject(error); // Rechaza la Promesa si hay algún error
            });
    });
  }
