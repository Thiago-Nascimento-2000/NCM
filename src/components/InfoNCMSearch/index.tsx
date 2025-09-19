import { useEffect, useState } from 'react';

import { ContainerInfoNCM, ContentInfoNCM } from './styles'
import { Ncm } from '../../ConsumoNCM/ConsumoNCM';
import { useNcm } from '../Contecto/useNcm';

type NCMData = {
  Codigo: string;
  Descricao: string;
  Data_Inicio: string;
};

export function InfoNCMSearch() {
    const [ncmData, setNcmData] = useState<NCMData | null>(null);
    const { ncm } = useNcm();

    useEffect(() => {
        async function fetchData() {
            if(ncm.length == 8){
                const response = await Ncm(ncm);
                setNcmData(response);
            } else {
                setNcmData(null);
            }
        }

        fetchData();
    }, [ncm]);

    return (
        <ContainerInfoNCM>
            <ContentInfoNCM>NCM: <span>&nbsp; {ncmData?.Codigo ?? ''}</span></ContentInfoNCM>
            <ContentInfoNCM>Descricao: <span>&nbsp; {ncmData?.Descricao ?? ''}</span></ContentInfoNCM>
            <ContentInfoNCM>Data Inicio: <span>&nbsp; {ncmData?.Data_Inicio ?? ''}</span></ContentInfoNCM>
        </ContainerInfoNCM>
    );
}