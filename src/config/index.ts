interface Config {
  settings: {
    maxLives: number;
    maxTimer: number;
  }
}

const config: Config = {
  settings: {
    maxLives: 3,
    maxTimer: 30
  }
};

export default config;
