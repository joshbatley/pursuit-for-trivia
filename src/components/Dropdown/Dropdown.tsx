import React from 'react';
import style from './styles.module.css';

interface Props {
  options?: Record<string, string | number>[] | null;
  placeholder?: string;
  onChange?: (v: string) => void;
}

let v = Symbol.for('selected').toString();

const Dropdown: React.FC<Props> = ({ options, placeholder, onChange = () => { } }: Props) => (
  <select
    data-testid="dropdown"
    className={style.select}
    onChange={({ target }) => onChange(target.value)}
    defaultValue={v}
  >
    {placeholder && (<option value={v} disabled>{placeholder}</option>)}
    {options?.map(({ id, name }) => (
      <option key={id} value={id}>{name}</option>
    ))}
  </select>
);

export default Dropdown;
