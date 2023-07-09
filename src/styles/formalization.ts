import { css } from 'styled-components';
import other from './other';

const BUTTON_HOVER = css`
  background: ${other.LINEAR_GRADIENT};
  border-radius: 20px;
`;

const BUTTON_PRESSED = css`
  background: linear-gradient(233.73deg, #f83600 -16.08%, #f9d423 327.37%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ACTIVE_TEXT = css`
  background: linear-gradient(233.73deg, #f83600 -16.08%, #f9d423 327.37%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
`;

const HOVER = css`
  background: ${other.LINEAR_GRADIENT};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const MAIN_SHADOW = css`
  box-shadow: ${other.MAIN_SHADOW};
`;

const formalization = { ACTIVE_TEXT, BUTTON_HOVER, BUTTON_PRESSED, HOVER, MAIN_SHADOW };

export default formalization;
