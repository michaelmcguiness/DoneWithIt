import React from 'react'
import { Image, StyleSheet, View, FlatList } from 'react-native'

import Screen from '../components/Screen'
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import colors from '../config/colors'
import { MenuItem } from '../types'
import Card from '../components/Card'

const listings = [
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

function ListingsScreen() {
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
