export class Storage {
  setDataOnStorage(key, value) {
    let JSONString = JSON.stringify(value);
    localStorage.setItem(key, JSONString);
  }

  getDataOnStorage(key) {
    let JSONString = localStorage.getItem(key);
    return JSON.parse(JSONString);
  }

  removeDataOnStorage(key) {
    localStorage.removeItem(key);
  }
}