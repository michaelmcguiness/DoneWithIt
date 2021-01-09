import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Card from '../components/Card'
import colors from '../config/colors'
import { Listing } from '../types'
import listingsAPI from '../api/listings'
import { FeedStackParamList } from '../navigation/FeedNavigator'
import Screen from '../components/Screen'
import { StackNavigationProp } from '@react-navigation/stack'

type ListingsScreenNavigationProp = StackNavigationProp<
  FeedStackParamList,
  'ListingDetails'
>

interface props {
  navigation: ListingsScreenNavigationProp
}

const ListingsScreen: React.FC<props> = ({ navigation }) => {
  const [listings, setListings] = useState<Listing[]>([])

  useEffect(() => {
    loadListings()
  }, [])

  const loadListings = async () => {
    const response = await listingsAPI.getListings()
    if (response.data) {
      setListings(response.data)
    }
  }

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={'$' + item.price}
            imageUrl={item.images[0].url}
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
