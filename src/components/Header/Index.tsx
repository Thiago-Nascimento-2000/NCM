import { Nav } from './styles';
import { CardInfo } from '../Card/Index';
import { Container } from '../Container';

import { LuUser } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import { BiMailSend } from 'react-icons/bi';
import { GoCheckCircle, GoRocket } from 'react-icons/go';

import logo from '../../assets/logo.png';
import namelogo from '../../assets/NCMFinderBranco.png';
import { useSearchApi } from '../../hooks/useSearchApi';
import { useEffect } from 'react';

function Header() {

const URLVPN = 'http://192.168.51.252:5000/atualiza_clientes_vpn';
const { searchData } = useSearchApi(undefined, URLVPN);
const quantityClient = searchData.length;

useEffect(() => {
  const URL = 'http://192.168.51.252:5000/atualiza_json';

  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    //Body//
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("API DATA CARD:", data);
    })
    .catch((err) => {
      console.error("Erro na API:", err);
    });
}, []);



  return (
    <Container>
      <div className='Width'>
        <Nav>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logo} />
            <img src={namelogo} className='logoname' />
          </div>
          <ul>
            <li><NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className={({ isActive }) => (isActive ? 'active' : '')}><IoSearchOutline /> Consultar NCM</NavLink></li>
            <li><NavLink to="/ncm" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className={({ isActive }) => (isActive ? 'active' : '')}><BiMailSend /> Envio de NCM</NavLink></li>
          </ul>
        </Nav>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '2rem', padding: '1rem 0 1rem 0', borderRadius: '20px', gap: '2rem', flexWrap: 'wrap' }}>
          <CardInfo icon={<LuUser />} name='Clientes' numberinfo={quantityClient.toString()} />
          <CardInfo icon={<GoCheckCircle />} name='NCM Atualizados' numberinfo='04/09/25' />
          <CardInfo icon={<GoRocket />} name='Sem Dados' numberinfo='0' />
        </div>
      </div>
    </Container>
  );
}

export default Header
