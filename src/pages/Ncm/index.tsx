import { BiMailSend } from "react-icons/bi";
import Button from "../../components/Button";
import { MainContainer } from "./styles";
import { InputSearchCliente } from "../../components/InputSearchClient";
import { Container } from "../../components/Container/Container";

export function Ncm() {
    return (
        <MainContainer>
            <Container>
                <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <InputSearchCliente name="Selecione a loja" label='Envio de NCM Invalido' />
                    <InputSearchCliente name="Insira o e-mail" label={undefined} size="450px" />
                    <Button name='Enviar' icon={<BiMailSend />} />

                    <div className="help-list">
                        <h2>Passos para Realizar o Processo</h2>
                        <br />
                        <ol>
                            <li>Selecione a loja</li>
                            <li>Insira o e-mail para recebimento do arquivo .csv com os ncms invalidos</li>
                            <li>Clique no botão enviar para efetuar o envio do email</li>
                            <li>Verifique sua caixa de entrada e spam</li>
                        </ol>
                    </div>
                </div>
            </Container>
        </MainContainer>
    );
}