import dataTestId from 'constants/dataTestId';

import { DefaultAvatarImg } from 'assets';
import { RatingList } from 'components';
import { TComment } from 'types/book';
import { formatDate } from 'utils/formatDate';

import { Avatar, CommentText, CommentDate, CommentStyled, Img, Name, NameBox, UserInfo } from './styles';
import base64ToBlobAndUrl from 'utils/base64ToBlobAndUrl';

type TProps = {
  data: TComment;
};

const Comment = ({ data }: TProps) => {
  const { rating, user, text, createdAt } = data;
  const { firstName, lastName, avatar } = user;
  const blobUrl = avatar && base64ToBlobAndUrl(avatar.data, 'png');

  return (
    <CommentStyled data-test-id={dataTestId.COMMENT_WRAPPER}>
      <UserInfo>
        {user && user.avatar ? <Avatar img={blobUrl || ''} /> : <Img src={DefaultAvatarImg} alt='default-avatar' />}
        <NameBox>
          <Name data-test-id={dataTestId.COMMENT_AUTHOR}>
            {firstName} {lastName}
          </Name>
          <CommentDate data-test-id={dataTestId.COMMENT_DATE}>{formatDate(createdAt)}</CommentDate>
        </NameBox>
      </UserInfo>
      <RatingList rating={rating} />
      <CommentText data-test-id={dataTestId.COMMENT_TEXT}>{text}</CommentText>
    </CommentStyled>
  );
};

export default Comment;
