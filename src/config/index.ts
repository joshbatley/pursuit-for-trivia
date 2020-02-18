export enum Modes {
  Normal = 'normal'
}

export interface Config {
  useMocks: boolean;
  sentry: string;
  lsKeys: Record<string, string>;
  api: Record<API, string>;
  mode: Record<Modes, Settings>;
}

const apiBaseURL = 'https://opentdb.com';
const localStorageKey = 'PFT.';

const config: Config = {
  useMocks: true,
  sentry: process.env.REACT_APP_SENTRY || '',
  lsKeys: {
    categories: `${localStorageKey}categories`,
    questions: `${localStorageKey}questions`,
    save: `${localStorageKey}save`,
  },
  api: {
    questionURL: `${apiBaseURL}/api.php`,
    categoryURL: `${apiBaseURL}/api_category.php`,
    tokenURL: `${apiBaseURL}/api_token.php`,
  },
  mode: {
    [Modes.Normal]: {
      maxLives: 3,
      maxTime: 30,
      difficulty: [
        { id: 1, value: 'easy' },
        { id: 2, value: 'medium' },
        { id: 2, value: 'hard' },
      ],
    },
  },
};

export const isDev = process.env.NODE_ENV === 'development';

export default config;
