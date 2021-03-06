import { configureRequest, makeRequest } from "./global";

const addProduct = async (productID) =>
  makeRequest(configureRequest(`cart/add/${productID}`, null, "PUT"));
const removeProduct = async (productID) =>
  makeRequest(configureRequest(`cart/remove/${productID}`, null, "PUT"));
const getTotal = async () =>
  makeRequest(configureRequest("cart/", null, "GET"));
  const getProducts = async () =>
  makeRequest(configureRequest("cart/all", null, "GET"));
  const orderProd = async () =>
  makeRequest(configureRequest("cart", null, "POST"));

export default Object.freeze({ addProduct, removeProduct, getTotal,getProducts,orderProd });
