import { SearchClient } from "../../components/SearchClient";
import { InfoNCMSearch } from "../../components/InfoNCMSearch";
import { Container } from "../../components/Container";
import { MainContainer } from "./styles";
import { useNcm } from "../../components/Contexto/useNcm";
import { Ncm } from "../../ConsumoNCM/ConsumoNCM";

export function Main() {
  const { ncm, setNcm } = useNcm();
  
  function handleNcm(e: React.ChangeEvent<HTMLInputElement>) {
    setNcm(e.target.value);
      Ncm(ncm);
  }
  
  function clearNcmInput(){
    setNcm('');
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
              onClear={clearNcmInput}
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