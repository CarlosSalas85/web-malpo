'use server';

//PARA ENVIAR CORREOS DESDE VIARED,NO SE USA EL EMAIL COMO USER SINO EL CODIGO O NOMBRE DE USUARIO DE ESE EMAIL
const nodemailer = require("nodemailer");

export async function Ctrl_email_pagar_reserva() {
//   var subject= formData.subject;
//   var to=process.env.SMTP_EMAIL_CONTACTO;
//   var to2=formData.email;
//   var text='Nombre:' + formData.name + ' Email:' + formData.email; // Ajusta el formato del texto si lo necesitas
//   var text2='Nuestro equipo de Malpo se pondrá en contacto contigo';
//   var body = `<div><h1>${subject}</h1><p>Nombre: ${formData.name}</p><p>Email: ${formData.email}</p><p>phone: ${formData.phone}</p><p>Mensaje: ${formData.message}</p></div>`;
  // var body2 = `<div>Nuestro equipo de Malpo se pondrá en contacto contigo</div><div><img src="public/banners/logo-correo"/></div>`;
//   var body2 = `<div>Nuestro equipo de Malpo se pondrá en contacto contigo</div><div>`;
  try {
    const { SMTP_EMAIL_CONTACTO, SMTP_PASSWORD } = process.env;
    if (!process.env.SMTP_EMAIL_CONTACTO || !process.env.SMTP_PASSWORD) {
      throw new Error("Las credenciales de SMTP no están configuradas correctamente.");
    } 

    const transport = nodemailer.createTransport({
      // service: "gmail",
      // host:"smtp.office365.com",
      // port:465, 
    //  host:"mail.viared.cl",
      // port:587,
      // host:"smtp.office365.com",
      host:"mailserver4.viared.cl",
      port:587, 
      secure:false,
      auth: {
        user: process.env.SMTP_EMAIL_CONTACTO,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verifica la conexión con el servidor SMTP
    await transport.verify();

    // Envía el correo electrónico
    const sendResult1 = await transport.sendMail({
      from: "no-reply@malpo.cl",
      to:"leonardo211294@gmail.com",
      subject:"Datos de Pago Reserva",
      text:"Texto", // Puedes incluir el texto plano si lo deseas
      html: "Cuerpo correo", // Aquí se pasa el contenido HTML
    //   text, // Puedes incluir el texto plano si lo deseas
    //   html: body, // Aquí se pasa el contenido HTML
    });

    return true;

    // Realizar cualquier otra acción después de enviar el formulario
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    return false;
  }
}
