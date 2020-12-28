import { ImageSourcePropType } from 'react-native'
import { Props as IconProps } from './components/Icon'
import glyphmap from 'react-native-vector-icons/glyphmaps/MaterialCommunityIcons.json'

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

export interface Category {
  label: string
  value: number
}

type MyMap<T> = {
  [P in keyof T]: number
}

// spread keys after converting glyphmap into MyMap
export type IconName = keyof MyMap<typeof glyphmap>
