import React from 'react';
import styles from './styles.module.css';

interface Props {
  children: React.ReactText[] | string;
}

const Heading: React.FC<Props> = ({ children }: Props) => (
  <h3 className={styles.container}>
    {children}
  </h3>
);

export default Heading;
