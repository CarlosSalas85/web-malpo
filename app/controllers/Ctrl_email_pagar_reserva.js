'use server';
//PARA ENVIAR CORREOS DESDE VIARED, NO SE USA EL EMAIL COMO USER SINO EL CODIGO O NOMBRE DE USUARIO DE ESE EMAIL
const nodemailer = require("nodemailer");
const path = require("path");
// import {LogoRojoMalpoCorreo} from "../../public/logos/logoCorreoPagarReserva.png";



export async function Ctrl_email_pagar_reserva(formData) {
   var subject = "Datos de pago Reserva Cliente";
   var text = 'Nombre:' + formData.name + ' Email:' + formData.email; // Ajusta el formato del texto si lo necesitas
   const body = `
  <div style="font-family: Arial, sans-serif; text-align: center;">
    <div style="display: inline-block; border: 2px solid black; padding: 10px; margin: 10px auto;">
      <div>
        <img src="cid:logoCorreoPagarReserva" alt="Logo" style="max-width: 100%; margin-bottom: 20px;">
      </div>
      <div>
        <p style="font-weight: bold; color: black;">
          Un cliente ha completado el formulario de pago de reserva web, sus datos son los siguientes:
        </p>
        <table style="margin: 0 auto; text-align: left; border-collapse: collapse;">
          <tr>
            <td style="font-weight: bold; color: #97132A; padding-right: 100px;">Rut del Cliente</td>
            <td style="font-weight: bold; color: #97132A;">: ${formData.rut_cliente}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #97132A; padding-right: 100px;">Ciudad</td>
            <td style="font-weight: bold; color: #97132A;">: ${formData.ciudad}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #97132A; padding-right: 100px;">Teléfono</td>
            <td style="font-weight: bold; color: #97132A;">: ${formData.telefono}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #97132A; padding-right: 100px;">Proyecto</td>
            <td style="font-weight: bold; color: #97132A;">: ${formData.nombreProyecto}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #97132A; padding-right: 100px;">Ejecutiva</td>
            <td style="font-weight: bold; color: #97132A;">: ${formData.nombreEjecutiva}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #97132A; padding-right: 100px;">Manzana o Lote</td>
            <td style="font-weight: bold; color: #97132A;">: ${formData.lote}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
`;


 

  try {
    const { SMTP_EMAIL_CONTACTO, SMTP_PASSWORD } = process.env;
    if (!SMTP_EMAIL_CONTACTO || !SMTP_PASSWORD) {
      throw new Error("Las credenciales de SMTP no están configuradas correctamente.");
    } 

    const transport = nodemailer.createTransport({
      host: "mailserver4.viared.cl",
      port: 587, 
      secure: false,
      auth: {
        user: SMTP_EMAIL_CONTACTO,
        pass: SMTP_PASSWORD,
      },
    });

    // Verifica la conexión con el servidor SMTP
    await transport.verify();

    // Envía el correo electrónico
    const sendResult1 = await transport.sendMail({
      from: "no-reply@malpo.cl",
      to: "lbascunan@malpo.cl",
      subject,
      text, // Puedes incluir el texto plano si lo deseas
      html: body, // Aquí se pasa el contenido HTML
      attachments: [{
        filename: 'logoCorreoPagarReserva.png',
        path: path.join(process.cwd(), 'public/logos/logoCorreoPagarReserva.png'),
        cid: 'logoCorreoPagarReserva' // mismo cid que en el HTML img src
      }]
    });

    return true;

  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    return false;
  }
}
