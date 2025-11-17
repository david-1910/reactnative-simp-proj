// components/TransactionItem.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
    title: string;
    subtitle?: string;
    amount: string;
    date?: string;
    avatar?: string;
};

export default function TransactionItem({ title, subtitle, amount, date, avatar }: Props) {
    return (
        <TouchableOpacity style={styles.row}>
        <Image source={{ uri: avatar || 'https://i.pravatar.cc/100?img=5' }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.sub}>{subtitle} • {date}</Text>
        </View>
        <Text style={styles.amount}>{amount}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'center', padding: 12, backgroundColor: '#0b0b0b', borderRadius: 10 },
    avatar: { width: 44, height: 44, borderRadius: 22, marginRight: 12 },
    title: { color: '#fff', fontWeight: '600' },
    sub: { color: '#bdbdbd', fontSize: 12, marginTop: 4 },
    amount: { color: '#fff', fontWeight: '700' },
});
