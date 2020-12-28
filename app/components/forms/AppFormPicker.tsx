import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker, { Props as AppPickerProps } from '../AppPicker'
import ErrorMessage from './ErrorMessage'

export interface Props extends AppPickerProps {
  name: string
}

const AppFormPicker: React.FC<Props> = ({ items, name, placeholder }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext()

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        // @ts-ignore
        selectedItem={values[name]}
      />
      {/* @ts-ignore */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormPicker
