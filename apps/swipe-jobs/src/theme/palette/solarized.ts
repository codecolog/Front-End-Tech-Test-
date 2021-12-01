import { IThemePalette } from '.';
import { paleRed, rhino } from '../colors';
import white from '../colors/white';

const solarized: IThemePalette = {
  mode: 'dark',
  text: {
    primary: 'rgb(255,255,255)',
    secondary: 'rgb(229, 231, 235)',
    disabled: 'rgb(156, 163, 175)',
  },
  primary: white,
  secondary: rhino,
  background: {
    paper: '#23354E',
    default: '#1B2A3F',
  },
};

export default solarized;
