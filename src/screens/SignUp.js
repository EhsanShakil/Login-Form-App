import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Input from "./TextInput";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const firstKeyDown = () => {
    usernameRef.current.focus();
  };
  const secondKeyDown = () => {
    passwordRef.current.focus();
  };
  return (
    <View style={style.signup}>
      <Text style={style.heading}>Sign Up</Text>
      <Input
        onChangeText={(text) => setEmail(text)}
        value={email}
        ref={emailRef}
        onSubmitEditing={firstKeyDown}
        returnKeyType={"next"}
        keyboardType={"default"}
        style={style.input}
        placeholder="email"
      />
      <Input
        onChangeText={(text) => setUsername(text)}
        value={username}
        ref={usernameRef}
        onSubmitEditing={secondKeyDown}
        returnKeyType={"next"}
        keyboardType={"default"}
        style={style.input}
        placeholder="username"
      />
      <Input
        onChangeText={(text) => setPassword(text)}
        value={password}
        ref={passwordRef}
        returnKeyType={"done"}
        keyboardType={"default"}
        style={style.input}
        placeholder="password"
      />
      <Button
        title="Sign Up"
        ref={submitRef}
        onPress={() => alert("Sign Up Success")}
      />
    </View>
  );
};
export default SignUp;

const style = StyleSheet.create({
  signup: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    padding: 10,
    width: "80%",
    margin: 10,
  },
  heading: {
    fontSize: 24,
  },
  signin: {
    color: "blue",
  },
});
