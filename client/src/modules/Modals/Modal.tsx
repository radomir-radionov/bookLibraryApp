import dataTestId from 'constants/dataTestId';

import { useEffect, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from 'redux/modal';
import { modalTypeSelector } from 'redux/modal/selectors';
import { MODALS_MAPPING } from 'types/modal';

import { Wrapper } from './styles';

const Modal = () => {
  const dispatch = useDispatch();
  const modalType: string = useSelector(modalTypeSelector);
  const ModalComponent = MODALS_MAPPING[modalType];

  const onOutsideClick = (event: MouseEvent<HTMLDivElement>) =>
    event.target === event.currentTarget && dispatch(modalActions.close());

  useEffect(() => {
    modalType ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
  }, [modalType]);

  return (
    <>
      {modalType && (
        <Wrapper onClick={onOutsideClick} data-test-id={dataTestId.MODAL_OUTER}>
          <ModalComponent />
        </Wrapper>
      )}
    </>
  );
};

export default Modal;
