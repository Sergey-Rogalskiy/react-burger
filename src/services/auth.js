import { useState  } from 'react';
import { getUserRequest, loginRequest } from './real-service';
import { setCookie } from './utils';

export function useProvideAuth() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    return await getUserRequest()
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUser({ ...data.user, id: data.user._id });
        }
        return data.success;
      });
  };

  const signIn = async form => {
    const data = await loginRequest(form)
      .then(res => {
        let authToken;
        res.headers.forEach(header => {
          if (header.indexOf('Bearer') === 0) {
            authToken = header.split('Bearer ')[1];
          }
        });
        if (authToken) {
          setCookie('token', authToken);
        }
        return res.json();
      })
      .then(data => data);

    if (data.success) {
      setUser({ ...data.user, id: data.user._id });
    }
  };

  const signOut = cb => {
    await logoutRequest()
    setUser(null);
    deleteCookie('token');
  };

  return {
    user,
    getUser,
    signIn,
    signOut
  };
}
