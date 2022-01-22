import React, { ChangeEvent, useRef } from 'react';

import { Values } from '../../interfaces/values';
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import { sendFile, sendMessage } from '../../api/formMessage';
import * as Yup from 'yup';
import './MessageForm.scss';

const MessageSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
});

export const MessageForm: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>();

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        message: '',
        file: '',
      }}
      validationSchema={MessageSchema}
      onSubmit={(
        values: Values,
        { setSubmitting, resetForm }: FormikHelpers<Values>
      ) => {
        const fileData = new FormData();
        fileData.append('document', values.file);
        if (process.env.REACT_APP_CHAT_ID)
          fileData.append('chat_id', process.env.REACT_APP_CHAT_ID);
        sendMessage(values);
        if (values.file !== '') {
          sendFile(fileData);
        }
        setSubmitting(false);
        resetForm();
        if (fileRef.current != null) {
          fileRef.current.value = '';
        }
      }}
    >
      {({ setFieldValue }) => (
        <Form className="user-form">
          <div className="label-container">
            <label htmlFor="username">Name:</label>
            <ErrorMessage
              name="username"
              render={(msg) => <div className="error-message">{msg}</div>}
            />
          </div>
          <Field
            className="input-field"
            id="username"
            name="username"
            placeholder="John"
          />

          <div className="label-container">
            <label htmlFor="email">Email:</label>
            <ErrorMessage
              name="email"
              render={(msg) => <div className="error-message">{msg}</div>}
            />
          </div>
          <Field
            className="input-field"
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <div className="label-container">
            <label htmlFor="message">
              <div>Message:</div>
            </label>
            <ErrorMessage
              name="message"
              render={(msg) => <div className="error-message">{msg}</div>}
            />
          </div>
          <Field
            className="input-field textarea"
            as="textarea"
            id="message"
            name="message"
            placeholder="Enter your message here"
            type="text"
          />

          <label htmlFor="file">Choose a file &#40;optional&#41;:</label>
          <Field
            innerRef={fileRef}
            className="input-field choose-file"
            id="file"
            name="file"
            type="file"
            value={undefined}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              if (event.target.files != null) {
                setFieldValue('file', event.target.files[0]);
              }
            }}
          />

          <button className="send-button" type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};
