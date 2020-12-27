import React from 'react'
import { View, StyleSheet, GestureResponderEvent } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

interface Props {
  onPress: (event: GestureResponderEvent) => void
}

const ListItemDeleteAction: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={35} color="white" />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default ListItemDeleteAction
