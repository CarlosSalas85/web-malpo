export function Ctrl_ciudades() {
  return new Promise((resolve, reject) => {
    var url = process.env.NEXT_PUBLIC_API_URL + "proyectos/ciudades";
    var apiKey = process.env.SMTP_API_KEY;
    const username = process.env.SMTP_API_USERNAME;
    const password = process.env.SMTP_API_PASSWORD;
    const authHeader =
      "Basic " + Buffer.from(username + ":" + password).toString("base64");

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
        Authorization: authHeader,
      },
      next: { tags: ['ciudades']},
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
        revalidateTag("ciudades");
      })
      .catch((error) => {
        reject(error);
      });
  });
}
