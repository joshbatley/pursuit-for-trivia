export interface Config {
  api: Record<API, string>;
  mode: Record<Modes, Settings>;
}

const apiBaseURL = 'https://opentdb.com/'

const config: Config = {
  api: {
    questionURL: `${apiBaseURL}/api.php`,
    categoryURL: `${apiBaseURL}/api_category.php`,
    tokenURL: `${apiBaseURL}/api_token.php`
  },
  mode: {
    [Modes.Normal]: {
      maxLives: 3,
      maxTime: 30,
    }
  }
};

export default config;
