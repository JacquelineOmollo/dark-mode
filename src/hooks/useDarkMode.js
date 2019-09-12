import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [values, setValues] = useLocalStorage("darkMode", false);
  useEffect(() => {
    if (values === true) return document.body.classList.add("darkMode");
    return document.body.classList.remove("darkMode");
  }, [values]);

  return [values, setValues];
};
