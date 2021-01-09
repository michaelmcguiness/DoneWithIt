import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker, { Props as AppPickerProps } from '../AppPicker'
import ErrorMessage from './ErrorMessage'

export interface Props extends AppPickerProps {
  name: string
}

const AppFormPicker: React.FC<Props> = ({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  width,
  placeholder,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext()

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        // @ts-ignore
        selectedItem={values[name]}
        width={width}
      />
      {/* @ts-ignore */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormPicker
