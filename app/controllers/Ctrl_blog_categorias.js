export function Ctrl_blog_categorias() {
  return new Promise((resolve, reject) => {
    var url = process.env.NEXT_PUBLIC_API_URL + "blogs/categorias";
    var apiKey = process.env.NEXT_PUBLIC_SMTP_API_KEY;
    const username = process.env.NEXT_PUBLIC_SMTP_API_USERNAME;
    const password = process.env.NEXT_PUBLIC_SMTP_API_PASSWORD;
    const authHeader =
      "Basic " + Buffer.from(username + ":" + password).toString("base64");

    fetch(url, {
      method: "GET",                                                    
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
        Authorization: authHeader,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
        revalidateTag("categoria");
      })
      .catch((error) => {
        reject(error);
      });
  });
}
