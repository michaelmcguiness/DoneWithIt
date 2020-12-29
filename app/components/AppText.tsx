import React from 'react'
import { Text, TextProps } from 'react-native'

import defaultStyles from '../config/styles'

export interface Props extends TextProps {
  children?: React.ReactNode
  style?: Object
}

const AppText: React.FC<Props> = ({ children, style, ...rest }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...rest}>
      {children}
    </Text>
  )
}

export default AppText
