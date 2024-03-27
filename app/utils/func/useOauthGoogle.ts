import { useOAuth } from "@clerk/clerk-expo";
import { useCallback } from "react";

const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
export const useOauthGoogle = () => {
  const onPress = useCallback(async () => {
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
  return { onPress };
};
