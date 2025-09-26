import { BiSearchAlt } from 'react-icons/bi';
import { InputCliente, InputContainerSearchClient, Label } from './styles';
import React, { forwardRef } from "react";
import { VscClose } from 'react-icons/vsc';

type Props = {
  name: string;
  label: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  searchIcon?: boolean;
}

export const InputSearchCliente = forwardRef<HTMLInputElement, Props>(
  ({ name, label, onChange, value, type, onFocus, onClear, searchIcon }, ref) => {
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
        {value!.length >= 1 ? (
          <button
            type="button"
            onClick={onClear}
            className='btn-X'
            >
            <VscClose className='icon-close' size={25}/>
          </button>
        ) : (
          searchIcon && (
            <button
              type="button"
              className='btn-X'
            >
              <BiSearchAlt className='icon-search' size={25}/>
           </button>
          )
        )
        }
      </InputContainerSearchClient>
    );
  }
);