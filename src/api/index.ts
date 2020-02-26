import config, { isDev } from 'config';
import request from 'utils/request';
import { parseObjToQueryStr } from 'utils';
import questions from '__mocks__/question.json';

async function fetchQuestions({
  category,
  type = 'multiple',
  encode = 'base64',
  difficulty = 'medium',
}: FetchQuestionsArgs): Promise<Question[] | null> {
  let questString = parseObjToQueryStr({
    category, type, encode, difficulty, amount: 50,
  });
  if (isDev) {
    return questions.results;
  }
  try {
    let data = await request<QuestionsData>(`${config.api.questionURL}${questString}`);
    return data?.results ?? [];
  } catch (err) {
    throw new Error(err);
  }
}

async function fetchCategories(): Promise<CategoriesData | null> {
  try {
    let data = await request<CategoriesData>(config.api.categoryURL);
    return data;
  } catch {
    return null;
  }
}

async function fetchToken(): Promise<TokenData | null> {
  try {
    let data = await request<TokenData>(`${config.api.tokenURL}?command=request`);
    return data;
  } catch {
    return null;
  }
}

async function resetToken(token: string): Promise<TokenData | null> {
  try {
    let data = await request<TokenData>(`${config.api.tokenURL}?command=reset&token=${token}`);
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
