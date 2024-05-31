import { revalidateTag } from "next/cache";

export function Ctrl_blog(id) {
  return new Promise((resolve, reject) => {
    var url = process.env.NEXT_PUBLIC_API_URL + `blogs/blog/${id}`;
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
      next: { tags: [`${id}`] },
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
        revalidateTag(`${id}`);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
