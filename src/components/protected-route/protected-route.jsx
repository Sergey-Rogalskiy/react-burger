import { Redirect, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getUser } from '../../services/actions/registration';
import { getCookie } from '../../services/utils';

export function ProtectedRoute({ children, ...rest }) {
  const user = useSelector(state => state.registration.user)
  const dispatch = useDispatch()

  const init = async () => {
      const accessToken = getCookie('accessToken')
      dispatch(getUser(accessToken))
  };

  useEffect(() => {
    init();
  }, []);

  // if (userRequest) {
  //   return <div>Loading</div>;
  // }

  return (
    <Route
      {...rest}
      render={({ location }) =>
      user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
