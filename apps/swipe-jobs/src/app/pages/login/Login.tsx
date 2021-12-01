import { Button } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = (props: React.Component) => {
  const { auth, setAuth } = useContext(AuthContext) as AuthContextType;
  const history = useHistory();

  const loginUser = () => {
    setAuth({
      isLoggedIn: true,
      user_id: '7f90df6e-b832-44e2-b624-3143d428001f',
    });
    history.push('/job-details');
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Button onClick={loginUser} variant="contained">
        Login
      </Button>
    </div>
  );
};

export default Login;
