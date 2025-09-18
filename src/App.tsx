
import { GlobalStyle } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { NcmProvider } from './components/Contecto/useNcm';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
        <NcmProvider>
          <GlobalStyle />
          <Router />
          <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        </NcmProvider>
      </BrowserRouter>
    </>
  )
}

export default App
