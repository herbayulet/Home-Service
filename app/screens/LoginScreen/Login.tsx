import { StyleSheet, View } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import SubContainer from "@/app/components/login/SubContainer";
import GambarLogin from "@/app/components/login/GambarLogin";
import { useWarmUpBrowser } from "@/app/utils/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      <GambarLogin />
      <SubContainer teken={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({});
