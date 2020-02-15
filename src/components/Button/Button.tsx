import React from 'react';
import styles from './styles.module.css';

interface Props {
  children: React.ReactChild;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, onClick, disabled }: Props) => (
  <button type="button" className={styles.box} onClick={onClick} disabled={disabled}>{ children }</button>
);

export default Button;
