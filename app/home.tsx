import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#070707" />
            
            {/* Верхняя панель */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>C</Text>
                    </View>
                    <Text style={styles.userName}>Charlotte</Text>
                    <Ionicons name="chevron-forward" size={16} color="#fff" style={styles.chevron} />
                </View>
                <TouchableOpacity style={styles.gridButton}>
                    <View style={styles.grid}>
                        <View style={styles.gridDot} />
                        <View style={styles.gridDot} />
                        <View style={styles.gridDot} />
                        <View style={styles.gridDot} />
                    </View>
                </TouchableOpacity>
            </View>

            <ScrollView 
                style={styles.scrollView} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Категории */}
                <View style={styles.categories}>
                    <TouchableOpacity style={styles.category}>
                        <Ionicons name="airplane" size={24} color="#FF6B35" />
                        <Text style={styles.categoryText}>Travel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Ionicons name="cube" size={24} color="#FF6B35" />
                        <Text style={styles.categoryText}>Delivery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Ionicons name="gift" size={24} color="#FF6B35" />
                        <Text style={styles.categoryText}>Bonuses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.category}>
                        <Ionicons name="headset" size={24} color="#FF6B35" />
                        <Text style={styles.categoryText}>Support</Text>
                    </TouchableOpacity>
                </View>

                {/* Карточки */}
                <View style={styles.cardsContainer}>
                    <View style={[styles.card, styles.primaryCard]}>
                        <View style={styles.cardHeader}>
                            <View style={styles.cardChip} />
                        </View>
                        <Text style={styles.cardBalance}>$4,098.12</Text>
                        <View style={styles.cardFooter}>
                            <Text style={styles.cardTitle}>Debit</Text>
                            <Text style={styles.cardNumber}>•• 4385</Text>
                        </View>
                    </View>
                    
                    <View style={[styles.card, styles.secondaryCard]}>
                        <View style={styles.cardHeader}>
                            <View style={styles.cardChip} />
                            <TouchableOpacity style={styles.addButton}>
                                <Ionicons name="add" size={20} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.cardBalance}>$14.71</Text>
                        <View style={styles.cardFooter}>
                            <Text style={styles.cardTitle}>Virtual</Text>
                            <Text style={styles.cardNumber}>•• 9081</Text>
                        </View>
                    </View>
                </View>

                {/* Расходы */}
                <View style={styles.expensesSection}>
                    <View style={styles.expensesHeader}>
                        <Text style={styles.expensesTitle}>
                            Expenses in <Text style={styles.expensesMonth}>June</Text>
                        </Text>
                        <Text style={styles.expensesAmount}>$5,091</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressSegment, { flex: 3, backgroundColor: '#FF6B35' }]} />
                        <View style={[styles.progressSegment, { flex: 2, backgroundColor: '#FF8F35' }]} />
                        <View style={[styles.progressSegment, { flex: 1.5, backgroundColor: '#FFB535' }]} />
                        <View style={[styles.progressSegment, { flex: 0.5, backgroundColor: '#333' }]} />
                    </View>
                </View>

                {/* Сегодняшние транзакции */}
                <Text style={styles.sectionTitle}>Today</Text>
                <TouchableOpacity style={styles.transaction}>
                    <View style={styles.transactionIcon}>
                        <Ionicons name="person-circle" size={40} color="#FF6B35" />
                    </View>
                    <View style={styles.transactionInfo}>
                        <Text style={styles.transactionName}>Matthew Billson</Text>
                        <Text style={styles.transactionCategory}>• Money Transfer</Text>
                    </View>
                    <View style={styles.transactionDetails}>
                        <Text style={styles.transactionAmount}>$56.19</Text>
                        <Text style={styles.transactionDate}>Jun 9, 12:08</Text>
                    </View>
                </TouchableOpacity>

                {/* Вчерашние транзакции */}
                <Text style={styles.sectionTitle}>Yesterday</Text>
                
                <TouchableOpacity style={styles.transaction}>
                    <View style={[styles.transactionIcon, styles.starbucksIcon]}>
                        <Text style={styles.iconText}>S</Text>
                    </View>
                    <View style={styles.transactionInfo}>
                        <Text style={styles.transactionName}>Starbucks</Text>
                        <Text style={styles.transactionCategory}>• Food</Text>
                    </View>
                    <View style={styles.transactionDetails}>
                        <Text style={styles.transactionAmount}>$122.47</Text>
                        <Text style={styles.transactionDate}>Jun 8, 19:21</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.transaction}>
                    <View style={[styles.transactionIcon, styles.netflixIcon]}>
                        <Text style={styles.iconText}>N</Text>
                    </View>
                    <View style={styles.transactionInfo}>
                        <Text style={styles.transactionName}>Netflix</Text>
                        <Text style={styles.transactionCategory}>• Entertainment</Text>
                    </View>
                    <View style={styles.transactionDetails}>
                        <Text style={styles.transactionAmount}>$13.17</Text>
                        <Text style={styles.transactionDate}>Jun 8, 08:53</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.bottomSpacer} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#070707',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#FF6B35',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    avatarText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    userName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    chevron: {
        marginLeft: 4,
    },
    gridButton: {
        padding: 4,
    },
    grid: {
        width: 24,
        height: 24,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
    },
    gridDot: {
        width: 8,
        height: 8,
        backgroundColor: '#fff',
        borderRadius: 2,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    category: {
        alignItems: 'center',
        gap: 6,
    },
    categoryText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '500',
    },
    cardsContainer: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 24,
    },
    card: {
        flex: 1,
        borderRadius: 16,
        padding: 16,
        height: 160,
        justifyContent: 'space-between',
    },
    primaryCard: {
        backgroundColor: '#FF6B35',
    },
    secondaryCard: {
        backgroundColor: '#9a9a9a',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    cardChip: {
        width: 32,
        height: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 4,
    },
    addButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardBalance: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        color: '#fff',
        fontSize: 13,
        opacity: 0.9,
    },
    cardNumber: {
        color: '#fff',
        fontSize: 13,
        opacity: 0.9,
    },
    expensesSection: {
        marginBottom: 24,
    },
    expensesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    expensesTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    expensesMonth: {
        color: '#FF6B35',
    },
    expensesAmount: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    progressBar: {
        flexDirection: 'row',
        height: 6,
        borderRadius: 3,
        overflow: 'hidden',
        gap: 2,
    },
    progressSegment: {
        height: '100%',
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
        marginTop: 8,
    },
    transaction: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        padding: 12,
        borderRadius: 12,
        marginBottom: 8,
    },
    transactionIcon: {
        marginRight: 12,
    },
    starbucksIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#00704A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    netflixIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E50914',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    transactionInfo: {
        flex: 1,
    },
    transactionName: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 2,
    },
    transactionCategory: {
        color: '#FF6B35',
        fontSize: 13,
    },
    transactionDetails: {
        alignItems: 'flex-end',
    },
    transactionAmount: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 2,
    },
    transactionDate: {
        color: '#666',
        fontSize: 12,
    },
    bottomSpacer: {
        height: 20,
    },
});