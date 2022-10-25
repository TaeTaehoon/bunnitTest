import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Calendar from "../components/Callender";

function CallenderScreen() {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
});

export default CallenderScreen;
