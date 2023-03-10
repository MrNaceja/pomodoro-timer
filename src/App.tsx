
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from './styles/themes/Default';
import { GlobalStyle } from './styles/Global';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home    from './pages/Home';
import History from './pages/History';
import DefaultLayout from './styles/layouts/DefaultLayout';
import { EnumRoutes } from './enum/EnumRoutes';
import ContextCyclesProvider from './Contexts/ContextCyclesProvider';

export default function App() {
  return (
      <ThemeProvider theme={DEFAULT_THEME}>
        <GlobalStyle/>
        <BrowserRouter>
        <ContextCyclesProvider>
            <Routes>
              <Route path={EnumRoutes.HOME} element={<DefaultLayout/>}>
                <Route path={EnumRoutes.HOME} element={<Home/>}/>
                <Route path={EnumRoutes.HISTORY} element={<History/>}/>
              </Route>
            </Routes>
          </ContextCyclesProvider>
        </BrowserRouter>
      </ThemeProvider>
  )
}
