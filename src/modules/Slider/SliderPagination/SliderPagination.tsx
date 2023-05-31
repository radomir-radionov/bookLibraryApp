import serverEndpoints from 'constants/apiEndpoints';
import dataTestId from 'constants/dataTestId';

import { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { Img, SwiperStyled } from './styles';

type SliderPaginationProps = {
  imgs: [
    {
      url: string;
    }
  ];
};

const SliderPagination = ({ imgs }: SliderPaginationProps) => {
  return (
    <SwiperStyled
      spaceBetween={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      data-test-id={dataTestId.SLIDE_BIG}
    >
      {imgs.map((img) => {
        return (
          <SwiperSlide key={Math.random()} className='choiseItem' data-test-id={dataTestId.SLIDE_MINI}>
            <Img src={img?.url} />
          </SwiperSlide>
        );
      })}
    </SwiperStyled>
  );
};

export default SliderPagination;
