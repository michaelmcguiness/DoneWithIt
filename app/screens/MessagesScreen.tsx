import React, { useState } from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

import colors from '../config/colors'
import { Message } from '../types'

const initialMessages: Message[] = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
]

function MessagesScreen() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)

  const handleDelete = (message: Message) => {
    // Delete message from messages array
    setMessages(messages.filter((m) => m.id !== message.id))
  }
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})

export default MessagesScreen
