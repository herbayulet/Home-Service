import color from "@/app/utils/color";
import { useAuth } from "@clerk/clerk-expo";
import { Button, Text, TouchableOpacity, View } from "react-native";

export const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() => {
          signOut();
        }}
        // style={{ backgroundColor: color.WHITE, padding: 15, borderRadius: 15 }}
      >
        <Text style={{ color: color.WHITE, fontSize: 19, fontWeight: "700" }}>
          Keluar
        </Text>
      </TouchableOpacity>
    </View>
  );
};
