import mock from './mock.json';

const url = 'https://opentdb.com/api.php?amount=10';

const getQuestions = async (): Promise<Question[] | null> => {
  if (false) {
    try {
      const res = await fetch(url);
      if (res.status === 200) {
        // return await res.json();
      }
    } catch (e) {
      return e;
    }
  }

  return mock.results;
};

export default getQuestions;
