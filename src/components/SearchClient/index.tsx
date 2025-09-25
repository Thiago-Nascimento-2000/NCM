import { Input, Label } from "./styles";

type Props = {
    name: string;
    value?: string;
    label: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    onClear?: () => void;
}

export function SearchClient({ name, value, label, type, onChange, onClear }: Props) {

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
            {value && onClear && (
          <button
            type="button"
            onClick={onClear}
            className='btn-X'
            >
            ✕
          </button>
        )}
            </div>
    );
}