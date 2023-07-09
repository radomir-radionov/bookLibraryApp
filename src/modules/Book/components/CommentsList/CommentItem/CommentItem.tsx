import serverEndpoints from 'constants/apiEndpoints';
import dataTestId from 'constants/dataTestId';

import { DefaultAvatarImg } from 'assets';
import { RatingList } from 'components';
import { TComment } from 'types/book';
import { formatDate } from 'utils/formatDate';

import { Avatar, Comment, CommentDate, CommentItemStyled, Img, Name, NameBox, UserInfo } from './styles';

type TProps = {
  data: TComment;
};

const CommentItem = ({ data }: TProps) => {
  const { rating, user, text, createdAt } = data;
  const { firstName, lastName, avatarUrl } = user;

  return (
    <CommentItemStyled data-test-id={dataTestId.COMMENT_WRAPPER}>
      <UserInfo>
        {user && user.avatarUrl ? <Avatar img={`${avatarUrl}`} /> : <Img src={DefaultAvatarImg} alt='default-avatar' />}
        <NameBox>
          <Name data-test-id={dataTestId.COMMENT_AUTHOR}>
            {firstName} {lastName}
          </Name>
          <CommentDate data-test-id={dataTestId.COMMENT_DATE}>{formatDate(createdAt)}</CommentDate>
        </NameBox>
      </UserInfo>
      <RatingList rating={rating} />
      <Comment data-test-id={dataTestId.COMMENT_TEXT}>{text}</Comment>
    </CommentItemStyled>
  );
};

export default CommentItem;
