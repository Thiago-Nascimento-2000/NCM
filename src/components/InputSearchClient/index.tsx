import { InputCliente, Label } from './styles';

type Props = {
    name: string;
    label: React.ReactNode;
    size?: string;
}

export function InputSearchCliente({name, label, size}: Props) {
    return (
        <div style={{display: 'flex', flex: '1', flexDirection: 'column', justifyContent: 'center'}}>
            <Label>{label}</Label>
            <InputCliente placeholder={name} style={{width: size}}/>
        </div>
    );
}