import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
// type glyphmap = typeof import('react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json')
import glyphmap from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json'

import colors from '../config/colors'

type MyMap<T> = {
  [P in keyof T]: number
}

// spread keys after converting glyphmap into MyMap
type MapKeys = keyof MyMap<typeof glyphmap>

export interface Props {
  name: MapKeys
  size?: number
  backgroundColor?: string
  iconColor?: string
}

const Icon: React.FC<Props> = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
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

export default Icon
