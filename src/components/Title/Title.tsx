import React from 'react';
import style from './style.module.css';

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }: Props) => (
  <h1 className={style.h1}>{children}</h1>
);

export default Title;
