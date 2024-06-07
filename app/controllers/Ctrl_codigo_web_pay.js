export function Ctrl_codigo_web_pay(codigoWebpay) {
    return new Promise((resolve, reject) => {
    const apiKey = process.env.NEXT_PUBLIC_SMTP_API_KEY;
    const username = process.env.NEXT_PUBLIC_SMTP_API_USERNAME;
    // console.log("EL VALOR DE username es:",username,formData);
    const password = process.env.NEXT_PUBLIC_SMTP_API_PASSWORD;
    const url = process.env.NEXT_PUBLIC_API_URL + `proyectos/webpay/${codigoWebpay}`;
    const authHeader = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
    // const url = `http://localhost/api_master/api_crm/crm/insertar_cotizacion`;
    console.log("Estoy en Ctrl_cod_web_pay:",url,codigoWebpay);
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': apiKey,
            'Authorization': authHeader
        },
        cache: 'no-store' ,
    })
      .then(response => response.json())
      .then(data => {
          resolve(data); 
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al enviar el formulario');
            }
            return response.json();
        })
    .catch(error => {
        reject(error); // Rechaza la Promesa si hay algún error
    });
});
}



  