import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "@/app/utils/color";

const GambarLogin = () => {
  return (
    <View>
      <Image
        source={require("../../../assets/login.png")}
        style={styles.loginImage}
      />
    </View>
  );
};

export default GambarLogin;

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 100,
    borderWidth: 4,
    borderColor: color.BLACK,
    borderRadius: 15,
  },
});
