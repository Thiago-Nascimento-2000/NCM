import { InputCliente } from './styles';

type Props = {
    name: string;
    label: React.ReactNode;
}

export function InputSearchCliente({name, label}: Props) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            {label}
            <InputCliente placeholder={name}/>
        </div>
    );
}