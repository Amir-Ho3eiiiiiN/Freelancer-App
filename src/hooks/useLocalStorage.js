import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialState) {
  const [value, setValue] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key)) || initialState;
    return storedValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value , setValue]
}
