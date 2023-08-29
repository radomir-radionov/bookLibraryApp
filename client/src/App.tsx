import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'redux/user';

import AppRouter from './routes/AppRouter';

function App() {
  const dispatch = useDispatch();
  const [ignore, setIgnore] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const user = JSON.parse(localStorage.getItem('userData') || 'null');

    if (jwt && ignore) {
      dispatch(userActions.setJwt({ jwt }));
      dispatch(userActions.setUserData(user));
    }

    return () => setIgnore(true);
  }, [dispatch, ignore]);

  return <AppRouter />;
}
export default App;
