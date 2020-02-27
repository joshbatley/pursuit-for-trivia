import React, { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Events } from 'contexts/AnimationManager';
import styles from './styles.module.css';

interface Props {
  event: Events | null;
}

const downfallInside = {
  particleCount: 100,
  startVelocity: 5,
  angle: -90,
  spread: 360,
  ticks: 300,
  origin: {
    y: -0.3,
  },
};

const downfallOutside = {
  ...downfallInside,
  particleCount: 500,
  startVelocity: 20,
};

const leftCannon = {
  particleCount: 500,
  angle: 60,
  spread: 55,
  origin: {
    x: 0,
  },
};

const rightCannon = {
  ...leftCannon,
  angle: 120,
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
    function fire(colors: string[], style = 'cannons') {
      conf.current?.({
        ...(style === 'cannons' ? leftCannon : downfallInside),
        colors,
      });
      conf.current?.({
        ...(style === 'cannons' ? rightCannon : downfallOutside),
        colors,
      });
    }

    if (event === Events.CORRECT) {
      fire(['#2eb872', '#a3de83']);
    }

    if (event === Events.INCORRECT) {
      fire(['#e84545', '#88304e'], 'downfall');
    }
    if (event === Events.GAMEOVER) {
      fire(['#e84545', '#88304e'], 'downfall');
    }
  }, [event]);

  return (
    <canvas ref={canvasRef} className={styles.canvas} />
  );
};

export default Animatior;
