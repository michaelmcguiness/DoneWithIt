import { ImageSourcePropType } from 'react-native'
import { Props as IconProps } from './components/Icon'

export interface Message {
  id: number
  title: string
  description: string
  image: ImageSourcePropType
}

export interface MenuItem {
  title: string
  icon: IconProps
}
