import React from 'react';
import style from './styles.module.css';


interface Props {
  answer: string;
}

const AnswerBox: React.FC<Props> = ({ answer }: Props) => (
  <div className={style.box}>
    {answer}
  </div>
);

export default AnswerBox;
