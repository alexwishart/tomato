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
            <Label key={field.value}>
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
            </Label>
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
  width: 50%;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  margin: 0.5rem;
`;

const SubmitButton = styled.button`
  padding: 0;
  font: inherit;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  text-decoration: underline;

  align-self: flex-end;
  margin-top: 0.5rem;
`;

export default Contact;
