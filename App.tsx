import React from 'react'

import MessagesScreen from './app/screens/MessagesScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
import AppPicker from './app/components/AppPicker'
import AppTextInput from './app/components/AppTextInput'

export default function App() {
  return (
    <Screen>
      <AppPicker placeholder="Category" iconName="apps" />
      <AppTextInput placeholder="Email" iconName="email" />
    </Screen>
  )
}
