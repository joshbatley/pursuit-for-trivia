import React from 'react';
import styles from './styles.module.css';

interface Props {
  children: React.ReactChild | React.ReactChild[];
  template?: string;
  gutter?: string;
}

const Grid: React.FC<Props> = ({ children, template, gutter }: Props) => {
  const style = {
    gridTemplateRows: template,
    padding: gutter,
  };
  return (
    <section className={styles.grid} style={style}>
      {children}
    </section>
  );
};

export default Grid;
