import styled from 'styled-components';
import { colors, other } from 'styles';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Img = styled.img`
  width: 100%;
  max-height: 593px;
  transition: all 0.2s ease-out;
`;

export const ImgScroll = styled.img`
  width: 65px;
  height: 85px;
  border: 1px solid ${colors.GREY_BLACK_20};
  border-radius: 3px;
  margin-right: 0 !important;
  cursor: pointer;
`;

export const ValueBar = styled(Swiper)`
  max-width: 445px;
`;

export const ChoiseBar = styled(Swiper)`
  max-width: 445px;
  margin-top: 16px;
  mask-image: linear-gradient(to left, rgba(0, 0, 0, -0.2) 0%, rgba(0, 0, 0, 1) 20%);
  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, -0.2) 0%, rgba(0, 0, 0, 1) 20%);

  .swiper-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    mask-image: linear-gradient(to right, rgba(0, 0, 0, -0.1) 0%, rgba(0, 0, 0, 1) 24%);
    -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, -0.1) 0%, rgba(0, 0, 0, 1) 24%);
  }

  .swiper-scrollbar {
    position: static;
    height: 6px !important;
    margin-top: 8px;
    background: none;
  }

  .swiper-scrollbar-drag {
    width: 190px !important;
    border-radius: 4px !important;
    background: ${colors.GREY_BLACK_40};
  }

  .swiper-slide.swiper-slide-thumb-active ${ImgScroll} {
    background: ${other.LINEAR_GRADIENT};
    border-radius: 5px;
    border: 2px solid transparent;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  width: 65px !important;
  height: 85px !important;
  margin-right: 30px;
`;
