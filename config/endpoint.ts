import axios from "axios";

const apiurl = "https://jsonplaceholder.typicode.com/";


export const Api = axios.create({

  
  baseURL:apiurl
});
