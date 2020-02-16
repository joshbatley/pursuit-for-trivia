import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface Props {
  children: React.ReactChild;
  onClick?: () => void;
  disabled?: boolean;
  to?: string;
}

const Button: React.FC<Props> = ({
  children, onClick, disabled, to, ...props
}: Props) => {
  const btn = (
    <button
      type="button"
      className={styles.box}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      { children }
    </button>
  );

  if (to && to.length > 0) {
    return (
      <Link to={to} className={styles.link}>
        {btn}
      </Link>
    );
  }

  return btn;
};

export default Button;
