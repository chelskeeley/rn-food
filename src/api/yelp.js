import axios from "axios";
import { API_KEY } from "../../secret";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    // test dev account token
    Authorization: `Bearer ${API_KEY}`
  }
});
