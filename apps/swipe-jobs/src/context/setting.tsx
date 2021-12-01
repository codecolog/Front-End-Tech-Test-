import { createContext, useState, FC, ReactNode } from 'react';

export const SettingContext = createContext<SettingContextType | null>(null);

export const SettingProvider: FC<ReactNode> = ({ children }) => {
  const [settings, setSettings] = useState<ISettings>({
    showHeader: true,
  });

  return (
    <SettingContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;
