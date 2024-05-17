import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectCategories } from 'redux/categories/selectors';

import { Content, Link, BookName, Container } from './styles';

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

  const clickNavigateBack = () => navigate(`/books/${categoryName ? category : 'all'}`);

  return (
    <Container>
      <Content>
        <Link onClick={clickNavigateBack} data-test-id={dataTestId.BREADCRUMBS_LINK}>
          {categoryName ? categoryName : 'Все книги'}
        </Link>
        <BookName data-test-id={dataTestId.BOOK_NAME}>{title}</BookName>
      </Content>
    </Container>
  );
};

export default Breadcrumbs;
