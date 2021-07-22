import BackToTopButton from '../backToTopButton/BackToTopButton';
import Footer from '../footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faAt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import './Contact.css';

export default function Contact() {
    const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onBlur" });

    const toastOptions = {      
      loading: {
        className: 'toaster toaster-loading'
      },
      success: {
        duration: 4000,
        className: 'toaster toaster-success'
      },
      error: {
        duration: 4000,
        className: 'toaster toaster-error'
      }
    }

    const sendEmail = (data, event) => {
      const loading = toast.loading('Sending your email...');

      fetch('http://localhost:3000/email', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        toast.dismiss(loading);
        toast.success('Thank you for your email!');
        event.target.reset();        
      })
      .catch(error => {
        toast.dismiss(loading);
        toast.error('Oops! Something went wrong. Please try again later.');        
      })
    }

    return (
      <section className="contact-section">
        <h2>04 : Contact me</h2>

        <article className="contact-article">
          <form onSubmit={handleSubmit(sendEmail)}>
            <input type="text" name="name" placeholder="Name" {...register("name", { required: true })} />
            { errors.name && <div data-tooltip="Please tell me your name"></div> }

            <input type="email" name="email" placeholder="Email" {...register("fromEmail", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
            { errors.fromEmail && <div data-tooltip="Please enter a valid email"></div> }

            <input type="text" name="subject" placeholder="Subject" {...register("subject", { required: true })} />
            { errors.subject && <div data-tooltip="Please tell me your subject"></div> }

            <textarea rows="5" name="message" placeholder="Enter you message" {...register("message", { required: true })}></textarea>
            { errors.message && <div data-tooltip-textarea="Please let me know what you have to say to me"></div> }
            
            <input type="submit" value="Send"></input>
          </form>

          <div className="contact-container">
            <ul>
              <li><FontAwesomeIcon icon={faPhoneAlt} size="lg" color="var(--black)" className="icon" /> +351 915 216 260</li>
              <li><FontAwesomeIcon icon={faAt} size="lg" color="var(--black)" className="icon" /> diogoprdcarvalho@gmail.com</li>
              <li><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="var(--black)" className="icon" /> Aveiro, Portugal</li>
            </ul>

            <h3>Follow me on social networks</h3>

            <a href="https://www.linkedin.com/in/diogo-carvalho-83a96a14a" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="3x" color="var(--black)" className="icon icon-social"/></a>
            <a href="https://github.com/Diogo-P-Carvalho" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="3x" color="var(--black)" className="icon icon-social"/></a>
            <a href="https://twitter.com/diogoOak" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size="3x" color="var(--black)" className="icon icon-social"/></a>
          </div>
        </article>

        <BackToTopButton />
        <Footer />
        <Toaster toastOptions={toastOptions} />
      </section>
    );
  }
  