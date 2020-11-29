import React from 'react';
import styled from 'styled-components';
import { nutritionalInfoContent } from '../content/nutritionalInfo';

const NutritionalInfo = () => {
  return (
    <Container>
      <h3>{nutritionalInfoContent.title}</h3>
      <p>{nutritionalInfoContent.subtitle}</p>
      <table>
        <tbody>
          <tr>
            <TableHeader>{nutritionalInfoContent.table.header[0]}</TableHeader>
            <TableHeader>{nutritionalInfoContent.table.header[1]}</TableHeader>
          </tr>
          {nutritionalInfoContent.table.rows.map((row) => {
            return (
              <tr key={row[0]}>
                <Cell>{row[0]}</Cell>
                <Cell>{row[1]}</Cell>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>{nutritionalInfoContent.footer.paragraphs[0]}</p>
      <p>
        {nutritionalInfoContent.footer.paragraphs[1]}{' '}
        <a href={nutritionalInfoContent.footer.link.href}>
          {' '}
          {nutritionalInfoContent.footer.link.text}
        </a>
      </p>
    </Container>
  );
};

const Container = styled.div`
  width: 30%;
`;

const TableHeader = styled.th`
  background: #ebebeb;
`;

const Cell = styled.td`
  padding-top: 1rem;
`;

export default NutritionalInfo;
