'use server';
const nodemailer = require("nodemailer");

export async function Ctrl_inversionista(formData) {
  // console.log("LOS DATOS QUE LLEGAN A LA FUNCION DE ENVIAR CORREO SON:", formData,formData.email);
  // console.log("EMAIL:", formData.email); 
  var to=formData.email;
  // console.log("EL VALOR DE TO",to);
  var subject="Inversionista";
  var text='Nombre:' + formData.name + ' Email:' + formData.email; // Ajusta el formato del texto si lo necesitas
  var text2='Nuestro equipo de Malpo se pondrá en contacto contigo';
  var body = `<div><h1>${subject}</h1><p>Nombre: ${formData.name}</p><p>Email: ${formData.email}</p><p>phone: ${formData.phone}</p><p>Proyecto: ${formData.project}</p><p>Confirmación hora mediante llamada telefonica: ${formData.date}</p></div>`;
  var body2 = `<div>Nuestro equipo de Malpo se pondrá en contacto contigo</div><div>`;
  // console.log(to,subject,body,process.env.SMTP_EMAIL_INVERSIONISTA,process.env.NEXT_PUBLIC_API_URL);
  try {
    const { SMTP_EMAIL_INVERSIONISTA, SMTP_PASSWORD } = process.env;
    if (!process.env.SMTP_EMAIL_INVERSIONISTA || !process.env.SMTP_PASSWORD) {
      throw new Error("Las credenciales de SMTP no están configuradas correctamente.");
    } 

    const transport = nodemailer.createTransport({
      // service: "gmail",
      // host:"smtp.office365.com",
      // port:465, 
    //  host:"smtp.office365.com",
      // port:587,
      // host:"smtp.office365.com",
      host:"mailserver4.viared.cl",
      port:587, 
      secure:false,
      auth: {
        user: process.env.SMTP_EMAIL_INVERSIONISTA,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verifica la conexión con el servidor SMTP
    await transport.verify();

    // Envía el correo electrónico
    const sendResult = await transport.sendMail({
      from: "inversionistas@malpo.cl",
      to:"inversionistas@malpo.cl",
      subject,
      text, // Puedes incluir el texto plano si lo deseas
      html: body, // Aquí se pasa el contenido HTML
    });
    console.log("Correo electrónico enviado exitosamente:", sendResult);
    
    console.log('Formulario enviado con éxito');

    const sendResult2 = await transport.sendMail({
      from: "inversionistas@malpo.cl",
      to,
      subject,
      text2, // Puedes incluir el texto plano si lo deseas
      html: body2, // Aquí se pasa el contenido HTML
    });

    console.log("Correo electrónico enviado exitosamente:", sendResult2);
    
    console.log('Formulario enviado con éxito');
    return { success: true };  // Devuelve un objeto indicando éxito
    // Realizar cualquier otra acción después de enviar el formulario
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    return { success: false, message: error.message };  // Devuelve un objeto indicando fallo
  }
}
