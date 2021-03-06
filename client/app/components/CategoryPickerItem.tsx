import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import AppText from './AppText'
import Icon from './Icon'
import { Props as PickerItemProps } from './PickerItem'

export interface Props extends PickerItemProps {}

const CategoryPickerItem: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        backgroundColor={item.backgroundColor}
        name={item.iconName}
        size={80}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
})

export default CategoryPickerItem
