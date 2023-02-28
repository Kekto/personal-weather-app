import axios from "axios";

const instance = axios.create({
	baseURL: "",
});
instance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
