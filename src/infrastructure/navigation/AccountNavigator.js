import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/accountScreen";
import { LoginScreen } from "../../features/account/screens/loginScreen";
import { RegisterScreen } from "../../features/account/screens/registrationScreen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
