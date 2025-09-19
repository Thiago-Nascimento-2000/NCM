
import { useNcm } from '../Contecto/useNcm';
import { Input, Label } from "./styles";

type Props = {
    name: string;
    label: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
}

export function SearchClient({ name, label, type }: Props) {
    const { ncm, setNcm } = useNcm();
    console.log("Input NCM", ncm);

    return (
            <div style={{display: 'flex', flex: '1', flexDirection: 'column', justifyContent: 'center'}}>
            <Label>{label}</Label>
            <Input
                placeholder={name}
                value={ncm}
                type={type}
                onChange={(e) => setNcm(e.target.value)}
            />
            </div>
    );
}