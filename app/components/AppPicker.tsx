import React, { useState } from 'react'
import { Button, Modal, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Screen from './Screen'
import AppText, { Props as AppTextProps } from './AppText'
import defaultStyles from '../config/styles'
import { IconName } from '../types'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

interface Props extends AppTextProps {
  placeholder: string
  iconName?: IconName
}

const AppPicker: React.FC<Props> = ({ iconName, placeholder, ...rest }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text} {...rest}>
            {placeholder}
          </AppText>
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
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
})

export default AppPicker
