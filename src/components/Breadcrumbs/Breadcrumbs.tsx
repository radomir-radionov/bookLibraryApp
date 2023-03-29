import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { booksActions } from 'redux/books';
import { selectCategories } from 'redux/categories/selectors';

import { BreadcrumbsList, Link, LinkText, Wrapper } from './styles';

type BreadcrumbsProps = {
  title?: string;
};

const Breadcrumbs = ({ title }: BreadcrumbsProps) => {
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
          <LinkText>{categoryName ? categoryName : 'Все книги'}</LinkText>
        </Link>
        <LinkText data-test-id={dataTestId.BOOK_NAME}>{title}</LinkText>
      </BreadcrumbsList>
    </Wrapper>
  );
};

export default Breadcrumbs;
