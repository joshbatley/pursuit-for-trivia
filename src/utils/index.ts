export function isObj(obj: unknown): boolean {
  return typeof obj === 'object' && obj !== null && !(obj instanceof Array);
}

export function isEmptyObj(obj: unknown): boolean {
  return isObj(obj) && Object.keys(obj as object).length <= 0;
}

export function isEmptyString(arg: unknown): boolean {
  return typeof arg === 'string' && arg.length <= 0;
}

export function isArray(arg: unknown): boolean {
  return arg instanceof Array;
}

export function isEmptyArray(arg: unknown): boolean {
  return arg instanceof Array && arg.length <= 0;
}

export function isNullOrUndefined(arg: unknown): boolean {
  return arg == null;
}

export function isEmpty(arg: unknown): boolean {
  return isNullOrUndefined(arg)
    || isEmptyString(arg)
    || isEmptyArray(arg)
    || isEmptyObj(arg);
}

export function parseObjToQueryStr(args: unknown): string {
  if (!isObj(args)) {
    throw new Error('Object could not be parse to query string');
  }
  let query = Object.entries(args as object)
    .map((o) => !isEmpty(o[1]) && o.join('='))
    .filter(Boolean)
    .join('&');
  return `?${query}`;
}

export function EmptyArrayOfSize(size: number) {
  return Array.from(Array(size));
}
