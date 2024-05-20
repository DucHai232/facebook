import axios from "axios";

export const getUser = () => {
  const API = axios.create({
    baseURL: "https://664b521d35bbda10987c72bf.mockapi.io",
  });
  return API.get("/api/v1/users");
};

export const createUser = () => {};
export const deleteUser = () => {};
