const TextoUrl = (nombre) => {
  // lógica para convertir nombre
  return nombre.replace(/\s+/g, "-").toLowerCase(); // ejemplo de transformación
};

export default TextoUrl;
