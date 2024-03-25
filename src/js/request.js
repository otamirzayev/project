import overlay from "./loader";

const request = async (res) => {
  overlay(true);
  const req = await fetch(res);
  if (!req.ok) {
    overlay(false);
    throw new Error("xato");
  }
  const data = await req.json();
  overlay(false);
  return data;
};
export default request;
