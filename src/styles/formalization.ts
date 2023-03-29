import { css } from 'styled-components';

const BUTTON_HOVER = css`
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
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
  background: linear-gradient(231.58deg, #f83600 -53.35%, #f9d423 297.76%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const MAIN_SHADOW = css`
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
`;

const formalization = { ACTIVE_TEXT, BUTTON_HOVER, BUTTON_PRESSED, HOVER, MAIN_SHADOW };

export default formalization;
