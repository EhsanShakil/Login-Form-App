import React from "react";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const StackNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
});
export default Route = createAppContainer(StackNavigator);
