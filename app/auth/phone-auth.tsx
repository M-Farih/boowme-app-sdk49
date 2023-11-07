import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";

const phoneAuth = () => {
  const [number, onChangeNumber] = React.useState("");

  return (
    <View
      style={{
        paddingHorizontal: 40,
        flex: 1,
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "green" }}>phoneAuth sdsds dsdqd</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Phone number"
        placeholderTextColor="gray"
        keyboardType="numeric"
      />
      <Button
        title="Connection"
        color="green"
        onPress={() => {}}
        disabled={number === ""}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "white",
    textAlign: "center",
    color: "white",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default phoneAuth;
