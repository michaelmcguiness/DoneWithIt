import React from 'react';
import { StyleSheet, View, Image, ImageSourcePropType } from 'react-native';

import AppText from './AppText'
import colors from '../config/colors'

interface Props {
    title: string
    subtitle: string
    image: ImageSourcePropType
}

const Card: React.FC<Props> = ({title, subtitle, image}) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 200
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: "bold"
    },
    title: {
        marginBottom: 7
    }
})

export default Card;