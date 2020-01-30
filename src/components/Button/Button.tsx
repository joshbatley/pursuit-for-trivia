import React from 'react';
import style from './styles.module.css';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Button: React.FC<Props> = ({ children }: Props) => (
  <button type="button" className={style.box}>{ children }</button>
);

export default Button;
