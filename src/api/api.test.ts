import request from 'utils/request';
import config from 'config';
import * as api from './index';

jest.mock('utils/request');

beforeEach(() => {
  jest.clearAllMocks();
  config.useMocks = false;
});

describe('API', () => {
  test('fetchQuestions', () => {
    api.fetchQuestions({ });
    expect(request).toHaveBeenCalledTimes(1);
    expect(request).toHaveBeenCalledWith(`${config.api.questionURL}?type=multiple&encode=base64&amount=50`);
  });
  test('fetchCategories', () => {
    api.fetchCategories();
    expect(request).toHaveBeenCalledTimes(1);
    expect(request).toHaveBeenCalledWith(`${config.api.categoryURL}`);
  });
  test('fetchToken', () => {
    api.fetchToken();
    expect(request).toHaveBeenCalledTimes(1);
    expect(request).toHaveBeenCalledWith(`${config.api.tokenURL}?command=request`);
  });
  test('resetToken', () => {
    api.resetToken('testing');
    expect(request).toHaveBeenCalledTimes(1);
    expect(request).toHaveBeenCalledWith(`${config.api.tokenURL}?command=reset&token=testing`);
  });
});
