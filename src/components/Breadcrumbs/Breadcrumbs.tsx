import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { booksActions } from 'redux/books';
import { selectCategories } from 'redux/categories/selectors';

import { BreadcrumbsList, Link, BookName, Wrapper } from './styles';

type TProps = {
  title?: string;
};

const Breadcrumbs = ({ title }: TProps) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const navigate = useNavigate();
  const params = useParams();

  const { category } = params;
  const categoryName = categories?.find(({ path }) => path === category)?.name;

  const clickNavigateBack = () => {
    dispatch(booksActions.getBooks());
    navigate(`/books/${categoryName ? category : 'all'}`);
  };

  return (
    <Wrapper>
      <BreadcrumbsList>
        <Link onClick={clickNavigateBack} data-test-id={dataTestId.BREADCRUMBS_LINK}>
          {categoryName ? categoryName : 'Все книги'}
        </Link>
        <BookName data-test-id={dataTestId.BOOK_NAME}>{title}</BookName>
      </BreadcrumbsList>
    </Wrapper>
  );
};

export default Breadcrumbs;
