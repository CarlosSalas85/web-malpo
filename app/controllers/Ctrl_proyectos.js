// import { revalidateTag } from 'next/cache';

export async function Ctrl_proyectos(idProyecto) {
    return new Promise((resolve, reject) => {
        var url = `${process.env.NEXT_PUBLIC_API_URL}proyectos/proyecto/${idProyecto}`;
        var apiKey =process.env.NEXT_PUBLIC_SMTP_API_KEY;
        const username = process.env.NEXT_PUBLIC_SMTP_API_USERNAME;
        const password = process.env.NEXT_PUBLIC_SMTP_API_PASSWORD;
      const authHeader = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
      fetch(url, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'X-API-KEY': apiKey,
              'Authorization': authHeader
          }
        })
          .then(response => response.json())
          .then(data => {
              resolve(data); // Resuelve la Promesa con los datos obtenidos
            //   revalidateTag(`proyectos/${idProyecto}`);
              //  console.log(url,data);
          })
          .catch(error => {
              //console.log(error);
              reject(error); // Rechaza la Promesa si hay algún error
          });
  });
}