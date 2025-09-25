import { Input, Label } from "./styles";

type Props = {
    name: string;
    value?: string;
    label: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
}

export function SearchClient({ name, value, label, type, onChange }: Props) {

    return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <Label>{label}</Label>
            <Input
                placeholder={name}
                value={value}
                type={type}
                onChange={(e) => {
                    onChange?.(e);
                }}
            />
            </div>
    );
}