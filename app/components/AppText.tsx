import React from 'react'
import { Text } from 'react-native'

import defaultStyles from '../config/styles'

export interface Props {
  children?: React.ReactNode
  style?: Object
}

const AppText: React.FC<Props> = ({ children, style }) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>
}

export default AppText
