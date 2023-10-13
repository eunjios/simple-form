import { css } from '@emotion/react';

export const inputWithIconContainer = css`
  position: relative;

  & input {
    padding-right: 40px;
  }
`;

export const advancedInputStyle = (isInvalid) => css`
  width: 100%;
  border: 1px solid ${!isInvalid ? '#ddd' : 'salmon'};
  border-radius: 8px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  transition: 300ms;

  &:focus {
    border-color: ${isInvalid ? 'salmon' : '#4fe0b6'};
    box-shadow: 0 0 2px 0
      ${isInvalid ? 'salmon' : '#4fe0b6'};
  }
`;

export const iconStyle = (isInvalid) => css`
  position: absolute;
  right: 0;
  top: 8px;
  padding: 9px 8px;
  color: ${isInvalid ? 'salmon' : '#4fe0b6'};
  transition: 300ms;
`;

export const actionStyle = css`
  display: flex;
  position: absolute;
  bottom: 32px;
  width: calc(100% - 64px);
  box-sizing: border-box;
`;

export const submitButtonStyle = (isInvalid) => css`
  cursor: ${isInvalid ? 'not-allowed' : 'pointer'};
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #fff;
  background: ${isInvalid ? '' : '#4fe0b6'};
  color: ${isInvalid ? '' : '#fff'};
  font-weight: 700;
`;
