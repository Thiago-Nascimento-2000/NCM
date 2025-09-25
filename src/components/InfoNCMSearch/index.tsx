import { useEffect, useState } from 'react';

import { ContainerInfoNCM, ContentInfoNCM, StatusSpan } from './styles'
import { Ncm } from '../../ConsumoNCM/ConsumoNCM';
import { useNcm } from '../Contexto/useNcm';

type NCMData = {
  Codigo: string;
  Descricao: string;
  Data_Inicio: string;
};

export function InfoNCMSearch() {
    const [ncmData, setNcmData] = useState<NCMData | null>(null);
    const { ncm } = useNcm();
    const [status, setStatus] = useState('');

useEffect(() => {
  async function fetchData() {
    if (ncm.length !== 8) {
      setNcmData(null);
      setStatus('');
      return;
    }

    try {
      const response = await Ncm(ncm);
      const formatado = ncm.replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3");

      if (!response || response.error) {
        setNcmData(null);
        setStatus(`O código ${formatado} é Invalido`);
      } else {
        setNcmData(response);
        setStatus('');
      }
    } catch (error) {
      console.error(error);
      setNcmData(null);
      setStatus(`O código ${ncm} é Invalido`);
    }
  }

  fetchData();
}, [ncm]);

    return (
        <ContainerInfoNCM>
            <ContentInfoNCM>NCM: <StatusSpan status={status}><span>&nbsp; {ncmData?.Codigo ? ncmData?.Codigo : status}</span></StatusSpan></ContentInfoNCM>
            <ContentInfoNCM>Descricao: <span>&nbsp; {ncmData?.Descricao ?? ''}</span></ContentInfoNCM>
            <ContentInfoNCM>Data Inicio: <span>&nbsp; {ncmData?.Data_Inicio ?? ''}</span></ContentInfoNCM>
        </ContainerInfoNCM>
    );
}