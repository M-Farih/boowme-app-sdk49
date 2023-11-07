import { View, Text } from "react-native";
import React from "react";
import { Redirect, useRouter, useSegments } from "expo-router";
import { useStoreRootState } from "expo-router/src/global-state/router-store";

const index = () => {
  const segments = useSegments();
  const router = useRouter();
  const isLoggedIn = true;
  const navigationState = useStoreRootState();

  React.useEffect(() => {
    if (!navigationState?.key) return;
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !isLoggedIn &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/(auth)/");
    } else if (isLoggedIn) {
      // Redirect away from the sign-in page.
      router.replace("/(drawer)/(tabs)/home/");
    }
  }, [isLoggedIn, segments, navigationState]);
  return <View>{!navigationState?.key ? <Text>LOADING...</Text> : <></>}</View>;
};

export default index;
