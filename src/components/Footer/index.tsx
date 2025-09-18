import { Container } from "../Container/Container";
import { FooterBase } from "./styles";


export function Footer() {
    return (
        <FooterBase>
            <Container>
                    <hr />
                    <span>Versão: 1.0</span>
            </Container>
        </FooterBase>
    );
}