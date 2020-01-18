import { isObj } from '.';

type StorageType = 'local' | 'session';
type StorageValue = object | string | number | void | null;

interface LS {
  get: () => StorageValue | Error;
  set: (value: StorageValue) => void | Error;
}

class GameStorage implements LS {
  private key: string;
  private type: StorageType;
  private storage: Storage;

  constructor(key: string, type: StorageType) {
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
    let data;
    try {
      data = this.storage.getItem(this.key);
      return this.parse(data);
    } catch (err) {
      return new Error(err);
    }
  }

  set(value: StorageValue): void | Error {
    let valueToBe;
    if (isObj(value)) {
      try {
        valueToBe = JSON.stringify(value);
      } catch (err) {
        return new Error(err);
      }
    }

    this.storage.setItem(this.key, valueToBe ?? value as string);
  }
}

export default GameStorage;
