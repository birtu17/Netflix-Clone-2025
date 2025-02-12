import axios from "axios";
const init_Url = axios.create({ baseURL: "https://api.themoviedb.org/3" });
export default init_Url;
