import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  //
  // useEffect hooks
  //
  useEffect(() => {
    searchApi("pasta")
  }, []);

  //
  // functions
  //
  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });

      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage("Something went wrong, please try again later.")
    }
  }

  return [searchApi, results, errorMessage];
};
