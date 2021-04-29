import { useForm } from "../hooks/useForm";
import Loader from "./loader";
import Message from "./message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comment: "",
};
const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComment = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido ";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' Solo acepta Letras y Epacios en blanco  ";
  }
  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido ";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es Incorrecto  ";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto' es requerido ";
  }

  if (!form.comment.trim()) {
    errors.comment = "El campo 'Comentario' es requerido ";
  } else if (!regexComment.test(form.comment.trim())) {
    errors.comment = "El campo 'Cometarios' no debe pasar los 255 Caracteres";
  }

  return errors;
};

let style = {
  fontWeight: "bold",
  color: "#ffffff",
  background: "#dc3545",
};
const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useForm(initialForm, validateForm);

  return (
    <div>
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe Vuestro Nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        {errors.name && <p style={style}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe Vuestro Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        ></input>
        {errors.email && <p style={style}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
        ></input>
        {errors.subject && <p style={style}>{errors.subject}</p>}
        <textarea
          name="comment"
          cols="50"
          rows="10"
          placeholder="Escribe el contenido "
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comment}
          required
        ></textarea>
        {errors.comment && <p style={style}>{errors.comment}</p>}
        <input type="submit" value="Enviar" />
      </form>
      {loading && <Loader />}
      {response && (
        <Message contenti="los datos han sido enviados" color="#198765" />
      )}
    </div>
  );
};

export default ContactForm;
