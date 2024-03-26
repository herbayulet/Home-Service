import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import color from "@/app/utils/color";
import SubContainer from "@/app/components/login/SubContainer";
import GambarLogin from "@/app/components/login/GambarLogin";

export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
      <GambarLogin />
      <SubContainer />
    </View>
  );
}

const styles = StyleSheet.create({});
