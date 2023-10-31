import { useDispatch } from 'react-redux';

import AppRouter from './routes/AppRouter';
import { authActions } from 'redux/auth';

const App = () => {
  const dispatch = useDispatch();

  if (localStorage.getItem('token')) dispatch(authActions.checkAuth());

  return <AppRouter />;
};

export default App;
