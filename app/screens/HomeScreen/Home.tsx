import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/app/components/home/Header";
import Layout from "@/app/components/ui/Layout";
import ListCategory from "@/app/components/home/ListCategory";

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <ListCategory />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
