import { Nav } from './styles';

import logo from '../../assets/logo.png';
import namelogo from '../../assets/NCMFinderBranco.png';
import { LuUser } from 'react-icons/lu';
import { GoCheckCircle, GoRocket } from 'react-icons/go';
import CardInfo from '../Card/Index';
import { NavLink } from 'react-router-dom';
import { Container } from '../Container/Container';
import { IoSearchOutline } from 'react-icons/io5';
import { BiMailSend } from 'react-icons/bi';


function Header() {
  return (
    <div style={{ width: '100%', padding: '0 100px 0 100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container>
        <Nav>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <img src={logo} />
            <img src={namelogo} className='logoname' />
          </div>
          <ul>
            <li><NavLink to="/" style={{display:'flex', alignItems:'center', gap:'0.5rem'}} className={({ isActive }) => (isActive ? 'active' : '')}><IoSearchOutline /> Consultar NCM</NavLink></li>
            <li><NavLink to="/ncm" style={{display:'flex', alignItems:'center', gap:'0.5rem'}} className={({ isActive }) => (isActive ? 'active' : '')}><BiMailSend /> Envio de NCM</NavLink></li>
          </ul>
        </Nav>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '1rem', padding: '1rem 0 1rem 0', borderRadius: '20px', gap: '1rem' }}>
          <CardInfo icon={<LuUser />} name='Clientes' numberinfo='47' />
          <CardInfo icon={<GoCheckCircle />} name='NCM Atualizados' numberinfo='04/09/25'/>
          <CardInfo icon={<GoRocket />} name='Sem Dados' numberinfo='0'/>
        </div>
      </Container>
    </div>
  );
}

export default Header
