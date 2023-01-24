import { css } from 'styled-components';

export const flexBox = (jc = 'center', ai = 'center', fd = 'row') => css`
  display: flex;
  justify-content: ${jc};
  align-items: ${ai};
  flex-direction: ${fd};
`;
