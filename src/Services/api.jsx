import axios from "axios";

const API = axios.create({
  baseURL: "http://examination.24x7retail.com",
  headers: {
    "x-api-key": "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf",
    "Content-Type": "application/json",
  },
});

export default API;
