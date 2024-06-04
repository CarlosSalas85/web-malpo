export function Ctrl_cotizador(formData) {
    const apiKey = process.env.NEXT_PUBLIC_SMTP_API_KEY;
    const username = process.env.NEXT_PUBLIC_SMTP_API_USERNAME;
    // console.log("EL VALOR DE username es:",username,formData);
    const password = process.env.NEXT_PUBLIC_SMTP_API_PASSWORD;
    const url = process.env.NEXT_PUBLIC_API_URL + `crm/cotizador`;
    const authHeader = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
    // const url = `http://localhost/api_master/api_crm/crm/insertar_cotizacion`;
    // console.log("Estoy en Ctrl_cotizador:", url,formData);
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': apiKey,
            'Authorization': authHeader
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al enviar el formulario');
            }
            return response.json();
        })
        .then(data => {
            console.log('Formulario enviado con éxito:', data);
            // return  /* message: */ 'Formulario de de denuncias enviado con éxito' ;
        })
        .catch(error => {
            // console.error('Error al enviar el formulario:', /* error.message */);
            throw new Error('Error al enviar el formulario');
        });
}



  