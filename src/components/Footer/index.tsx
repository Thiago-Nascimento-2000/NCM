import { Container } from "../Container";
import { FooterBase } from "./styles";


export function Footer() {
    return (
        <Container>
            <FooterBase>
                <div className="Width">
                    <hr />
                    <span>Versão: 1.0</span>
                </div>
            </FooterBase>
        </Container>
    );
}