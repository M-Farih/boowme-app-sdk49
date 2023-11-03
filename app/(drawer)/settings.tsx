import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const SettingsScreen = () => {
  const router = useRouter();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Settings</Text>
      <Button
        title="click"
        onPress={() => {
          router.push("/auth");
        }}
      />
    </View>
  );
};
export default SettingsScreen;
