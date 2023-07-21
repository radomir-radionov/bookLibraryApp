import styled from 'styled-components';
import { colors, device } from 'styles';
import { Swiper } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  display: flex !important;
  flex-direction: column;
  width: 136px !important;
  transition: all 0.2s ease-out;

  @media (max-width: ${device.tablet}) {
    width: 188px !important;
  }

  .swiper-slide {
    position: static !important;
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide {
    width: 136px !important;
    height: 198px !important;

    @media (max-width: ${device.tablet}) {
      width: 188px !important;
      height: 260px !important;
    }
  }

  .swiper-pagination {
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
  }

  .swiper-pagination-bullet {
    width: 7px !important;
    height: 7px !important;
    border-radius: 50%;
    background: ${colors.GREY_BLACK_20};
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    width: 9px !important;
    height: 9px !important;
    background: ${colors.MAIN_DARK};
  }
`;

export const Img = styled.img`
  width: 136px;
  height: 198px;

  @media (max-width: ${device.tablet}) {
    width: 188px;
    height: 260px;
  }
`;
