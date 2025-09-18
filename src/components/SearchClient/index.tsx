import { useNcm } from '../Contecto/useNcm';
import { Input, Label } from "./styles";

type Props = {
    name: string;
    label: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchClient({ name, label }: Props) {
    const { ncm, setNcm } = useNcm();
    console.log("Input NCM", ncm);

    return (
        <div style={{ display: 'flex', flex: '1', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
            <Label>{label}</Label>
            <Input
                placeholder={name}
                value={ncm}
                onChange={(e) => setNcm(e.target.value)}
            />
        </div>
    );
}

export default SearchClient;