import '../fake-db';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';
import Layout from './layout/layout';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { Router } from 'react-router';
import {
  RouteProvider,
  SettingProvider,
  ThemeProvider,
  AuthProvider,
} from '../context';
import history from '../utils/history';

export function App() {
  return (
    <ReduxProvider store={store}>
      <RouteProvider>
        <ThemeProvider>
          <SettingProvider>
            <AuthProvider>
              <Router history={history}>
                <StyledEngineProvider injectFirst>
                  <CssBaseline />
                  <Layout></Layout>
                </StyledEngineProvider>
              </Router>
            </AuthProvider>
          </SettingProvider>
        </ThemeProvider>
      </RouteProvider>
    </ReduxProvider>
  );
}

export default App;
