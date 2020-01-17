export function isObj(obj: unknown): boolean {
  return typeof obj !== 'object' && obj !== null;
}

export function parseObjToQueryStr(args: object): string {
  if (!isObj(args)) {
    throw new Error('Object could not be parse to query string');
  }
  let query = Object.entries(args)
    .map((o) => o[1] && o.join('='))
    .filter(Boolean)
    .join('&');
  return `?${query}`;
}

export default parseObjToQueryStr;
