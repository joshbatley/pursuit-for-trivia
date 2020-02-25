import React from 'react';
import { ReactComponent as Checkmark } from 'assets/checkmark.svg';
import classname from 'classnames';
import styles from './styles.module.css';

interface Props {
  text: string;
  id: string | number;
  name?: string;
  onChange: (e: string) => void;
  isAnswer?: boolean | null;
}

const formatId = (id: string | number) => `button-${id}`;

const Answer: React.FC<Props> = ({
  text, id, name = 'answer', onChange, isAnswer,
}: Props) => (
  <div
    className={classname(
      styles.container,
      (isAnswer != null && (isAnswer ? styles.correct : styles.incorrect)),
    )}
  >
    <input type="radio" name={name} id={formatId(id)} className={styles.checkbox} value={text} onChange={({ target }) => onChange(target.value)} />
    <label className={styles.label} htmlFor={formatId(id)}>
      {text}
      <Checkmark className={styles.icon} />
    </label>
  </div>
);

export default Answer;
