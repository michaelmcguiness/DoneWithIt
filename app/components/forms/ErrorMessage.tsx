import React from 'react'
import { StyleSheet } from 'react-native'

import AppText from '../AppText'

export interface Props {
  error?: string
  visible?: boolean
}

const ErrorMessage: React.FC<Props> = ({ error, visible }) => {
  if (!visible || !error) return null
  return <AppText style={styles.error}>{error}</AppText>
}

const styles = StyleSheet.create({
  error: { color: 'red' },
})

export default ErrorMessage
