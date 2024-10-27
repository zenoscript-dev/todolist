import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/Colors';

interface ButtonProps {
    title: string;
    onPress: () => void;
}
const Button = ({title, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.brandColor,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    }
})