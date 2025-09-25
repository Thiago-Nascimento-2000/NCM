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
import { useEffect, useState } from 'react';

export function Header() {
  const [dataat, setDataAt] = useState<string>('...');
  const [client, setClient] = useState<number | string>('...');

  const URLVPN = 'http://192.168.51.252:5000/atualiza_clientes_vpn';
  const { searchData } = useSearchApi(undefined, URLVPN);

useEffect(() => {
  if (searchData.length === 0) {
    setClient('...');
  } else {
    setClient(searchData.length);
  }
}, [searchData]);

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
      const dataAtJSON = new Date();
      

      const dia = String(dataAtJSON.getDate()).padStart(2, '0');
      const mes = String(dataAtJSON.getMonth() + 1).padStart(2, '0');
      const ano = String(dataAtJSON.getFullYear()).slice(-2);

      setDataAt (`${dia}/${mes}/${ano}`);
      console.log(data);
    })
    .catch((err) => {
      console.error("Erro na API:", err);
      setDataAt('Falha');
    });
}, []);

  return (
    <Container>
      <div className='Width'>
        <Nav>
          <div className='logo'>
            <img src={logo} />
            <img src={namelogo} className='logoname' />
          </div>
          <ul>
            <li><NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className={({ isActive }) => (isActive ? 'active' : '')}><IoSearchOutline /> Consultar NCM</NavLink></li>
            <li><NavLink to="/ncm" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className={({ isActive }) => (isActive ? 'active' : '')}><BiMailSend /> Envio de NCM</NavLink></li>
          </ul>
        </Nav>
        <div className='Container-Card'>
          <CardInfo icon={<GoCheckCircle />} name='NCM Atualizados' numberinfo={dataat} />
          <CardInfo icon={<LuUser />} name='Clientes' numberinfo={client?.toString()} />
          <CardInfo icon={<GoRocket />} name='Sem Dados' numberinfo='0' />
        </div>
      </div>
    </Container>
  );
}
