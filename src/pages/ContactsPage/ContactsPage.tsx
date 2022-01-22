import React from 'react';
import contactsImage from '../../assets/images/Mail.png';
import './ContactsPage.scss';
import { Social } from '../../components/Social/Social';
import { MessageForm } from '../../components/MessageForm/MessageForm';

export const ContactsPage: React.FC = () => {
  return (
    <section className="contacts-page-container message2">
      <div className="social-container">
        <img className="contacts-image" src={contactsImage} alt="Project" />
        <div className="social-wrapper">
          <Social />
        </div>
      </div>

      <div className="divisor"></div>

      <div className="user-form">
        <h1 className="contacts-header">Send me a message</h1>
        <p className="contacts-reply">
          If you have any questions, send me a message.
          <br /> I will reply to you within 24 hours!
        </p>
        <MessageForm />
      </div>
    </section>
  );
};
