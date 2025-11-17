import { contactData } from '../../data/data';

export const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact-container">
          <h2 className="contact-title">Contacto</h2>
          <div className="contact-items">
            {contactData.map((contact) => (
              <div
                key={contact.id}
                className="contact-link"
              >
                <a
                  href={contact.link}
                  target="_blank"
                >
                  <img
                    src={contact.urlImage}
                    alt={contact.text}
                  />
                  <p>{contact.text}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
