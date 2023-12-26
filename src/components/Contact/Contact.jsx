import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await fetch('URL_DU_SERVEUR_BACKEND', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });

          if (response.ok) {
              setFormData({ name: '', email: '', message: '' });
              // Afficher un message de succès ou traiter la réponse ici
          } else {
              // Gérer les erreurs de réponse ici
          }
      } catch (error) {
          // Gérer les erreurs de réseau ici
      }
  };


    return (
        <div id='contact' className="contact">
          <h2>Contactez-moi</h2>
          <div className="contact-inner">
            <div className="contact-info">
                <img src="src/assets/contact_form.png" alt="illustration contact" />
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Votre message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <button type="submit">Envoyer</button>
            </form>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/quentin-langloiss/" className="social-link">
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                <a href="https://twitter.com/NewCeos" className="social-link">
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
                <a href="https://github.com/QuentinLangloiss" className="social-link">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
            </div>
          </div>
        </div>
    );
};

export default Contact;
