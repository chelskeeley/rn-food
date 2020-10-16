import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer jgLJce2MbiBa-yqxLSzDBFgiVOuXEFo5ny6YcOgUN6PfS9WrP019nCDMDpQxiaG_EeIItO6B50w7ZKmg74asCbMuu1747uuK6Y3iHx7jrzIII1oFX62dvX_aCq-IX3Yx"
  }
});
