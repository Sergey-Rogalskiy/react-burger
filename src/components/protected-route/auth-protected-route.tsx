import { Redirect, Route } from 'react-router-dom';
import { useEffect, FC } from 'react';
import { useSelector, useDispatch} from '../../types'
import { getUser } from '../../services/actions/registration';
import { getCookie } from '../../services/utils';
import {useLocation, RouteProps } from 'react-router-dom' 
import { TLocation } from '../../types';

export const AuthProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const user = useSelector(state => state.registration.user)
  const userRequest = useSelector(state => state.registration.userRequest)
  const dispatch = useDispatch()
  const location = useLocation<TLocation>()

  const init = async () => {
      const accessToken = getCookie('accessToken')
      dispatch(getUser(accessToken))
  };

  useEffect(() => {
    init();
  }, []);

  if (userRequest) {
    return <></>;
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
