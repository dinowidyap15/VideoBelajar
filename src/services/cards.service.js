import axios from "axios";
import config from "../config/config";

const API_URL = `${config.BASE_API_URL}${config.CARDS_ENDPOINT}`;

export const getCard = (callback) => {
  axios
    .get(API_URL)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postCard = (newCard, callback) => {
  axios
    .post(API_URL, newCard)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateCard = (id, updatedCard, callback) => {
  axios
    .put(`${API_URL}/${id}`, updatedCard)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCard = (id, callback) => {
  axios
    .delete(`${API_URL}/${id}`)
    .then(() => {
      callback(id);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetailProduct = (id, callback) => {
  const url = id ? `${API_URL}/${id}` : API_URL;
  axios
    .get(url)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
