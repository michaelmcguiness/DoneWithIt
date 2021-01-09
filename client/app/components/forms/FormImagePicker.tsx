import React from 'react'
import { useFormikContext } from 'formik'
import { View, StyleSheet } from 'react-native'
import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'

interface Props {
  name: string
}

const FormImagePicker: React.FC<Props> = ({ name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext()
  // @ts-ignore
  const imageUris: string[] = values[name]

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri])
  }

  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri),
    )
  }

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      {/* @ts-ignore */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default FormImagePicker
