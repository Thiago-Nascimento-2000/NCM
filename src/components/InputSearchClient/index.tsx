import { InputCliente, InputContainerSearchClient, Label } from './styles';
import React, { forwardRef } from "react";

type Props = {
  name: string;
  label: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}

export const InputSearchCliente = forwardRef<HTMLInputElement, Props>(
  ({ name, label, onChange, value, type, onFocus, onClear }, ref) => {
    return (
      <InputContainerSearchClient>
        <Label>{label}</Label>
        <InputCliente
          placeholder={name}
          onChange={onChange}
          value={value}
          type={type}
          onFocus={onFocus}
          ref={ref}
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
      </InputContainerSearchClient>
    );
  }
);