import { css } from '@emotion/react';

export const errorStyle = (isInvalid) => css`
  color: ${isInvalid ? 'red' : 'black'};
`;

export const inputStyle = (isInvalid) => css`
  border: 1px solid ${isInvalid ? 'red' : 'black'};
  background: ${isInvalid ? 'salmon' : 'white'};
`;

export const buttonStyle = (isInvalid) => css`
  cursor: ${isInvalid ? 'not-allowed' : 'pointer'};
`;
