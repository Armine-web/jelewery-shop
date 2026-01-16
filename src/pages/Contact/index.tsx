import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

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
