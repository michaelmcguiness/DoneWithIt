import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

export interface Props {
  initialValues: Object
  onSubmit: (values: Object) => void
  validationSchema: Yup.AnyObjectSchema
  children: React.ReactNode
}

const AppForm: React.FC<Props> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  )
}

export default AppForm
