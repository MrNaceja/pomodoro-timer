
import { ThemeProvider } from 'styled-components';
import { DEFAULT_THEME } from './styles/themes/Default';
import { GlobalStyle } from './styles/Global';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home    from './pages/Home';
import History from './pages/History';
import DefaultLayout from './styles/layouts/DefaultLayout';

export default function App() {
  return (
      <ThemeProvider theme={DEFAULT_THEME}>
        <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DefaultLayout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/history' element={<History/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  )
}
