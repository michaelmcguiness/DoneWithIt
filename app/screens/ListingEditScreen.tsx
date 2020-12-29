import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'
import Screen from '../components/Screen'
import { Category } from '../types'
import FormImagePicker from '../components/forms/FormImagePicker'
import useLocation from '../hooks/useLocation'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image'),
})

const categories: Category[] = [
  { label: 'Furniture', value: 1, backgroundColor: 'red', iconName: 'apps' },
  { label: 'Clothing', value: 2, backgroundColor: 'green', iconName: 'email' },
  { label: 'Camera', value: 3, backgroundColor: 'blue', iconName: 'lock' },
]

function ListingEditScreen() {
  const location = useLocation()
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={() => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          // @ts-ignore
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

export default ListingEditScreen
