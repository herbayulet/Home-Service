import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BookingScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>BookingScreen</Text>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
