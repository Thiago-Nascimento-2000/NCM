import { InputCliente, Label } from './styles';

type Props = {
    name: string;
    label: React.ReactNode;
    size?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type: string;
}

export function InputSearchCliente({name, label, size, onChange, value, type}: Props) {
    return (
        <div style={{display: 'flex', flex: '1', flexDirection: 'column', justifyContent: 'center'}}>
            <Label>{label}</Label>
            <InputCliente placeholder={name} style={{width: size}} onChange={onChange} value={value} type={type}/>
        </div>
    );
}