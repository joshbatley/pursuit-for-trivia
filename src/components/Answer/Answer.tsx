import React from 'react';
import { ReactComponent as Checkmark } from 'assets/checkmark.svg';
import styles from './styles.module.css';

interface Props {
  text: string;
  id: string;
}

const formatId = (id: string) => `button-${id}`;

const Answer: React.FC<Props> = ({ text, id }: Props) => (
  <>
    <input type="checkbox" name={formatId(id)} id={formatId(id)} className={styles.checkbox} />
    <label className={styles.container} htmlFor={formatId(id)}>
      {text}
      <Checkmark className={styles.icon} />
    </label>
  </>
);

export default Answer;
