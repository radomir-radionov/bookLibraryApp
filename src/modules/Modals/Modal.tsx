import dataTestId from 'constants/dataTestId';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from 'redux/modal';
import { modalTypeSelector } from 'redux/modal/selectors';
import { MODALS_MAPPING } from 'types/modal';

import { Wrapper } from './styles';

const Modal = () => {
  const dispatch = useDispatch();
  const modalType: string = useSelector(modalTypeSelector);
  const ModalComponent = MODALS_MAPPING[modalType];

  const handleCloseModal = () => dispatch(modalActions.close());
  const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) =>
    event.target === event.currentTarget && handleCloseModal();

  useEffect(() => {
    modalType ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
  }, [modalType]);

  return (
    <>
      {modalType && (
        <Wrapper onClick={handleWrapperClick} data-test-id={dataTestId.MODAL_OUTER}>
          <ModalComponent onClose={handleCloseModal} />
        </Wrapper>
      )}
    </>
  );
};

export default Modal;
