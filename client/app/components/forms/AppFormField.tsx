import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import AppTextInput, { Props as AppTextInputProps } from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

export interface Props extends AppTextInputProps {
  name: string
  width?: number
}

const AppFormField: React.FC<Props> = ({ name, ...rest }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext()
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...rest}
      />
      {/* @ts-ignore */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

const styles = StyleSheet.create({
  error: { color: 'red' },
})

export default AppFormField
