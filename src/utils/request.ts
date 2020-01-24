async function request<T>(url: string, errCb?: (err: unknown) => void): Promise<T | null> {
  try {
    let res = await fetch(url);
    if (!(/^2[0-9].*/.test(res.status.toString()))) {
      errCb?.(res);
    }
    return await res.json();
  } catch (err) {
    errCb?.(err);
  }
  return null;
}

export default request;
