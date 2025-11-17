// components/Card.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
    color?: string;
    title?: string;
    balance?: string;
    suffix?: string;
    small?: boolean;
};

export default function Card({ color = '#333', title, balance, suffix, small }: Props) {
    return (
        <View style={[styles.card, { backgroundColor: color, width: small ? 160 : 220 }]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.balance}>{balance}</Text>
            <Text style={styles.suffix}>{suffix}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: { 
        borderRadius: 12, 
        padding: 16, 
        marginRight: 12, 
        height: 120,
        justifyContent: 'space-between',
    },
    title: { 
        color: '#fff', 
        opacity: 0.9,
        fontSize: 14,
        fontWeight: '500',
    },
    balance: { 
        color: '#fff', 
        fontSize: 22, 
        fontWeight: '700',
    },
    suffix: { 
        color: '#fff', 
        opacity: 0.9,
        fontSize: 14,
    },
});