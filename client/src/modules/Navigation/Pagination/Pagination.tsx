import { useEffect, useState } from 'react';
import { ChevronIcon, ReactPaginateStyled, СardsStyled } from './styles';
import { BookLong, BookShort } from 'modules';

type TypePagination = {
  data: any;
  itemsPerPage?: number;
  displayingData: string;
};

const Pagination = ({ data, itemsPerPage = 4, displayingData }: TypePagination) => {
  const [currentData, setCurrentData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setCurrentData(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [endOffset, itemOffset, itemsPerPage, data]);

  return (
    <>
      <СardsStyled>
        {currentData.map((book: any) =>
          displayingData === 'tiles' ? <BookShort key={book.id} data={book} /> : <BookLong key={book.id} data={book} />
        )}
      </СardsStyled>
      <ReactPaginateStyled
        nextLabel={<ChevronIcon $view='right' />}
        previousLabel={<ChevronIcon $view='left' />}
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        containerClassName='pagination'
        pageClassName='pagination__page'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        activeClassName='active'
      />
    </>
  );
};

export default Pagination;
