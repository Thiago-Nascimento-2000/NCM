import { SearchClient } from "../../components/SearchClient";
import { InfoNCMSearch } from "../../components/InfoNCMSearch";
import { Container } from "../../components/Container";
import { MainContainer } from "./styles";
import { useNcm } from "../../components/Contexto/useNcm";
import { useState } from "react";

export function Main() {
  const { ncm, setNcm } = useNcm();
  const [status, setStatus] = useState<string | null>('');

  async function Ncm(ncm: any): Promise<any> {
    const URL = 'http://192.168.51.252:5000/ncm';
    try {
      const res = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ncm })
      });

      if (!res.ok) {
        console.log('Erro na requisição');
        setStatus('Cancelado');
      }

      const data = await res.json();
      console.log('Resposta da API:', data);
      return data;
    } catch (error: any) {
      console.error('Erro na requisição:', error.message);
      return null;
    }
  }

  function handleNcm(e: React.ChangeEvent<HTMLInputElement>) {
    setNcm(e.target.value);
    setStatus('');
    const quantityLengthNcm = ncm.length === 7;
    if (quantityLengthNcm) {
      Ncm(ncm);
    }
  }

  return (
    <Container>
      <MainContainer>
        <div className="Width">
          <div className="container-info">
            <SearchClient
              label="Consultar NCM"
              value={ncm}
              onChange={handleNcm}
              type='number'
              name="Insira o NCM"
            />
            {status === 'Cancelado' && (
              <p style={{ color: 'red', fontWeight: 'bold', zIndex: 20 }}>Cancelado</p>
            )}
            <InfoNCMSearch />
          </div>
        </div>
      </MainContainer>
    </Container>
  );
}