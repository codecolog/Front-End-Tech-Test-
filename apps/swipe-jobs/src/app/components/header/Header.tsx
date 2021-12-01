import { ThemeContext, AuthContext } from '../../../context';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { IWorker } from '../../../fake-db/db/worker-db';
import { solarized, dark, light, ThemeContextType } from '../../../theme';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledDropdown = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.primary['500'],
      color: theme.palette.getContrastText(theme.palette.primary['500']),
      'ul li:hover': {
        backgroundColor: theme.palette.primary['A400'],
      },
    },
  };
});

const Header = ({ user }: { user: IWorker | undefined }) => {
  const [dropdown, setDropdown] = useState(false);

  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;
  const { auth, setAuth } = useContext(AuthContext) as AuthContextType;
  const history = useHistory();

  const updateTheme = () => {
    console.log('Theme', theme);
    if (theme.palette.mode === 'light') {
      changeTheme(solarized);
    } else {
      changeTheme(light);
    }
    setDropdown(false);
  };

  const logoutUser = () => {
    history.push('/login');
    setAuth({
      isLoggedIn: false,
      user_id: '',
    });
  };

  return (
    <div className="bg-black text-white w-full flex justify-between items-stretch p-3 pl-4 pr-4">
      <img className="w-32" src="assets/logo.png" alt="Logo" />
      {user && (
        <p onClick={() => setDropdown(!dropdown)} className="cursor-pointer">
          {user?.firstName + ' ' + user?.lastName}
        </p>
      )}

      {dropdown && (
        <>
          <div
            className="absolute top-0 left-0 w-full h-full bg-transparent z-10"
            onClick={() => setDropdown(false)}
          ></div>
          <StyledDropdown className="absolute top-12 right-5 w-48 z-20">
            <ul>
              <li className="p-3 cursor-pointer">
                <p onClick={updateTheme}>Change Theme</p>
              </li>
              <li className="p-3 cursor-pointer">
                <p onClick={logoutUser}>Logout</p>
              </li>
            </ul>
          </StyledDropdown>
        </>
      )}
    </div>
  );
};

export default Header;
