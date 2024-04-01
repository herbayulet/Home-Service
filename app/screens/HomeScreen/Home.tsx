import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/app/components/home/Header";
import Slider from "@/app/components/home/Slider";
import Categories from "@/app/components/home/Categories";
import LastBisnis from "@/app/components/home/LastBisnis";

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <Slider />
      <Categories />
      <LastBisnis />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
