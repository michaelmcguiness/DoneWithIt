import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import RegisterScreen from '../screens/RegisterScreen'

export type AuthStackParamList = {
  Welcome: undefined
  Login: undefined
  Register: undefined
}

const Stack = createStackNavigator<AuthStackParamList>()

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
