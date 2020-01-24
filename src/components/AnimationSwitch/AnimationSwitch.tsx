import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import Classname from 'classnames';
import style from './styles.module.css';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

const AnimationSwitch = ({ children }: Props) => (
  <Route>
    {({ location }) => (
      <TransitionGroup component={null}>
        <Transition key={location.key} timeout={0}>
          {(status) => (
            <main className={Classname(style.transition, style[status])}>
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
