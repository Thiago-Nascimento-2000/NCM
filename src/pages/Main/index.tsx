import { IoSearchOutline } from "react-icons/io5";

import Button from "../../components/Button";
import SearchClient from "../../components/SearchClient";

import { MainContainer } from "./styles";
import { InfoNCMSearch } from "../../components/InfoNCMSearch";
import { Footer } from "../../components/Footer";

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