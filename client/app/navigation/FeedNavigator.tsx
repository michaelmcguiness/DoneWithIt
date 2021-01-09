import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ListingsScreen from '../screens/ListingsScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'
import { Listing } from '../types'
import routes from './routes'

export type FeedStackParamList = {
  Listings: undefined
  ListingDetails: Listing
}

const Stack = createStackNavigator()

const FeedNavigator: React.FC = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  )
}

export default FeedNavigator
