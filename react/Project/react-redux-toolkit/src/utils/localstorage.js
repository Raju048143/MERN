export const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

export const saveToLocalStorage = (todos) => {
  try {
    const data = JSON.stringify(todos);
    localStorage.setItem("todos", data);
  } catch (e) {
    console.error("Error saving todos", e);
  }
};
