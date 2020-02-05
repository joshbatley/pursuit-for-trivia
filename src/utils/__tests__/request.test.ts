import request from '../request';

let errorCB = jest.fn(() => {});

beforeEach(() => {
  jest.resetAllMocks();
  fetchMock.resetMocks();
});

describe('request util', () => {
  test('call fetch if params are passed', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ data: '12345' }),
      { status: 200 },
    );

    let call = await request<{ data: string }>('/test', errorCB);
    expect(call?.data).toEqual('12345');

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual('/test');
    expect(errorCB).toHaveBeenCalledTimes(0);
  });

  test('throws error fetch fails', async () => {
    fetchMock.mockRejectOnce(() => Promise.reject(new Error('testing')));
    request('/test', errorCB).catch((err) => {
      expect(err).toEqual(new Error('testing'));
    });
  });

  test('call error callback if status is not 2XX', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ data: '12345' }),
      { status: 304 },
    );
    await request('/test', errorCB);
    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual('/test');
    expect(errorCB).toHaveBeenCalledTimes(1);
  });
});
