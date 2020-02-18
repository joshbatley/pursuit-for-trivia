import React from 'react';
import styles from './styles.module.css';

interface Props {
  children: React.ReactChild | React.ReactChild[];
  style?: Record<string, string | number>;
}

const Flex: React.FC<Props> = ({ children, style }: Props) => (
  <div className={styles.flex} style={style}>
    {children}
  </div>
);

export default Flex;
