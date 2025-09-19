export function getLocalStorage(key: string, defaultValue: any) {
  const storedValue = localStorage.getItem(key);
  if (storedValue !== null && storedValue !== undefined) {
    try {
      return JSON.parse(storedValue);
    } catch (error) {
      console.error(`Error parsing JSON for key "${key}":`, error);
      return defaultValue;
    }
  } else {
    return defaultValue;
  }
}

export function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
