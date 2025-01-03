import axiosInstance from "./axiosInstance";
import config from "../config/config";

const AUTH_API_URL = `${config.BASE_API_URL}${config.USERS_ENDPOINT}`;

export const registerUser = (newUser, callback) => {
  axiosInstance
    .post(AUTH_API_URL, newUser)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      callback(res.data);
    })
    .catch((err) => {
      console.error(err);
      callback(null, "Gagal mendaftarkan pengguna.");
    });
};

export const loginUser = (credentials, callback) => {
  axiosInstance
    .get(AUTH_API_URL)
    .then((res) => {
      const users = res.data;
      const user = users.find(
        (u) => u.email === credentials.email && u.password === credentials.password
      );
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        callback(user);
      } else {
        callback(null, "Email atau kata sandi salah!");
      }
    })
    .catch((err) => {
      console.error(err);
      callback(null, "Gagal terhubung ke server.");
    });
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};
