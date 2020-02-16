import React from 'react';
import styles from './styles.module.css';

interface Props {
  children: React.ReactChild | React.ReactChild[];
  template?: string;
}

const Grid: React.FC<Props> = ({ children, template }: Props) => (
  <section className={styles.grid} style={{ gridTemplateRows: template }}>
    {children}
  </section>
);

export default Grid;
