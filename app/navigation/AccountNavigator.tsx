import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AccountScreen from '../screens/AccountScreen'
import MessagesScreen from '../screens/MessagesScreen'
import routes from './routes'

export type AccountStackParamList = {
  Account: undefined
  Messages: undefined
}

const Stack = createStackNavigator()

const AccountNavigator: React.FC = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
      <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  )
}

export default AccountNavigator
