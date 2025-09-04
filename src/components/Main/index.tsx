import { IoSearchOutline } from "react-icons/io5";
import Button from "../Button";
import SearchClient from "../SearchClient";
import { MainContainer } from "./styles";
import { InfoNCMSearch } from "../InfoNCMSearch";
import { Footer } from "../Footer";

export function Main() {
    return (
        <MainContainer>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center'}}>
                <SearchClient label='Consultar NCM' name='Insira o NCM'/>
                <Button name="Consultar" icon={<IoSearchOutline />}/>
            </div>
            <InfoNCMSearch name={""} value={undefined}/>
            <Footer/>
        </MainContainer>
    );
}