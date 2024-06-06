export function Ctrl_atributos_importantes() {
    return new Promise((resolve, reject) => {
        //var url = process.env.NEXT_PUBLIC_API_URL + 'proyectos/ver_ciudades';
        // var url= process.env.NEXT_PUBLIC_API_URL_CRM+'crm/listar_contactos';
        var url="https://www.innovamalpo.cl/api_master/api_webmalpo/crm/listar_atributo";
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
        })
            .then(response => response.json())
            .then(data => {
                resolve(data); // Resuelve la Promesa con los datos obtenidos
                // No necesitas invalidar la caché o realizar otras acciones aquí
            })
            .catch(error => {
                reject(error); // Rechaza la Promesa si hay algún error
            });
    });
}
