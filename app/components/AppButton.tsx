import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

interface Props {
    title: string
    onPress: (event: GestureResponderEvent) => void
    color?: string
}

const AppButton: React.FC<Props> = ({title, onPress, color = colors.primary}) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
    
})

export default AppButton;