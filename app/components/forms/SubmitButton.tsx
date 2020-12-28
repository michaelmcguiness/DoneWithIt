import React from 'react'
import { useFormikContext } from 'formik'

import AppButton from '../AppButton'

export interface Props {
  title: string
}

const FormSubmitButton: React.FC<Props> = ({ title }) => {
  const { handleSubmit } = useFormikContext()
  return <AppButton title={title} onPress={handleSubmit} />
}

export default FormSubmitButton
