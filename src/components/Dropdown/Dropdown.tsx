import React from 'react';
import { isObj } from 'utils';
import styles from './styles.module.css';


type Option = Record<string, string | number> | string | number;

interface Props {
  options?: Option[] | null;
  placeholder?: string;
  onChange?: (v: string) => void;
}

let v = Symbol.for('selected').toString();

const Dropdown: React.FC<Props> = ({ options, placeholder, onChange = () => { } }: Props) => (
  <label className={styles.label}>
    {placeholder}
    <select
      className={styles.select}
      data-testid="dropdown"
      onChange={({ target }) => onChange(target.value)}
      defaultValue={v}
    >
      {placeholder && (<option value={v} disabled>{placeholder}</option>)}
      {options && options?.map((o: Option, idx: number) => (isObj(o) ? (
        <option key={o.id} value={o.id}>{o.name}</option>
      ) : (
        <option key={idx} value={o}>{o}</option>
      )))}
    </select>
  </label>
);

export default Dropdown;
