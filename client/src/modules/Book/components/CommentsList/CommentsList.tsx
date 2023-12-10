import dataTestId from 'constants/dataTestId';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from 'redux/modal';
import { Button, SubTitle } from 'components';
import { Comment } from 'modules';
import { TBookDetailed } from 'types/book';
import { BUTTON_VARIANTS } from 'types/button';
import { MODAL_TYPES } from 'types/modal';

import { ChevronIcon, CommentsListStyled, Qty, SubTitleBox, Wrapper } from './styles';
import getCommentInfo from 'helpers/book/getCommentInfo.js';
import { selectUserId } from 'redux/user/selectors';

type TProps = {
  data: TBookDetailed;
};

const CommentsList = ({ data }: TProps) => {
  const dispatch = useDispatch();
  const [isCommentsListOpen, setCommentsListOpen] = useState(true);
  const userId = useSelector(selectUserId);

  const { id, comments } = data;

  const { foundUserComment, sortedCommentsByCreatedAt, isCommentedBook } = getCommentInfo(comments, id, userId);
  const handleOpenListClick = () => setCommentsListOpen(!isCommentsListOpen);
  const handleCreateCommentClick = () => dispatch(modalActions.open({ type: MODAL_TYPES.RATE_BOOK }));
  const handleUpdateCommentClick = () => {
    dispatch(
      modalActions.open({
        type: MODAL_TYPES.RATE_BOOK,
        modalInfo: {
          view: 'editCommentModal',
          ...foundUserComment,
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
        <CommentsListStyled data-test-id={dataTestId.REVIEWS}>
          {sortedCommentsByCreatedAt.map((comment) => (
            <Comment key={comment.id} data={comment} />
          ))}
        </CommentsListStyled>
      )}
      {isCommentedBook ? (
        <Button
          className='editCommentButton'
          onClick={handleUpdateCommentClick}
          variant={BUTTON_VARIANTS.MEDIUM}
          dataTestId={dataTestId.BUTTON_RATE_BOOK}
        >
          Изменить оценку
        </Button>
      ) : (
        <Button
          onClick={handleCreateCommentClick}
          variant={BUTTON_VARIANTS.MEDIUM}
          dataTestId={dataTestId.BUTTON_RATE_BOOK}
        >
          оценить книгу
        </Button>
      )}
    </Wrapper>
  );
};

export default CommentsList;
