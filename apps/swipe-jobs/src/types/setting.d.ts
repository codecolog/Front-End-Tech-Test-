interface ISettings {
  showHeader: boolean;
}

type SettingContextType = {
  settings: ISettings;
  setSettings: (setting: ISettings) => void;
};
