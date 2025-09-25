
import { GlobalStyle } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { NcmProvider } from './components/Contexto/useNcm';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
        <NcmProvider>
          <GlobalStyle />
          <Router />
          <ToastContainer />
        </NcmProvider>
      </BrowserRouter>
    </>
  )
}

export default App
