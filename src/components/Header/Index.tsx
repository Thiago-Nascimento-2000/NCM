import { Nav } from './styles';

import logo from '../../assets/logo.png';
import namelogo from '../../assets/NCMFinderBranco.png';

function Header() {
  return (
    <div style={{width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Nav>
      <img src={logo}/>
      <img src={namelogo} className='logoname'/>
        <ul>
            <li><a href="#" className='active'>Consultar NCM</a></li>
            <li><a href="#">Envio de NCM</a></li>
        </ul>
    </Nav>
    </div>
  )
}

export default Header
