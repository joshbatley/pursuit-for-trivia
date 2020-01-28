import * as Utils from '../index';

describe('Utils ', () => {
  describe('isObj() ', () => {
    test('returns a true if a object is passed in', () => {
      expect(Utils.isObj({ a: 1 })).toBe(true);
    });

    test('returns a false if any but object is passed in', () => {
      expect(Utils.isObj('test')).toBe(false);
      expect(Utils.isObj(123)).toBe(false);
      expect(Utils.isObj([])).toBe(false);
      expect(Utils.isObj([1, 2, 3])).toBe(false);
      expect(Utils.isObj(false)).toBe(false);
      expect(Utils.isObj(true)).toBe(false);
      expect(Utils.isObj(undefined)).toBe(false);
      expect(Utils.isObj(null)).toBe(false);
    });
  });

  describe('isEmptyObj() ', () => {
    test('returns a true if a object is passed in', () => {
      expect(Utils.isEmptyObj({ })).toBe(true);
    });

    test('returns a false if any but object is passed in', () => {
      expect(Utils.isEmptyObj({ a: 1 })).toBe(false);
    });

    test('return false if value passed in not a object', () => {
      expect(Utils.isEmptyObj('test')).toBe(false);
      expect(Utils.isEmptyObj(123)).toBe(false);
      expect(Utils.isEmptyObj([])).toBe(false);
      expect(Utils.isEmptyObj([1, 2, 3])).toBe(false);
      expect(Utils.isEmptyObj(false)).toBe(false);
      expect(Utils.isEmptyObj(true)).toBe(false);
      expect(Utils.isEmptyObj(undefined)).toBe(false);
      expect(Utils.isEmptyObj(null)).toBe(false);
    });
  });

  describe('isEmptyString()', () => {
    test('should return true if a empty string is passed', () => {
      expect(Utils.isEmptyString('')).toBe(true);
    });

    test('should return false if a string is passed', () => {
      expect(Utils.isEmptyString('123')).toBe(false);
    });

    test('should return false if a non string value is passed', () => {
      expect(Utils.isEmptyString(1)).toBe(false);
      expect(Utils.isEmptyString([1, 2, 3])).toBe(false);
      expect(Utils.isEmptyString({ a: 1 })).toBe(false);
      expect(Utils.isEmptyString(false)).toBe(false);
      expect(Utils.isEmptyString(undefined)).toBe(false);
      expect(Utils.isEmptyString(null)).toBe(false);
    });
  });

  describe('isEmptyArray()', () => {
    test('should return true if a empty array is passed', () => {
      expect(Utils.isEmptyArray([])).toBe(true);
    });

    test('should return false if a array will values is passed', () => {
      expect(Utils.isEmptyArray([1, 2, 3])).toBe(false);
    });

    test('should return false if a non array value is passed', () => {
      expect(Utils.isEmptyArray(1)).toBe(false);
      expect(Utils.isEmptyArray('')).toBe(false);
      expect(Utils.isEmptyArray('123')).toBe(false);
      expect(Utils.isEmptyArray({ a: 1 })).toBe(false);
      expect(Utils.isEmptyArray(false)).toBe(false);
      expect(Utils.isEmptyArray(undefined)).toBe(false);
      expect(Utils.isEmptyArray(null)).toBe(false);
    });
  });

  describe('isNullOrUndefined()', () => {
    test('should return true if a null or undefined is passed', () => {
      expect(Utils.isNullOrUndefined(undefined)).toBe(true);
      expect(Utils.isNullOrUndefined(null)).toBe(true);
    });

    test('should return false if a non string value is passed', () => {
      expect(Utils.isNullOrUndefined(0)).toBe(false);
      expect(Utils.isNullOrUndefined(1)).toBe(false);
      expect(Utils.isNullOrUndefined('')).toBe(false);
      expect(Utils.isNullOrUndefined('123')).toBe(false);
      expect(Utils.isNullOrUndefined([])).toBe(false);
      expect(Utils.isNullOrUndefined([1, 2, 3])).toBe(false);
      expect(Utils.isNullOrUndefined({ a: 1 })).toBe(false);
      expect(Utils.isNullOrUndefined({})).toBe(false);
      expect(Utils.isNullOrUndefined(false)).toBe(false);
    });
  });

  describe('isEmpty()', () => {
    test('should return true if a empty a string/object/array or undefined/null is passed', () => {
      expect(Utils.isEmpty(undefined)).toBe(true);
      expect(Utils.isEmpty(null)).toBe(true);
      expect(Utils.isEmpty('')).toBe(true);
      expect(Utils.isEmpty([])).toBe(true);
      expect(Utils.isEmpty({})).toBe(true);
    });

    test('should return false falsey value passed', () => {
      expect(Utils.isEmpty(0)).toBe(false);
      expect(Utils.isEmpty(false)).toBe(false);
    });

    test('should return false if a non empty value is passed', () => {
      expect(Utils.isEmpty('123')).toBe(false);
      expect(Utils.isEmpty([1, 2, 3])).toBe(false);
      expect(Utils.isEmpty({ a: 1 })).toBe(false);
    });
  });

  describe('parseObjToQueryStr() ', () => {
    test('return query string like string from object', () => {
      expect(Utils.parseObjToQueryStr({ a: 2, b: 2 })).toEqual('?a=2&b=2');
    });

    test('to throw error if passed non object ', () => {
      const func = () => Utils.parseObjToQueryStr('');
      expect(func).toThrow();
      expect(func).toThrowError('Object could not be parse to query string');
    });

    test('if param is undefined, or empty do add to query string', () => {
      let obj = {
        a: undefined, b: 2, c: '', d: null,
      };
      expect(Utils.parseObjToQueryStr(obj)).toEqual('?b=2');
    });

    test('parse falsy values excluding string and undefined/null', () => {
      let obj = {
        a: 0, b: false, c: [1, 2, 3], d: undefined, e: null, f: [],
      };
      let qs = '?a=0&b=false&c=1,2,3';
      expect(Utils.parseObjToQueryStr(obj)).toEqual(qs);
    });
  });

  describe('EmptyArrayOfSize()', () => {
    test('to return array of size of inputted', () => {
      expect(Utils.EmptyArrayOfSize(0)).toHaveLength(0);
      expect(Utils.EmptyArrayOfSize(3)).toHaveLength(3);
      expect(Utils.EmptyArrayOfSize(5)).toHaveLength(5);
    });
  });
});
