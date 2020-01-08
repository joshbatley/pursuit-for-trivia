import config from 'config';
import request from 'utils/request';
import mock from './mock.json';

const url = config.api.questionURL;

const getQuestions = async (): Promise<Question[] | null> => {
  if (false) {
    try {
      const data = await request(url, (e) => e);
      return data && data.results;
    } catch (e) {
      return e;
    }
  }
  return mock.results;
};

export default getQuestions;
