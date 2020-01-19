import Storage from '../storage';

let lsKey = 'myTest';
let local = new Storage(lsKey);
let session = new Storage(lsKey, 'session');

beforeEach(() => {
  localStorage.clear();
});

describe('storage utils', () => {
  test('get the string from storage with the correct key', () => {
    localStorage.setItem(lsKey, 'string');
    expect(local.get()).toEqual('string');
  });

  test('get the object from storage with the correct key and is a parsed correctly', () => {
    let testObj = { a: 'test', b: 'here' };
    localStorage.setItem(lsKey, JSON.stringify(testObj));
    expect(local.get()).toEqual(testObj);
  });

  test('you can set a object and it gets set to localstorage', () => {
    let testObj = { a: 'test', b: 'here' };
    local.set(testObj);
    expect(localStorage.getItem(lsKey)).toEqual(JSON.stringify(testObj));
  });

  test('you can set a string and it gets set to localstorage', () => {
    local.set('123');
    expect(localStorage.getItem(lsKey)).toEqual('123');
  });

  test('you can also set use SessionStorage', () => {
    session.set('string');
    expect(session.get()).toEqual('string');
  });

  test('if nothing is set it returns null', () => {
    expect(local.get()).toEqual(null);
  });

  test('if object can be parse return it as string', () => {
    let brokenObj = '{ a: b,c, d }';
    localStorage.setItem(lsKey, brokenObj);
    expect(local.get()).toEqual(brokenObj);
  });
});
