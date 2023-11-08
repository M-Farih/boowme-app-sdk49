import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import React from "react";
import { auth } from "../../services/initializeApp";

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
        // onPress={async () => {
        //   try {
        //     const phoneProvider = new PhoneAuthProvider(auth);
        //     const verificationId = await phoneProvider.verifyPhoneNumber(
        //       onChangeNumber,
        //       // @ts-ignore
        //       recaptchaVerifier.current
        //     );
        //     setVerificationId(verificationId);
        //   } catch (err: any) {
        //     console.log(err);
        //   }
        // }}
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
