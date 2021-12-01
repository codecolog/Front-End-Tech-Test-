import { IThemeColor } from '../colors';

interface IThemePaletteCommon {
  black?: string;
  white?: string;
}

interface IThemePaletteText {
  primary: string;
  secondary?: string;
  disabled?: string;
}

interface IThemePaletteSystem {
  [id: string]: IThemeColor;
}

interface IThemePaletteBackground {
  default: string;
  paper: string;
}

export interface IThemePalette {
  mode: 'dark' | 'light';
  common?: IThemePaletteCommon;
  primary?: IThemeColor;
  secondary?: IThemeColor;
  text?: IThemePaletteText;
  system?: IThemePaletteSystem;
  background?: IThemePaletteBackground;
}

export { default as dark } from './dark';
export { default as light } from './light';
export { default as solarized } from './solarized';
