import { css } from '@emotion/react';

export const card = css`
  position: absolute;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.01);
  width: 80%;
  height: 50vh;
  padding: 32px;
  max-width: 480px;
  min-height: 480px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const center = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
