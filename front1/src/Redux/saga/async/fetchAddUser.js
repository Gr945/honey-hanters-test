export const fetchAddUser = async (payload) => {
  const { name, email, comment } = payload;
  const res = await fetch(process.env.REACT_APP_USER, {
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({ name, email, comment  }),
  });
  const data = await res.json();
  return data;
};
