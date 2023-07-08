import { Loader_Icon } from 'assets';
import styled from 'styled-components';
import { device } from 'styles';

type LoaderStyledProps = {
  $visibility: boolean;
};

export const LoaderStyled = styled.div<LoaderStyledProps>`
  visibility: ${({ $visibility }) => ($visibility ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(54, 54, 54, 0.3);
  backdrop-filter: blur(10px);
`;

export const LoaderIcon = styled(Loader_Icon)`
  transition: all 0.2s ease-out;
  animation: loading-spinner 1s linear infinite;

  @keyframes loading-spinner {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${device.laptop}) {
    width: 44px;
  }

  @media (max-width: ${device.tablet}) {
    width: 22px;
  }
`;
