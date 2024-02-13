class LocalStorageClass {
  setItem(key: string, value: any, json = false) {
    localStorage.setItem(key, json ? JSON.stringify(value) : value);
  }

  getItem(key: string, json = false) {
    return json
      ? JSON.parse(localStorage.getItem(key) as string)
      : localStorage.getItem(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}

export const LocalStorage = new LocalStorageClass();
