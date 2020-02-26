import React, { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Events } from 'contexts/AnimationManager';
import styles from './styles.module.css';

interface Props {
  event: Events | null;
}

const leftCannon = {
  particleCount: 500,
  angle: 60,
  spread: 55,
  origin: {
    x: 0,
  },
};

const rightCannon = {
  particleCount: 500,
  angle: 120,
  spread: 55,
  origin: {
    x: 1,
  },
};

const Animatior: React.FC<Props> = ({ event }: Props) => {
  let canvasRef = useRef<HTMLCanvasElement>(null);
  let conf = useRef<confetti.CreateTypes>();

  useEffect(() => {
    if (canvasRef.current) {
      conf.current = confetti.create(canvasRef.current, {
        resize: true,
      });
    }
  });

  useEffect(() => {
    function fire(colors: string[]) {
      conf.current?.({
        ...leftCannon,
        colors,
      });
      conf.current?.({
        ...rightCannon,
        colors,
      });
    }

    if (event === Events.CORRECT) {
      fire(['#2eb872', '#a3de83']);
    }

    if (event === Events.INCORRECT) {
      fire(['#e84545', '#88304e']);
    }
    if (event === Events.GAMEOVER) {
      fire(['#e84545', '#88304e']);
      fire(['#e84545', '#88304e']);
      fire(['#e84545', '#88304e']);
      fire(['#e84545', '#88304e']);
    }
  }, [event]);

  return (
    <canvas ref={canvasRef} className={styles.canvas} />
  );
};

export default Animatior;
