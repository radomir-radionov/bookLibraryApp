import dataTestId from 'constants/dataTestId';

import { useState } from 'react';
import Swiper, { FreeMode, Navigation, Scrollbar, Thumbs } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { ChoiseBar, Img, ImgScroll, SwiperSlideStyled, ValueBar } from './styles';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/scrollbar';

type TProps = { img: string };

const SliderScrollbar = ({ img }: TProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);

  return (
    <>
      <ValueBar
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        data-test-id={dataTestId.SLIDE_BIG}
      >
        {/* <SwiperSlide key={Math.random()}> */}
        <Img src={img} />
        {/* </SwiperSlide> */}
      </ValueBar>

      {/* {imgs.length >= 2 && (
        <ChoiseBar
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Scrollbar, Thumbs]}
          scrollbar={{ draggable: true }}
          className='choiseBar'
        >
          {imgs.map((img) => (
            <SwiperSlideStyled key={Math.random()} className='choiseItem' data-test-id={dataTestId.SLIDE_MINI}>
              <ImgScroll src={img?.url} />
            </SwiperSlideStyled>
          ))}
        </ChoiseBar>
      )} */}
    </>
  );
};

export default SliderScrollbar;
