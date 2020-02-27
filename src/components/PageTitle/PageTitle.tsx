import React from 'react';
import styles from './styles.module.css';

interface Props {
  children: React.ReactChild | React.ReactText[];
}

const PageTitle: React.FC<Props> = ({ children }: Props) => (
  <h1 className={styles.h1}>{children}</h1>
);

export default PageTitle;
