import React from 'react';
import { ReactComponent as Checkmark } from 'assets/checkmark.svg';
import Flex from 'components/Flex';
import styles from './styles.module.css';

interface Props {
  text: string;
  id: string;
  name?: string;
}

const formatId = (id: string) => `button-${id}`;

const Answer: React.FC<Props> = ({ text, id, name = 'answer' }: Props) => (
  <div className={styles.container}>
    <input type="radio" name={name} id={formatId(id)} className={styles.checkbox} />
    <label className={styles.label} htmlFor={formatId(id)}>
      {text}
      <Checkmark className={styles.icon} />
    </label>
  </div>
);

export default Answer;
