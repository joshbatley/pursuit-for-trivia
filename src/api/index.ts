import config from 'config';
import request from 'utils/request';

import questionMock from '__mocks__/question.json';
import categoryMock from '__mocks__/category.json';

async function fetchQuestions(): Promise<Question[] | null> {
  if (config.useMocks) {
    return questionMock.results;
  }

  try {
    let data = await request(config.api.questionURL, (e) => e);
    return data.results;
  } catch {
    return null;
  }
}

async function fetchCategories(): Promise<categoriesData | null> {
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

async function fetchToken(): Promise<tokenData | null> {
  try {
    let data = await request(`${config.api.tokenURL}?command=request`, (e) => e);
    return data;
  } catch {
    return null;
  }
}

async function resetToken(token: string): Promise<tokenData | null> {
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
