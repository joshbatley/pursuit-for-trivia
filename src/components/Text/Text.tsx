import React from 'react';
import styles from './styles.module.css';

interface Props {
  children: string;
  size?: number | string;
}

const Text: React.FC<Props> = ({ children, size }: Props) => (
  <span className={styles.text} style={{ fontSize: size }}>
    {children}
  </span>
);

export default Text;
