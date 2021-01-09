import React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Screen from '../components/Screen'
import colors from '../config/colors'
import { Listing } from '../types'
import Card from '../components/Card'
import { FeedStackParamList } from '../navigation/FeedNavigator'
import { StackNavigationProp } from '@react-navigation/stack'

const listings: Listing[] = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
]

type ListingsScreenNavigationProp = StackNavigationProp<
  FeedStackParamList,
  'ListingDetails'
>

interface props {
  navigation: ListingsScreenNavigationProp
}

const ListingsScreen: React.FC<props> = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={'$' + item.price}
            image={item.image}
            onPress={() => navigation.navigate('ListingDetails', item)}
          />
        )}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
})

export default ListingsScreen
