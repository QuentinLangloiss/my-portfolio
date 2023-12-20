import { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

  // État pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Gérer le changement dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Le nom est requis";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "L'email n'est pas valide";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Le message est requis";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (validateForm()) {
      console.log("Données du formulaire soumises:", formData);
      // Ici, envoyez les données à un serveur si nécessaire
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
        <button type="submit">Envoyer</button>
      </form>

      <div className="contact-info">
        <p>Adresse email: quentinwebdev@proton.me</p>
        <p>Téléphone: +33 6 23 45 67 89</p>
      </div>

      <div className="social-links">
        <a href="https://github.com/QuentinLangloiss" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://twitter.com/NewCeos" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/quentin-langloiss/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </section>
  );
};

export default Contact;
