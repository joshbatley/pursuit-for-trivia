import React from 'react';
import style from './styles.module.css';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }: Props) => (
  <button type="button" className={style.box} onClick={onClick}>{ children }</button>
);

export default Button;
