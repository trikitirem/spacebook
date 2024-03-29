import { URL, options } from "./config";
import Cookies from "js-cookie";

const getUserService = async (userID) => {
  const query = await fetch(`${URL}getUser`, {
    body: JSON.stringify({ userID }),
    ...options,
  });
  return await query.json();
};

export default getUserService;
