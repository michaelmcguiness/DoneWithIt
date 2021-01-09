import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  TouchableHighlight,
  GestureResponderEvent,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
// @ts-ignore
import Swipeable from 'react-native-gesture-handler/Swipeable'

import AppText from './AppText'
import colors from '../config/colors'

interface Props {
  title: string
  subtitle?: string
  image?: ImageSourcePropType
  IconComponent?: any
  onPress?: (event: GestureResponderEvent) => void
  renderRightActions?: (props: any) => React.ReactNode
}

const ListItem: React.FC<Props> = ({
  title,
  subtitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText style={styles.subtitle} numberOfLines={2}>
                {subtitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: '400',
  },
})

export default ListItem
