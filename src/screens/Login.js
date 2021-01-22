import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Input from "./TextInput";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const firstKeyDown = () => {
    passwordRef.current.focus();
  };
  return (
    <View style={style.login}>
      <Text style={style.heading}>Login</Text>
      <Input
        onChangeText={(text) => setUsername(text)}
        value={username}
        ref={usernameRef}
        onSubmitEditing={firstKeyDown}
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
        title="Login"
        ref={submitRef}
        onPress={() => alert("Login Success")}
      />
    </View>
  );
};
export default Login;

const style = StyleSheet.create({
  login: {
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
  signup: {
    color: "blue",
  },
  heading: {
    fontSize: 24,
  },
});
