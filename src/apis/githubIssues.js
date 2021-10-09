import axios from "axios";

//state query param is equivalent to status
export default axios.create({
  baseURL: "https://api.github.com/repos/vuejs/vue",
});
