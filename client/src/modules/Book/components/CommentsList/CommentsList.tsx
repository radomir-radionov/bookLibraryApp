import dataTestId from 'constants/dataTestId';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookActions } from 'redux/book';
import { modalActions } from 'redux/modal';
import { selectUserComments } from 'redux/user/selectors';
import { Button, SubTitle } from 'components';
import { Comment } from 'modules';
import moment from 'moment';
import { TBookDetailed } from 'types/book';
import { BUTTON_VARIANTS } from 'types/button';
import { MODAL_TYPES } from 'types/modal';

import { ChevronIcon, CommentsListStyled, ListWrapper, Qty, SubTitleBox, Wrapper } from './styles';

type TProps = {
  data: TBookDetailed;
};

const CommentsList = ({ data }: TProps) => {
  const dispatch = useDispatch();
  const userComments = useSelector(selectUserComments);
  const [isCommentsListOpen, setCommentsListOpen] = useState(true);
  const { id, comments } = data;

  const bookCommentIds = userComments?.map(({ bookId }) => bookId);
  const isCommentedBook = bookCommentIds?.includes(id);
  const filtredCommentedBookData = userComments?.find((comment) => comment.bookId === id);

  const sortedCommentsByCreatedAt = (comments || []).slice().sort((a, b) => {
    const dateA = moment(a.createdAt);
    const dateB = moment(b.createdAt);

    return dateB.diff(dateA);
  });

  const handleOpenListClick = () => setCommentsListOpen(!isCommentsListOpen);
  const handleRateBookClick = () => dispatch(modalActions.open({ type: MODAL_TYPES.RATE_BOOK }));
  const handleChangeCommentClick = () => {
    dispatch(bookActions.getBook(id));
    dispatch(
      modalActions.open({
        type: MODAL_TYPES.RATE_BOOK,
        modalInfo: {
          view: 'editCommentModal',
          ...filtredCommentedBookData,
        },
      })
    );
  };

  return (
    <Wrapper>
      <SubTitleBox
        onClick={handleOpenListClick}
        $isListOpen={isCommentsListOpen}
        data-test-id={dataTestId.BUTTON_HIDE_REVIEWS}
      >
        <SubTitle>
          Отзывы<Qty>{comments?.length}</Qty>
          <ChevronIcon />
        </SubTitle>
      </SubTitleBox>
      {isCommentsListOpen && comments && (
        <ListWrapper>
          <CommentsListStyled data-test-id={dataTestId.REVIEWS}>
            {sortedCommentsByCreatedAt.map((comment) => (
              <Comment key={comment.id} data={comment} />
            ))}
          </CommentsListStyled>
        </ListWrapper>
      )}
      {isCommentedBook ? (
        <Button
          className='editCommentButton'
          onClick={handleChangeCommentClick}
          variant={BUTTON_VARIANTS.MEDIUM}
          dataTestId={dataTestId.BUTTON_RATE_BOOK}
        >
          Изменить оценку
        </Button>
      ) : (
        <Button onClick={handleRateBookClick} variant={BUTTON_VARIANTS.MEDIUM} dataTestId={dataTestId.BUTTON_RATE_BOOK}>
          оценить книгу
        </Button>
      )}
    </Wrapper>
  );
};

export default CommentsList;
