import { SearchClient } from "../../components/SearchClient";
import { InfoNCMSearch } from "../../components/InfoNCMSearch";
import { Container } from "../../components/Container";
import { MainContainer } from "./styles";

export function Main() {

  return (
    <Container>
      <MainContainer>
        <div className="Width">
          <SearchClient
            label="Consultar NCM"
            type='number'
            name="Insira o NCM"
          />
          <InfoNCMSearch />
        </div>
      </MainContainer>
    </Container>
  );
}