import { BiMailSend } from "react-icons/bi";
import Button from "../../components/Button";
import { MainContainer } from "./styles";
import { InputSearchCliente } from "../../components/InputSearchClient";

export function Ncm() {
    return (
            <MainContainer>
                <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center'}}>
                    <InputSearchCliente name="Selecione a loja" label='Envio de NCM Invalido'/>
                    <Button name='Enviar' icon={<BiMailSend />}/>
                </div>
            </MainContainer>
    );
}