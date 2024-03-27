import {
  ActivityIndicator,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import color from "@/app/utils/color";
import { FontAwesome } from "@expo/vector-icons";
import { SignOut } from "../login/TombolSignout";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

const Header = () => {
  const { isLoaded, user } = useUser();
  let [fontsLoaded, fontError] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View
      style={{
        backgroundColor: color.PRIMARY,
        padding: 20,
        paddingTop: 50,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      }}
    >
      <View style={styles.mainContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: user?.imageUrl }}
            style={{
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              borderRadius: 100,
            }}
          />
          <View
            style={{ display: "flex", flexDirection: "column", marginLeft: 10 }}
          >
            <Text
              style={{
                color: color.WHITE,
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Hallo
            </Text>
            <Text
              style={{
                color: color.WHITE,
                fontSize: 20,
                fontWeight: "700",
                fontFamily: " Poppins_500Medium",
              }}
            >
              {user?.fullName}
            </Text>
          </View>
        </View>

        <View>
          <SignOut />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput placeholder="search" style={styles.input} />
        <FontAwesome
          name="search"
          size={24}
          color={color.PRIMARY}
          style={styles.kacaPembesar}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: color.WHITE,
    width: 330,
    borderRadius: 10,
    marginTop: 20,
  },

  kacaPembesar: {
    backgroundColor: color.WHITE,
    padding: 8,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
  },
});
