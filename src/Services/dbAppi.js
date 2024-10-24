export const callDb = async ({ path, body, method }) => {
  const EP_API = `https://coco-store-api.vercel.app/${path}`;
  const res = await fetch(EP_API, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body) || null,
  });
  const status = res.status;
  const data = await res.json();
  console.log("dbCAll");

  return { data, status };
};
