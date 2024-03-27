import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Login from "./app/screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "./app/utils/func/useTokenCache";
import { NavigationContainer } from "@react-navigation/native";
import { SignOut } from "./app/components/login/TombolSignout";
import MyTabs from "./app/navigatios/TabNavigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <ClerkProvider
      publishableKey={
        "pk_test_YWRhcHRpbmctYWxpZW4tNDQuY2xlcmsuYWNjb3VudHMuZGV2JA"
      }
      tokenCache={tokenCache}
    >
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
