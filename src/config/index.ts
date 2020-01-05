enum Modes {
  Normal = 'normal'
};

export interface Config {
  mode: {
    [Modes.Normal]: {
      maxLives: number;
      maxTime: number;
    }
  }
}

const config: Config = {
  mode: {
    [Modes.Normal]: {
      maxLives: 3,
      maxTime: 30,
    }
  }
};

export default config;
