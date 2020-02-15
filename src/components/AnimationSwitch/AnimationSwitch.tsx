import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import classname from 'classnames';
import styles from './styles.module.css';

interface Props {
  children?: React.ReactChild | React.ReactChild[];
}

const AnimationSwitch = ({ children }: Props) => (
  <Route>
    {({ location }) => (
      <TransitionGroup component={null}>
        <Transition key={location.key} timeout={0}>
          {(status) => (
            <main className={classname(styles.transition, styles[status])}>
              <Switch location={location}>
                {children}
              </Switch>
            </main>
          )}
        </Transition>
      </TransitionGroup>
    )}
  </Route>
);

export default AnimationSwitch;
