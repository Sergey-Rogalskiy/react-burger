import { Redirect, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../services/actions/registration';
import { getCookie } from '../../services/utils';
import {useLocation} from 'react-router-dom' 

export function AuthProtectedRoute({ children, ...rest }) {
  const user = useSelector(state => state.registration.user)
  const userRequest = useSelector(state => state.registration.userRequest)
  const dispatch = useDispatch()
  const location = useLocation()

  const init = async () => {
      const accessToken = getCookie('accessToken')
      dispatch(getUser(accessToken))
  };

  useEffect(() => {
    init();
  }, []);

  if (userRequest) {
    return <div>Loading</div>;
  }
  const path = location?.state?.from?.pathname ? location?.state?.from?.pathname : {state: {from: '/'}}
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          <>
            <Redirect
              to={path}
            />
          </>
        ) : (
          children
        )
      }
    />
  );
}
