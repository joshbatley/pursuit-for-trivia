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

    let call = await request('/test', errorCB);
    expect(call.data).toEqual('12345');

    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual('/test');
    expect(errorCB).toHaveBeenCalledTimes(0);
  });

  test('call error callback if fetch fails', async () => {
    fetchMock.mockRejectOnce();
    await request('/test', errorCB);
    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(fetchMock.mock.calls[0][0]).toEqual('/test');
    expect(errorCB).toHaveBeenCalledTimes(1);
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
