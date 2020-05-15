// export interface StoragePlugin {
//   set: (key: string, data: string) => void;
//   get<T>(): (key: string) => T | null;
//   remove: (key: string) => void;
//   clear: () => void;
// }

// function get<T>(key: string): T | null {
//   const rawData: string | null = localStorage.getItem(key);

//   if (!rawData) {
//     return null
//   }
//   const te: T | null = JSON.parse(rawData)
//   return te
// }


const storage = {
  set: <T>(key: string, data: T): void => {
    if (!data) return

    const dataHandled = typeof data !== 'string' ? JSON.stringify(data) : data
    localStorage.setItem(key, dataHandled);
  },

  get: <T>(key: string): T | null => {
    const rawData: string | null = localStorage.getItem(key);

    if (!rawData) {
      return null
    }

    return typeof rawData !== 'string' ? JSON.parse(rawData) : rawData
  },

  // remove: (key) => {
  //   localStorage.removeItem(key);
  // },

  // clear: () => {
  //   localStorage.clear();
  // },
};

export default storage;
