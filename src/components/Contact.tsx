import React, { useState } from 'react';
import styled from 'styled-components';
import { addSyntheticLeadingComment } from 'typescript';
import { contactContent } from '../content/contact';
import { submitContactDetails } from '../utils/backendUtils';

const Contact = () => {
  const [contactDetails, setContactDetails] = useState(['', '']);

  return (
    <Container>
      <h2>{contactContent.title}</h2>
      <p>{contactContent.subtitle}</p>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          submitContactDetails(contactDetails[0], contactDetails[1]);
        }}
      >
        {contactContent.inputFields.map((field, i) => {
          return (
            <label key={field.value}>
              {field.label}
              <Input
                type="text"
                value={contactDetails[i]}
                onChange={(e) => {
                  const newDetails = [...contactDetails];
                  newDetails[i] = e.target.value;
                  setContactDetails(newDetails);
                }}
              ></Input>
            </label>
          );
        })}
        <SubmitButton type="submit">
          {contactContent.submitButtonLabel}
        </SubmitButton>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
  padding-top: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 20%;
  margin-top: 0.5rem;
`;
export default Contact;
