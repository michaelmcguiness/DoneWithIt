import React, { ComponentType, useState } from 'react'
import {
  Button,
  Modal,
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Screen from './Screen'
import AppText, { Props as AppTextProps } from './AppText'
import defaultStyles from '../config/styles'
import { IconName } from '../types'
import PickerItem from './PickerItem'
import { Category } from '../types'

export interface Props extends AppTextProps {
  placeholder: string
  items: Category[]
  iconName?: IconName
  numberOfColumns?: number
  onSelectItem: (item: Category) => void
  PickerItemComponent?: ComponentType
  selectedItem?: Category
  width?: number | string
}

const AppPicker: React.FC<Props> = ({
  iconName,
  items,
  numberOfColumns = 1,
  placeholder,
  onSelectItem,
  PickerItemComponent = PickerItem,
  selectedItem,
  width = '100%',
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false)
                  onSelectItem(item)
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
})

export default AppPicker
