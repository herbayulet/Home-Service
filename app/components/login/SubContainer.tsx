import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import color from "@/app/utils/color";

export default function SubContainer() {
  return (
    <View style={styles.subContainer}>
      <Text style={styles.mainText}>
        Hayo cari{" "}
        <Text style={{ fontWeight: "bold" }}>
          tukang bersih bersih sama tukang service{" "}
        </Text>
        profesional
      </Text>
      <Text
        style={{
          fontSize: 17,
          marginTop: 20,
          color: color.WHITE,
          textAlign: "center",
        }}
      >
        Aplikasi paling pas buat nyari tukang service terdekat dari kamu yang
        mana mendeliver kamu sebagai tukang service profesional
      </Text>
      <TouchableOpacity style={styles.tombolHayuk}>
        <Text style={styles.textHayuk}>Hayuk dah buru</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    width: "100%",
    backgroundColor: color.PRIMARY,
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  mainText: {
    marginTop: 30,
    marginHorizontal: 5,
    fontSize: 27,
    color: color.WHITE,
    textAlign: "center",
  },
  tombolHayuk: {
    backgroundColor: color.WHITE,
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 40,
    marginTop: 40,
  },
  textHayuk: {
    color: color.PRIMARY,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});
