import axiosInstance from "./axiosInstance";
import config from "../config/config";

const API_URL = `${config.BASE_API_URL}${config.CARDS_ENDPOINT}`;

export const getCard = async () => {
  try {
    const response = await axiosInstance.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching cards:", error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch cards");
  }
};

export const addCard = async (newCard) => {
  try {
    const response = await axiosInstance.post(API_URL, newCard);
    return response.data;
  } catch (error) {
    console.error("Error adding card:", error.message);
    throw new Error(error.response?.data?.message || "Failed to add card");
  }
};

export const updateCard = async (id, updatedCard) => {
  try {
    const response = await axiosInstance.put(`${API_URL}/${id}`, updatedCard);
    return response.data;
  } catch (error) {
    console.error("Error updating card:", error.message);
    throw new Error(error.response?.data?.message || "Failed to update card");
  }
};

export const deleteCard = async (id) => {
  try {
    await axiosInstance.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    console.error("Error deleting card:", error.message);
    throw new Error(error.response?.data?.message || "Failed to delete card");
  }
};

export const getDetailProduct = async (id) => {
  try {
    const url = id ? `${API_URL}/${id}` : API_URL;
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching product detail:", error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch product detail");
  }
};
