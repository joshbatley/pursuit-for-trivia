enum Modes {
  Normal = 'normal'
}

export interface Config {
  useMocks: boolean;
  sentry: string;
  api: Record<API, string>;
  mode: Record<Modes, Settings>;
}

const apiBaseURL = 'https://opentdb.com/';

const config: Config = {
  useMocks: true,
  sentry: process.env.REACT_APP_SENTRY || '',
  api: {
    questionURL: `${apiBaseURL}/api.php`,
    categoryURL: `${apiBaseURL}/api_category.php`,
    tokenURL: `${apiBaseURL}/api_token.php`,
  },
  mode: {
    [Modes.Normal]: {
      maxLives: 3,
      maxTime: 30,
    },
  },
};

export default config;
