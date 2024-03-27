import { StyleSheet, Text, View } from "react-native";
import React, { Children } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <View style={styles.main}>{children}</View>;
};

export default Layout;

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
