import React from 'react';
import { ReactComponent as Svg } from 'assets/logo.svg';
import styles from './styles.module.css';

const Logo = () => (
  <Svg className={styles.logo} />
);

export default Logo;
