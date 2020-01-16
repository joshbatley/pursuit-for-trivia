import config from 'config';
import request from 'utils/request';
import { parseObjToQueryStr } from 'utils';

import questionMock from '__mocks__/question.json';
import categoryMock from '__mocks__/category.json';

async function fetchQuestions({
  category,
  type = 'multiple',
  encoding = 'base64',
  difficulty = 'medium',
}: FetchQuestionsArgs): Promise<Question[] | null> {
  if (config.useMocks) {
    return questionMock.results;
  }

  let questString = parseObjToQueryStr({
    category, type, encoding, difficulty,
  });

  try {
    let data = await request(`${config.api.questionURL}${questString}`, (e) => e);
    return data?.results;
  } catch {
    return null;
  }
}

async function fetchCategories(): Promise<CategoriesData | null> {
  if (config.useMocks) {
    return categoryMock;
  }

  try {
    let data = await request(config.api.categoryURL, (e) => e);
    return data;
  } catch {
    return null;
  }
}

async function fetchToken(): Promise<TokenData | null> {
  try {
    let data = await request(`${config.api.tokenURL}?command=request`, (e) => e);
    return data;
  } catch {
    return null;
  }
}

async function resetToken(token: string): Promise<TokenData | null> {
  try {
    let data = await request(`${config.api.tokenURL}?command=reset&token=${token}`, (e) => e);
    return data;
  } catch {
    return null;
  }
}

export {
  fetchQuestions,
  fetchCategories,
  fetchToken,
  resetToken,
};
