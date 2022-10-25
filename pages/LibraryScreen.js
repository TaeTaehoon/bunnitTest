import React from "react";
import { StyleSheet, Text, View } from "react-native";

function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Text>LibraryScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LibraryScreen;
