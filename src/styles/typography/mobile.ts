import { css } from 'styled-components';

const H1 = css`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
`;

const H2 = css`
  font-weight: 600;
  font-size: 26px;
  line-height: 36px;
`;

const H3 = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.1px;
`;

const SUBTITLE_LARGE = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
`;

const SUBTITLE_SMALL = css`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;
`;

const BODY_LARGE = css`
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.1px;
`;

const BODY_SMALL = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;

const INFO_LARGE = css`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
`;

const INFO_SMALL = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
`;

const BUTTON_LARGE = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const BUTTON_SMALL = css`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const mobile = {
  H1,
  H2,
  H3,
  SUBTITLE_LARGE,
  SUBTITLE_SMALL,
  BODY_LARGE,
  BODY_SMALL,
  INFO_LARGE,
  INFO_SMALL,
  BUTTON_LARGE,
  BUTTON_SMALL,
};

export default mobile;
