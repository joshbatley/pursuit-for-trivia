
const request = async (url: string, errCb: (err: unknown) => void): Promise<any> => {
  try {
    const res = await fetch(url);
    if (res.status !== 200) {
      errCb(res);
    }
    return await res.json();
  } catch (err) {
    errCb(err);
  }
};

export default request;
