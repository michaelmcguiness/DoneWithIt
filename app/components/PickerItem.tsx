import React from 'react'
import {
  GestureResponderEvent,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import AppText from './AppText'

export interface Props {
  label: string
  onPress?: (event: GestureResponderEvent) => void
}

const PickerItem: React.FC<Props> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
})

export default PickerItem
