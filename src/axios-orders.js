import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-app-burger-f5cbf.firebaseio.com/",
});

export default instance;
