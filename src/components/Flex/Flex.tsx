import React from 'react';
import styles from './styles.module.css';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

const Flex: React.FC<Props> = ({ children }: Props) => (
  <div className={styles.flex}>
    {children}
  </div>
);

export default Flex;
