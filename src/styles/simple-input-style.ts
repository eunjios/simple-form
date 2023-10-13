import { css } from '@emotion/react';

interface StylesProps {
  inputIsInvalid: boolean;
}

export const errorStyle = ({
  inputIsInvalid,
}: StylesProps) => css`
  color: ${inputIsInvalid ? 'red' : 'black'};
`;

export const inputStyle = ({
  inputIsInvalid,
}: StylesProps) => css`
  border: 1px solid ${inputIsInvalid ? 'red' : 'black'};
  background: ${inputIsInvalid ? 'salmon' : 'white'};
`;

export const buttonStyle = ({
  inputIsInvalid,
}: StylesProps) => css`
  cursor: ${inputIsInvalid ? 'not-allowed' : 'pointer'};
`;
