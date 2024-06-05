import {jsPDF} from 'jspdf';


const generatePDF = (fechaConsulta,nombreProyecto,nombre,rut,telefono,email,modeloNombre,montoSubsidio,porcentajeCredito,montoCreditoHipotecario,ahorroMinimo,pieReserva,tasaMensual,plazoCredito,cotizacionCLP,fechaTasa) => {
    // console.log("datos Tabla", montoSubsidio,porcentajeCredito,0,ahorroMinimo,pieReserva);

    function formatoNumero(elemento) {
        return new Intl.NumberFormat("es-CL").format(elemento);
      }


    const formatNumberWithCommas = (number) => {
        // Verifica si el número es un número finito
        if (!Number.isFinite(number)) {
            return ''; // Retorna una cadena vacía si el número no es válido
        }
    
        // Convierte el número a una cadena y reemplaza los puntos con comas
        const numberWithCommas = number.toLocaleString('es-ES', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        
        // Verifica si los decimales son 2 ceros
        if (numberWithCommas.endsWith(',00')) {
            // Si los decimales son ceros, convierte el número a entero
            return parseInt(number).toLocaleString('es-ES');
        } else {
            // Agrega puntos como separadores de miles
            const parts = numberWithCommas.split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            return parts.join('.');
        }
    };

    const doc = new jsPDF();
    const originalWidthImage = 52.5; // Reemplaza esto con el ancho original de tu imagen
    const originalHeightImage = 8.1964; // Reemplaza esto con el alto original de tu imagen
    // Luego, dentro de la función generatePDF, después de crear el objeto jsPDF (doc), agrega la imagen
    doc.addImage('/logos/logoRojoMalpo.png', 'PNG', 4, 4, originalWidthImage, originalHeightImage);

    // Obtener el ancho completo de la página
    const pageWidth = doc.internal.pageSize.getWidth();

    // Agregar el rectángulo rojo malpo que ocupa todo el ancho de la página debajo de la fecha
    const redMalpoColor = '#97132A'; // Color rojo-malpo
    doc.setFillColor(redMalpoColor);
    doc.rect(0,15, pageWidth, 30, 'F'); // Rectángulo que ocupa toda la parte superior de la página

    // Agregar el texto del nombre del proyecto en el rectángulo rojo malpo
    doc.setTextColor(255); // Texto blanco
    doc.setFontSize(40);
    doc.text(nombreProyecto.toString(), pageWidth / 2,35, null, null, 'center');
    // doc.text(formattedDate, pageWidth - dateWidth - 10, 10);
    // Agregar la fecha en letras negras sobre el rectángulo del título
    doc.setTextColor(0); // Texto negro
    doc.setFontSize(10);
    const formattedDate =fechaConsulta.toString();
    const dateWidth = doc.getStringUnitWidth(formattedDate) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    doc.text(formattedDate, pageWidth - dateWidth - 10, 14);

    // Agregar espacio debajo del rectángulo
    doc.text('', 10, 65);

    // Agregar el texto "Cotización" con el color de rojo malpo
    doc.setTextColor(redMalpoColor);
    doc.setFontSize(16);
    doc.text('Cotización', 10, 70);

    // Agregar 5 líneas de texto
    const lines = ['Nombre:'+nombre, 'Rut:'+rut, 'Teléfono:'+telefono, 'Email:'+email, ''];
    doc.setTextColor(0); // Texto negro
    doc.setFontSize(12);
    lines.forEach((line, index) => {
        doc.text(line, 10, 80 + index * 10);
    });

    // Agregar una línea de color rojo malpo
    doc.setLineWidth(0.5);
    doc.setDrawColor(redMalpoColor);
    doc.line(10, 140, pageWidth - 10, 140);

    // Agregar espacio
    doc.text('', 10, 145);

    // Agregar el texto "Modelo Malpo"
    doc.setTextColor(redMalpoColor);
    doc.setFontSize(30);
    doc.text(modeloNombre,  pageWidth / 2,160, null, null, 'center');

    // Agregar texto "Financiamiento" a la izquierda y "Valor Propiedad" a la derecha
    doc.setTextColor(redMalpoColor); // Texto negro
    doc.setFontSize(12);
    const textWidth = doc.getStringUnitWidth('Financiamiento') * doc.internal.getFontSize() / doc.internal.scaleFactor;
    doc.text('Financiamiento', 10, 170);
    doc.text('Valor Propiedad: '+ formatoNumero(formatNumberWithCommas(parseFloat(montoCreditoHipotecario)+parseFloat(pieReserva))) + ' UF', pageWidth - textWidth - 34, 170);

    // Agregar una fila con los campos en una tabla
    const fields = ['Monto Subsidio', '% Hipotecario', 'Monto Hipotecario', 'Ahorro Mínimo', 'Pie o Reserva'];
    const fieldWidth = (pageWidth - 20) / fields.length;
    const rowY = 180;
    const rowHeight = 10;
    doc.setFillColor(redMalpoColor);
    doc.rect(10, rowY, pageWidth - 20, rowHeight, 'F'); // Rectángulo para los nombres de los campos
    doc.setTextColor(0); // Texto negro
    doc.setFontSize(10);

    // Datos ficticios para llenar debajo de los campos
    const montoCreditoHipotecarioFormatted = formatNumberWithCommas(parseInt(montoCreditoHipotecario));
    const pieReservaFormatted = formatNumberWithCommas((parseFloat(pieReserva)));    
    const fakeData = [montoSubsidio.toString() +' UF',porcentajeCredito.toString()+'%',formatoNumero(montoCreditoHipotecarioFormatted)+' UF',ahorroMinimo.toString() + ' UF',pieReservaFormatted+' UF'];
    fakeData.forEach((data, index) => {
        doc.text(data, 10 + fieldWidth * index+15, rowY + 5 + rowHeight + 5,'center');
    });


    doc.setTextColor(255); // Texto blanco

    fields.forEach((field, index) => {
        // Ajuste para que "Subsidio" esté más a la derecha
            doc.text(field, 10 + fieldWidth * index+15, rowY + 5, null, null, 'center');

    });

    doc.setTextColor(0); // Texto blanco
    // Agregar el texto debajo de los campos de la tabla
    // Formatear el valor de cotizacionCLP

const cotizacionCLPFormatted = formatNumberWithCommas(cotizacionCLP);
const tasaAnualFormatted = formatNumberWithCommas((parseFloat(tasaMensual))*12);
const textoDebajo = `${nombre} el dividendo de tu cotización para el modelo ${modeloNombre}, con un pie de ${pieReservaFormatted} UF, tasa anual ${tasaAnualFormatted} % y un plazo de ${plazoCredito} años es: $ ${cotizacionCLPFormatted}`;
const textoDebajoWidth = doc.getStringUnitWidth(textoDebajo) * doc.internal.getFontSize() / doc.internal.scaleFactor;


// Calcular el ancho total del texto debajo
const totalWidth = doc.getStringUnitWidth(textoDebajo) * doc.internal.getFontSize() / doc.internal.scaleFactor;

// Definir el margen deseado a ambos lados del texto
const marginHorizontal = 20;
// Definir el límite de margen X
const marginXLimit = pageWidth - marginHorizontal;

// Inicializar posición X
let positionX = (pageWidth - totalWidth) / 2 - marginHorizontal;
// Inicializar posición Y
let positionY = rowY + 30;

// Recorrer cada carácter del texto para verificar si supera el límite de margen X
for (let i = 0; i < textoDebajo.length; i++) {
    // Obtener el ancho del carácter actual
    const charWidth = doc.getStringUnitWidth(textoDebajo[i]) * doc.internal.getFontSize() / doc.internal.scaleFactor;
    // Verificar si la posición X supera el límite de margen X
    if (positionX + charWidth > marginXLimit) {
        // Reiniciar posición X
        positionX = marginHorizontal;
        // Aumentar posición Y para comenzar una nueva línea
        positionY += 10; // Ajusta este valor según sea necesario
    }
    // Agregar el carácter al documento PDF
    // doc.text(textoDebajo[i], positionX, positionY);
    // Actualizar posición X para el siguiente carácter
    positionX += charWidth;
}

// Calcular el margen inferior de la página
const bottomMargin = 20;
// Actualizar posición Y para la siguiente línea de texto
positionY += 2; // Ajusta este valor según sea necesario

// Agregar el texto debajo de los campos de la tabla con márgenes uniformes a ambos lados
doc.text(textoDebajo, marginHorizontal, positionY, { maxWidth: pageWidth - 2 * marginHorizontal });
  

// Agregar una línea de color rojo malpo
doc.setLineWidth(0.5);
doc.setDrawColor(redMalpoColor);
doc.line(5, 270, pageWidth - 5, 270);

const textoDebajo2 = `Cotización referencial, valida por 7 días corridos, confirmar información en sala de ventas, las imágenes contenidas
en este folleto son solo una referencia visual y no necesariamente concuerdan con sus especificaciones técnicas
definitivas.`;
positionY=275
doc.text(textoDebajo2, marginHorizontal-5, positionY, { maxWidth: pageWidth - 2 * marginHorizontal+10 });
// doc.text(`Fecha tasa: ${fechaTasa}`, 5 , doc.internal.pageSize.getHeight()-10); // Agregar el texto "Fecha"

    // Guardar el PDF
    doc.save('cotizacion.pdf');
};

export default generatePDF;