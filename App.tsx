import React, { useState } from 'react'

import MessagesScreen from './app/screens/MessagesScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
import AppPicker from './app/components/AppPicker'
import AppTextInput from './app/components/AppTextInput'
import { Category } from './app/types'

const categories: Category[] = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
]

export default function App() {
  const [category, setCategory] = useState<Category>(categories[0])
  return (
    <Screen>
      <AppPicker
        placeholder="Category"
        iconName="apps"
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
      <AppTextInput placeholder="Email" iconName="email" />
    </Screen>
  )
}
