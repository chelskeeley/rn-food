import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: result.image_url }}
        style={styles.imageStyle}
      />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  imageStyle: {
    borderRadius: 5,
    width: 250,
    height: 120,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: "bold"
  }
});

export default ResultsDetail;
