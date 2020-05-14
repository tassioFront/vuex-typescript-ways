export interface StoragePlugin {
  set: (key: string, data: any) => void;
  get: (key: string) => any;
  remove: (key: string) => void;
  clear: () => void;
}
const storage: StoragePlugin = {
  set: (key, data) => {
    if (typeof data === 'string') {
      localStorage.setItem(key, data);
    } else {
      localStorage.setItem(key, JSON.stringify(data));
    }
  },

  get: (key) => {
    const rawData: any = localStorage.getItem(key);
    let data = '';

    try {
      data = JSON.parse(rawData);
    } catch (_) {
      data = rawData;
    }

    return data;
  },

  remove: (key) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },
};

export default storage;
