import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../screens/HomeScreen/HomeScreen"
import SignUp from "../screens/SignUp/SignUp"
import SignIn from "../screens/SignIn/SignIn"

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Criar Conta" }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'Entrar' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
