import { useState, useEffect } from "react";

type useStateLSType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

// helper function
const getStoredValue = <T>(key: string, defaultValue: T): T => {
  // use try catch to handle localStorage undefined on first load on server
  try {
    return JSON.parse(localStorage.getItem(key)!) ?? defaultValue;
  } catch (error) {
    console.log(error);
    return defaultValue;
  }
};

/** a custom useState to store the state in the localStorage */
export const useStateLs = <T>(
  key: string,
  defaultValue: T,
): useStateLSType<T> => {
  const [state, setState] = useState<T>(() =>
    getStoredValue(key, defaultValue),
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};
