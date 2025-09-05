import { Nav } from './styles';

import logo from '../../assets/logo.png';
import namelogo from '../../assets/NCMFinderBranco.png';
import { LuUser } from 'react-icons/lu';
import { GoCheckCircle, GoRocket } from 'react-icons/go';
import CardInfo from '../Card/Index';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <>
    <div style={{width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Nav>
      <img src={logo}/>
      <img src={namelogo} className='logoname'/>
        <ul>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Consultar NCM</NavLink></li>
            <li><NavLink to="/ncm" className={({ isActive }) => (isActive ? 'active' : '')}>Envio de NCM</NavLink></li>
        </ul>
    </Nav>
    </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardInfo icon={<LuUser />} name='Clientes' numberinfo='47' />
        <CardInfo icon={<GoCheckCircle />} name='NCM Atualizados' numberinfo='04/09/2025' />
        <CardInfo icon={<GoRocket />} name='Lorem Ipsun' numberinfo='25' />
      </div>
    </>
  );
}

export default Header
