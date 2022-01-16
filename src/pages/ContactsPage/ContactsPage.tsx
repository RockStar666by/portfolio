import React from 'react';
import contactsImage from '../../assets/images/Mail.png';
import './ContactsPage.scss';

export const ContactsPage: React.FC = () => {
  return (
    <section className="contacts-page-container">
      <h1>Contacts Page</h1>
      <img className="contacts-image" src={contactsImage} alt="Project" />
    </section>
  );
};
