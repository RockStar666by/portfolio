import axios from 'axios';
import { Values } from '../interfaces/values';

export const sendMessage = (values: Values) => {
  axios
    .post(
      `https://api.telegram.org/${process.env.REACT_APP_TG_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.REACT_APP_CHAT_ID,
        parse_mode: 'markdown',
        text: `*Name: *${values.username}\n*E-mail: *${values.email}\n\n*Message: *${values.message}`,
      }
    )
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        alert('Message sent!');
      }
    })
    .catch(function (error) {
      console.log(error);
      if (error.status === 400) {
        alert('Message successfully sent!');
      }
    });
};

export const sendFile = (fileData: FormData) => {
  axios
    .post(
      `https://api.telegram.org/${process.env.REACT_APP_TG_BOT_TOKEN}/sendDocument`,
      fileData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
