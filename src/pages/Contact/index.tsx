import ContactBanner from './components/ContactBanner';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/contactInfo';

const Contact = () => {
  return (
    <div className="contact-page">
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
