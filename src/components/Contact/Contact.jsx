import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.scss';
import Image_form from '../../assets/contact_form.png';

function ContactForm() {
  const [state, handleSubmit] = useForm("xyyrgqoo");
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  function validateEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
  }

  function validateMessage(message) {
      return message.trim().length > 0;
  }

  function validateName(name) {
    return name.trim().length > 0;
  }


  const canSubmit = validateEmail(email) && validateMessage(message) && validateName(name);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  if (state.succeeded) {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
    return <p>Merci pour votre message !</p>;
  }

  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }




    return (
        <div id='contact' className="contact">
          <h2>Contactez-moi</h2>
          <div className="contact-inner">
            <div className="contact-info">
                <img src={Image_form} alt="illustration contact" />
            </div>

            <form className='contact-form' method='POST' onSubmit={onSubmit}>
              <label htmlFor="name">Nom</label>
              <input
                id="name"
                type="text"
                name="name"
                aria-label="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">
                Address e-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                aria-label="Adresse e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <label htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                aria-label="Votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <button type="submit" disabled={!canSubmit || state.submitting}>
                {state.submitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>
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
                <a href="mailto:quentinwebdev@proton.me" className="social-link">
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                </a>
            </div>
          </div>
        </div>
    );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
