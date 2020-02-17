import React from 'react';
import styles from './styles.module.css';

interface Props {
  options?: Record<string, string | number>[] | null;
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
      {options?.map(({ id, name }) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
  </label>
);

export default Dropdown;
