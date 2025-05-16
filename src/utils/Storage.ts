type Store = "localStorage" | "sessionStorage";

export class _Storage {
  public static save(key: string, data: unknown, store: Store) {
    window[store].setItem(key, JSON.stringify(data));
  }

  public static read(key: string, store: Store): unknown | null {
    const storedValue = window[store].getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return null;
  }

  public static delete(key: string, store: Store) {
    window[store].removeItem(key);
  }
}
