import { Input, Label } from "./styles";

type Props = {
    name: string;
    label: React.ReactNode;
}

function SearchClient({name, label}: Props){
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative'}}>
        <Label>{label}</Label>
        <div style={{display: "flex", flexDirection: "column"}}>
        <Input placeholder={name}/>
        </div>
        </div>
    );
}

export default SearchClient;