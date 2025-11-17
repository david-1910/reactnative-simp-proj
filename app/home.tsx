import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#070707" />
            
            {/* Верхняя панель */}
            <View style={styles.header}>
                <Text style={styles.userName}>Charlotte {'>'}</Text>
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                
                {/* Категории */}
                <View style={styles.categories}>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.categoryText}>Travel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.categoryText}>Delivery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.categoryText}>Bonuses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Text style={styles.categoryText}>Support</Text>
                    </TouchableOpacity>
                </View>

                {/* Карточки */}
                <View style={styles.cards}>
                    <View style={[styles.card, styles.primaryCard]}>
                        <Text style={styles.cardTitle}>Debit</Text>
                        <Text style={styles.cardBalance}>$4,098.12</Text>
                        <Text style={styles.cardNumber}>4385</Text>
                    </View>
                    <View style={[styles.card, styles.secondaryCard]}>
                        <Text style={styles.cardTitle}>Virtual</Text>
                        <Text style={styles.cardBalance}>$14.7</Text>
                        <Text style={styles.cardNumber}>9081</Text>
                    </View>
                </View>

                {/* Расходы */}
                <View style={styles.expenses}>
                    <View style={styles.expensesHeader}>
                        <Text style={styles.expensesTitle}>Expenses in June</Text>
                        <Text style={styles.expensesAmount}>$5,091</Text>
                    </View>
                </View>

                {/* Сегодняшние транзакции */}
                <Text style={styles.sectionTitle}>Today</Text>
                <View style={styles.transaction}>
                    <View style={styles.transactionInfo}>
                        <Text style={styles.transactionName}>Matthew Billson</Text>
                        <Text style={styles.transactionCategory}>Money Transfer</Text>
                    </View>
                    <View style={styles.transactionDetails}>
                        <Text style={styles.transactionAmount}>$56.19</Text>
                        <Text style={styles.transactionDate}>Jun 9, 12:08</Text>
                    </View>
                </View>

                {/* Вчерашние транзакции */}
                <Text style={styles.sectionTitle}>Yesterday</Text>
                <View style={styles.transaction}>
                    <View style={styles.transactionInfo}>
                        <Text style={styles.transactionName}>Starbucks</Text>
                        <Text style={styles.transactionCategory}>Food</Text>
                    </View>
                    <View style={styles.transactionDetails}>
                        <Text style={styles.transactionAmount}>$122.47</Text>
                        <Text style={styles.transactionDate}>Jun 8, 19:21</Text>
                    </View>
                </View>
                <View style={styles.transaction}>
                    <View style={styles.transactionInfo}>
                        <Text style={styles.transactionName}>Netflix</Text>
                        <Text style={styles.transactionCategory}>Entertainment</Text>
                    </View>
                    <View style={styles.transactionDetails}>
                        <Text style={styles.transactionAmount}>$13.17</Text>
                        <Text style={styles.transactionDate}>Jun 8, 08:53</Text>
                    </View>
                </View>

                {/* Нижняя навигация */}
                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.navItem}>
                        <Text style={[styles.navText, styles.navActive]}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Text style={styles.navText}>Payments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Text style={styles.navText}>History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Text style={styles.navText}>Analytics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItem}>
                        <Text style={styles.navText}>Chats</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#070707',
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    time: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    },
    userName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    category: {
        backgroundColor: '#1a1a1a',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        minWidth: 80,
        alignItems: 'center',
    },
    categoryText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },
    cards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    card: {
        flex: 1,
        borderRadius: 15,
        padding: 20,
        marginHorizontal: 5,
        height: 140,
        justifyContent: 'space-between',
    },
    primaryCard: {
        backgroundColor: '#FF6B35',
    },
    secondaryCard: {
        backgroundColor: '#9a9a9a',
    },
    cardTitle: {
        color: '#fff',
        fontSize: 14,
        opacity: 0.9,
    },
    cardBalance: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    cardNumber: {
        color: '#fff',
        fontSize: 16,
        opacity: 0.9,
    },
    expenses: {
        marginBottom: 30,
    },
    expensesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    expensesTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    expensesAmount: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
        marginTop: 10,
    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
    },
    transactionInfo: {
        flex: 1,
    },
    transactionName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    transactionCategory: {
        color: '#bdbdbd',
        fontSize: 14,
    },
    transactionDetails: {
        alignItems: 'flex-end',
    },
    transactionAmount: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    transactionDate: {
        color: '#666',
        fontSize: 12,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0f0f0f',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 30,
    },
    navItem: {
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    navText: {
        color: '#666',
        fontSize: 12,
        fontWeight: '500',
    },
    navActive: {
        color: '#FF6B35',
    },
});