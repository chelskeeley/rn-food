import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  //
  // state hooks
  //
  const [term, setTerm] = useState("");

  //
  // custom hooks
  //
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFF",
    height: 300
  }
});

export default SearchScreen;
