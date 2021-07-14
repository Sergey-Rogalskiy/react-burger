import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useEffect, FC } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getUser } from '../../services/actions/registration';
import { getCookie } from '../../services/utils';

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const user = useSelector((state:any) => state.registration.user)
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
