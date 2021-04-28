import { makeRequest, configureRequest } from "./global";

const checkIn = async () =>
  makeRequest(configureRequest("activity", null, "GET"));

const checkOut = async (id) =>
  makeRequest(configureRequest(`activity/`, null, "PUT"));

const type = async (type) =>
  makeRequest(configureRequest(`activity/${type}`, null, "GET"));

const myactivity = async()=>
  makeRequest(configureRequest("activity/personal/client",null,"GET"))

export default Object.freeze({
  checkIn,
  checkOut,
  type,
  myactivity,
});
