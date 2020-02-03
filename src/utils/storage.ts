import { isObj, isArray } from '.';

type StorageType = 'local' | 'session';
type StorageValue = object | string | number | void | null | Record<any, any>;

interface LS {
  get: () => StorageValue | Error;
  set: (value: StorageValue) => void | Error;
}

class StorageAPI implements LS {
  private key: string;
  private type: StorageType;
  private storage: Storage;

  constructor(key: string, type: StorageType = 'local') {
    this.key = key;
    this.type = type;
    this.storage = this.setStorage();
  }

  private setStorage(): Storage {
    switch (this.type) {
      default:
      case 'local':
        return localStorage;
      case 'session':
        return sessionStorage;
    }
  }

  private parse = (str: string | null): StorageValue => {
    if (!str) {
      return str as StorageValue;
    }
    try {
      return JSON.parse(str);
    } catch {
      return str as StorageValue;
    }
  };

  get(): StorageValue | Error {
    let data = this.storage.getItem(this.key);
    return this.parse(data);
  }

  set(value: StorageValue): void | Error {
    let valueToBe;
    if (isObj(value) || isArray(value)) {
      valueToBe = JSON.stringify(value);
    }

    this.storage.setItem(this.key, valueToBe ?? value as string);
  }
}

export default StorageAPI;
