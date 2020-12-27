import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  TouchableHighlight,
  GestureResponderEvent,
} from 'react-native'
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
  renderRightActions?: any
}

const Card: React.FC<Props> = ({
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
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
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

export default Card
