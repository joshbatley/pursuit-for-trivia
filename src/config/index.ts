interface Config {
  settings: {
    maxLives: number;
    maxTime: number;
  }
}

const config: Config = {
  settings: {
    maxLives: 3,
    maxTime: 3,
  }
};

export default config;
