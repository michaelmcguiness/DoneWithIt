import React from 'react'
import {
  GestureResponderEvent,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import AppText from './AppText'
import { Category } from '../types'

export interface Props {
  item: Category
  onPress?: (event: GestureResponderEvent) => void
}

const PickerItem: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
})

export default PickerItem
