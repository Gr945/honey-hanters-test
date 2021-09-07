export const fetchInitUser = async () => {
  const res = await fetch(process.env.REACT_APP_USER);
  const data = res.json();
  return data;
};
