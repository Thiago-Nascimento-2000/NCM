
import { GlobalStyle } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <Router/>
    </BrowserRouter>
    </>
  )
}

export default App
