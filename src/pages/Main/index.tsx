import SearchClient from "../../components/SearchClient";
import { InfoNCMSearch } from "../../components/InfoNCMSearch";
import { Container } from "../../components/Container/Container";
import { MainContainer } from "./styles";

export function Main() {

  return (
    <MainContainer>
      <Container>
        <div style={{ width: '100%' }}>
          <SearchClient
            label="Consultar NCM"
            type='number'
            name="Insira o NCM"
          />
          <InfoNCMSearch />
        </div>
      </Container>
    </MainContainer>
  );
}