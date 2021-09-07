export const fetchDeleteUser = async (id) => {
  const res = await fetch(process.env.REACT_APP_USER, {
    method: "DELETE",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  return data;
};
