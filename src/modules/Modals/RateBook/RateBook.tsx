import dataTestId from 'constants/dataTestId';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { modalActions } from 'redux/modal';
import { selectModalInfo } from 'redux/modal/selectors';
import { userActions } from 'redux/user';
import { selectUser } from 'redux/user/selectors';
import { Button, ButtonAction } from 'components';
import { BUTTON_VARIANTS } from 'types/button';

import { Rating } from '..';

import { ActionCloseIcon, BtnField, CloseBtnBox, Form, Header, ModalStyled, Textarea, Title } from './styles';

type TProps = {
  onClose: () => void;
};

type FormValues = {
  rating: number;
  text: string;
};

const RateBook = ({ onClose }: TProps) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const modalInfo = useSelector(selectModalInfo);
  const location = useLocation();
  const pathData = location.pathname.split('/');
  const defaultRating = modalInfo?.rating ? modalInfo.rating : 1;
  const defaultComment = modalInfo?.text ? modalInfo?.text : '';

  const { register, handleSubmit, control } = useForm<FormValues>({
    defaultValues: { rating: defaultRating, text: defaultComment },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (user) {
      if (modalInfo?.view === 'editCommentModal') {
        const payload = {
          commentId: modalInfo.id,
          data: { rating: data.rating, text: data.text, book: modalInfo.bookId.toString(), user: user.id.toString() },
        };
        dispatch(userActions.putComment(payload));
      } else if (pathData[3]) {
        dispatch(userActions.postComments({ ...data, book: pathData[3], user: user.id.toString() }));
      } else if (modalInfo.id) {
        dispatch(userActions.postComments({ ...data, book: modalInfo.id, user: user.id.toString() }));
      }
    }
  };

  const handleCloseModalClick = () => dispatch(modalActions.close());

  return (
    <ModalStyled>
      <Form onSubmit={handleSubmit(onSubmit)} data-test-id={dataTestId.MODAL_RATE_BOOK}>
        <Header>
          <Title data-test-id={dataTestId.MODAL_TITLE}>
            {modalInfo?.view === 'editCommentModal' ? 'Хотите изменить оценку?' : 'Оцените книгу'}
          </Title>
          <CloseBtnBox>
            <ButtonAction value='searching' onClick={handleCloseModalClick} dataTestId={dataTestId.MODAL_CLOSE_BUTTON}>
              <ActionCloseIcon />
            </ButtonAction>
          </CloseBtnBox>
        </Header>
        <Rating control={control} defaultRating={defaultRating} />
        <Textarea placeholder='Оставить отзыв' {...register('text')} data-test-id={dataTestId.COMMENT} />
        <BtnField>
          <Button type='submit' variant={BUTTON_VARIANTS.MEDIUM} dataTestId={dataTestId.BUTTON_COMMENT}>
            {modalInfo?.view === 'editCommentModal' ? 'изменить оценку' : 'оценить'}
          </Button>
        </BtnField>
      </Form>
    </ModalStyled>
  );
};

export default RateBook;
