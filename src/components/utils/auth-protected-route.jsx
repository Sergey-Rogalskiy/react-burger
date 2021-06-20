import { Redirect, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../services/actions/registration';
import { getCookie } from '../../services/utils';

export function AuthProtectedRoute({ children, ...rest }) {
  const user = useSelector(state => state.registration.user)
  const userRequest = useSelector(state => state.registration.userRequest)
  const userFailed = useSelector(state => state.registration.userFailed)
  const dispatch = useDispatch()

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
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          <>
            {console.log(location)}
            <Redirect
              to={location.state.from.pathname}
            />
          </>
        ) : (
          children
        )
      }
    />
  );
}
