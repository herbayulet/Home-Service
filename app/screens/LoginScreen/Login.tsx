import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "@/app/utils/color";

export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../../assets/login.png")}
        style={styles.loginImage}
      />
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: color.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    backgroundColor: color.PRIMARY,
  },
});
