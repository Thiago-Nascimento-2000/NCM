
import { GlobalStyle } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { NcmProvider } from './components/Contecto/useNcm';

function App() {
  return (
    <>
      <BrowserRouter>
        <NcmProvider>
          <GlobalStyle />
          <Router />
        </NcmProvider>
      </BrowserRouter>
    </>
  )
}

export default App
