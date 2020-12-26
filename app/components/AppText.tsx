import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

interface Props {
    children: React.ReactNode
    style?: Object
}

const AppText: React.FC<Props> = ({ children, style }) => {
    return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir"
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            }
        })
    }
})

export default AppText;