import React from 'react';
import styles from './styles.module.css';

interface Props {
  text: string;
}

const Question: React.FC<Props> = ({ text }: Props) => (
  <div className={styles.container}>
    {text}
  </div>
);

export default Question;
