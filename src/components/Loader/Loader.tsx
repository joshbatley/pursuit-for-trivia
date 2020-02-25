import React from 'react';
import { ReactComponent as LoaderSvg } from 'assets/loader.svg';
import styles from './styles.module.css';

const Loader = () => (
  <div className={styles.container}>
    <LoaderSvg className={styles.loader} />
  </div>
);

export default Loader;
