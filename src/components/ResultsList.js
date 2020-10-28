import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      {!results.length ? (
        <View>
          <Text>No results.</Text>
        </View>
      ) : null}
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("ResultsShow")}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  }
});

export default ResultsList;
