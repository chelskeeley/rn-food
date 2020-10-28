import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = ({ navigation }) => {
  //
  // state hooks
  //
  const [term, setTerm] = useState("");

  //
  // custom hooks
  //
  const [searchApi, results, errorMessage] = useResults();

  //
  // functions
  //
  const filterResultsByPrice = price => {
    // price === "$" || "$$" || "$$$"
    return results.filter(result => result.price === price);
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
          navigation={navigation}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice("$$")}
          navigation={navigation}
          />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFF",
    flex: 1
  }
});

export default SearchScreen;
