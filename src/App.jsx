import { Routes, Route } from 'react-router-dom';
import {CssBaseline, GlobalStyles, } from "@mui/material";
import { ThemeProvider } from '@mui/styles';
import { theme, global, AppContainer } from './template/theme';
import ErrorPage from './pages/ErrorPage';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Game from './pages/Game';
import Art from './pages/Art';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={global} />
      <AppContainer>
          <NavMenu/>  
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/game" element={<Game />} />
            <Route path="/art" element={<Art />} />
            <Route element={<ErrorPage />} />
          </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}