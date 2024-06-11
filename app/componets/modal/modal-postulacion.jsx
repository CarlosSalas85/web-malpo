import { Ctrl_curriculum } from "@/app/controllers/Ctrl_curriculum";
import { useState } from "react";

// Componente de pestaña
const Tab = ({ number, isActive }) => {
  return (
    <div
      className={`mx-2 text-xl ${isActive ? "font-semibold text-rojoMalpo" : ""}`}
    >
      {number}
    </div>
  );
};

const Formulario = () => {
  const [formData, setFormData] = useState({
    rut: "",
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    nacionalidad: "",
    estado_civil: "",
    numero_hijos: "",

    nivel_edu: "",
    profesion: "",
    renta: "",
    ultimo_empleo: "",
    curriculum: "",
    tipo_trabajo: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const formatRut = (rut) => {
    // Primero, eliminamos los puntos y guiones del RUT, si los hay
    const cleanRut = rut.replace(/[.-]/g, "");

    // Luego, formateamos el RUT en el formato deseado
    const rutParte1 = cleanRut.substring(0, cleanRut.length - 1);
    const rutParte2 = cleanRut.substring(cleanRut.length - 1);
    const rutFormateado =
      rutParte1.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "-" + rutParte2;

    return rutFormateado;
  };

  const validateRut = (rut) => {
    // Eliminamos los puntos y el guión del RUT
    const cleanRut = rut.replace(/[.-]/g, "");

    // Se obtiene el número y el dígito verificador
    const numero = cleanRut.slice(0, -1);
    const verificador = cleanRut.slice(-1).toUpperCase();

    // Se verifica que el número tenga al menos un dígito
    if (numero.length < 1) {
      return false;
    }

    // Se calcula el dígito verificador esperado
    let suma = 0;
    let multiplicador = 2;

    for (let i = numero.length - 1; i >= 0; i--) {
      suma += parseInt(numero.charAt(i)) * multiplicador;
      multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const resto = suma % 11;
    const dvCalculado = resto === 0 ? "0" : resto === 1 ? "K" : 11 - resto;

    // Se compara el dígito verificador calculado con el ingresado
    return verificador === dvCalculado.toString();
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+569\d{8}$/;
    return phoneRegex.test(phone);
  };

  const validatePDF = (file) => {
    const pdfRegex = /\.pdf$/i; // Expresión regular para verificar si el nombre del archivo termina en ".pdf"
    return pdfRegex.test(file.name);
  };

  const mensaje = "Campo es requerido";

  const validateStep = (step) => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.rut) {
        newErrors.rut = mensaje;
      } else if (!validateRut(formData.rut)) {
        newErrors.rut = "RUT no es válido";
      }

      if (!formData.nombre) newErrors.nombre = mensaje;

      if (!formData.email) {
        newErrors.email = mensaje;
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "email no es válido";
      }

      if (!formData.telefono) {
        newErrors.telefono = mensaje;
      } else if (!validatePhone(formData.telefono)) {
        newErrors.telefono = "Teléfono no es válido, (+56912345678)";
      }

      if (!formData.direccion) newErrors.direccion = mensaje;
      if (!formData.ciudad) newErrors.ciudad = mensaje;
      if (!formData.nacionalidad) newErrors.nacionalidad = mensaje;
      if (!formData.estado_civil) newErrors.estado_civil = mensaje;
      if (!formData.numero_hijos) newErrors.numero_hijos = mensaje;
    } else if (step === 2) {
      if (!formData.nivel_edu) newErrors.nivel_edu = mensaje;
      if (!formData.tipo_trabajo) newErrors.tipo_trabajo = mensaje;
      if (!formData.profesion) newErrors.profesion = mensaje;
      if (!formData.renta) newErrors.renta = mensaje;
      if (!formData.ultimo_empleo) newErrors.ultimo_empleo = mensaje;

      if (!formData.curriculum) {
        newErrors.curriculum = mensaje;
      } else if (!validatePDF(formData.curriculum)) {
        newErrors.curriculum = "Solo acepta PDF";
      }
    }
    return newErrors;
  };

  const handleNext = () => {
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setErrors(stepErrors);
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stepErrors = validateStep(currentStep);
    if (currentStep === 1) {
      if (Object.keys(stepErrors).length === 0) {
        setCurrentStep(2);
      } else {
        setErrors(stepErrors);
      }
    } else if (currentStep === 2) {
      if (Object.keys(stepErrors).length === 0) {
        /* console.log("Formulario enviado:", formData); */
        const response = await Ctrl_curriculum(formData);
        console.log(response);
      } else {
        setErrors(stepErrors);
      }
    }
  };

  return (
    <div className="container mx-auto w-full px-4 py-2">
      <div className="mb-3">
        <img
          src="/logos/logoRojoMalpo.png"
          alt="Logo"
          className="mr-4 h-6 w-auto"
        />
      </div>
      <h1 className="text-center text-lg font-bold">
        Formulario de Postulación
      </h1>
      <form onSubmit={handleSubmit} className="mx-auto mt-4 max-w-full" encType="multipart/form-data">
        {currentStep === 1 && (
          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="mb-4">
                <label htmlFor="rut" className="mb-2 flex justify-start">
                  Rut:
                </label>
                <input
                  type="text"
                  id="rut"
                  name="rut"
                  value={formatRut(formData.rut)}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
                {errors.rut && (
                  <p className="text-xs italic text-rojoMalpo">{errors.rut}</p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="nombre" className="mb-2 flex justify-start">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
                {errors.nombre && (
                  <p className="text-xs italic text-rojoMalpo">
                    {errors.nombre}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 flex justify-start">
                  email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
                {errors.email && (
                  <p className="text-xs italic text-rojoMalpo">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 flex justify-start">
                  Teléfono:
                </label>
                <input
                  type="text"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
                {errors.telefono && (
                  <p className="text-xs italic text-rojoMalpo">
                    {errors.telefono}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 flex justify-start">
                  Dirección:
                </label>
                <input
                  type="text"
                  id="direccion"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
                {errors.direccion && (
                  <p className="text-xs italic text-rojoMalpo">
                    {errors.direccion}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 flex justify-start">
                  Ciudad residencia:
                </label>
                <input
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  value={formData.ciudad}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
                {errors.ciudad && (
                  <p className="text-xs italic text-rojoMalpo">
                    {errors.ciudad}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 flex justify-start">
                  Nacionalidad:
                </label>
                <input
                  type="text"
                  id="nacionalidad"
                  name="nacionalidad"
                  value={formData.nacionalidad}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
                {errors.nacionalidad && (
                  <p className="text-xs italic text-rojoMalpo">
                    {errors.nacionalidad}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="estado_civil"
                  className="mb-2 flex justify-start"
                >
                  Estado civil:
                </label>
                <select
                  id="estado_civil"
                  name="estado_civil"
                  value={formData.estado_civil}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                >
                  <option value="">Seleccione</option>
                  <option value="1">Soltero/a</option>
                  <option value="2">Casado/a</option>
                  <option value="3">Divorciado/a</option>
                  <option value="4">Separado/a</option>
                  <option value="5">Viudo/a</option>
                </select>
                {errors.estado_civil && (
                  <p className="text-xs italic text-rojoMalpo">
                    {errors.estado_civil}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="numero_hijos"
                  className="mb-2 flex justify-start"
                >
                  Número de Hijos:
                </label>
                <select
                  id="numero_hijos"
                  name="numero_hijos"
                  value={formData.numero_hijos}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                >
                  <option value="">Seleccione</option>
                  <option value="1">0</option>
                  <option value="2">1</option>
                  <option value="3">2</option>
                  <option value="4">3</option>
                  <option value="5">4 o más</option>
                </select>
                {errors.numero_hijos && (
                  <p className="text-xs italic text-rojoMalpo">
                    {errors.numero_hijos}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={handleNext}
                className="focus:shadow-outline rounded bg-rojoMalpo px-4 py-2 text-white hover:bg-gray-400 focus:outline-none"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label htmlFor="nivel_edu" className="mb-2 flex justify-start">
                  Nivel Educacional:
                </label>
                <select
                  id="nivel_edu"
                  name="nivel_edu"
                  value={formData.nivel_edu}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                >
                  <option value="">Seleccione</option>
                  <option value="1">Básica</option>
                  <option value="2">Media</option>
                  <option value="3">Superior</option>
                  <option value="4">Posgrado</option>
                  <option value="5">Magister</option>
                  <option value="6">Doctorado</option>
                </select>
                {errors.nivel_edu && (
                  <p className="text-xs italic text-rojoMalpo">
                    {errors.nivel_edu}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="tipo_trabajo"
                  className="mb-2 flex justify-start"
                >
                  Tipo de Trabajo:
                </label>
                <select
                  id="tipo_trabajo"
                  name="tipo_trabajo"
                  value={formData.tipo_trabajo}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                >
                  <option value="">Seleccione</option>
                  <option value="1">Práctica Profesional</option>
                  <option value="2">Trabajo</option>
                </select>
                {errors.tipo_trabajo && (
                  <p className="text-xs italic text-rojoMalpo">
                    {errors.tipo_trabajo}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="profesion" className="mb-2 flex justify-start">
                  Profesión:
                </label>
                <input
                  type="text"
                  id="profesion"
                  name="profesion"
                  value={formData.profesion}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
                {errors.profesion && (
                  <p className="text-xs italic text-rojoMalpo">
                    {errors.profesion}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="renta" className="mb-2 flex justify-start">
                  Renta esperada:
                </label>
                <input
                  type="number"
                  min="0"
                  id="renta"
                  name="renta"
                  value={formData.renta}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
                {errors.renta && (
                  <p className="text-xs italic text-rojoMalpo">
                    {errors.renta}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="ultimo_empleo"
                  className="mb-2 flex justify-start"
                >
                  Ültimo empleo:
                </label>
                <input
                  type="text"
                  id="ultimo_empleo"
                  name="ultimo_empleo"
                  value={formData.ultimo_empleo}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
                {errors.ultimo_empleo && (
                  <p className="text-xs italic text-rojoMalpo">
                    {errors.ultimo_empleo}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="curriculum" className="mb-2 flex justify-start">
                  Adjuntar CV (PDF):
                </label>
                <input
                  type="file"
                  id="curriculum"
                  name="curriculum"
                  onChange={(e) =>
                    handleChange({
                      target: { name: "curriculum", value: e.target.files[0] },
                    })
                  }
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                />
                {errors.curriculum && (
                  <p className="text-xs italic text-rojoMalpo">
                    {errors.curriculum}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={handleBack}
                className="focus:shadow-outline rounded bg-rojoMalpo px-4 py-2 text-white hover:bg-gray-400 focus:outline-none"
              >
                Volver
              </button>
              <button
                type="submit"
                className="rounded bg-rojoMalpo px-4 py-2 font-bold text-white hover:bg-gray-400"
              >
                Enviar
              </button>
            </div>
          </div>
        )}

        <div className="mt-4 flex justify-center">
          <Tab number={1} isActive={currentStep === 1} />
          <Tab number={2} isActive={currentStep === 2} />
        </div>

        {/* Resto del formulario y lógica para los otros pasos */}
      </form>
    </div>
  );
};

export default Formulario;
