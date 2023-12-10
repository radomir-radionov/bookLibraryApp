import { useEffect } from 'react';
import { socketService } from 'services';
import { useDispatch } from 'react-redux';
import { authActions } from 'redux/auth';

const useSocketSetup = () => {
  const dispath = useDispatch();

  //   useEffect(() => {
  //     socketService.connect();
  //     socketService.on('connect_error', () => {
  //       dispath(authActions.postLogout());
  //     });

  //     return () => {
  //       socketService.off('connect_error');
  //     };
  //   });
};

export default useSocketSetup;
