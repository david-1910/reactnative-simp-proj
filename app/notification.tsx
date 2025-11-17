import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Notification() {
    const [activeTab, setActiveTab] = useState('All');
    
    const tabs = [
        { id: 'All', label: 'All', icon: 'apps' as const },
        { id: 'Payments', label: 'Payments', icon: 'card' as const },
        { id: 'System', label: 'System', icon: 'settings' as const },
        { id: 'Delivery', label: 'Delivery', icon: 'cube' as const },
        { id: 'Travel', label: 'Travel', icon: 'airplane' as const }
    ];
    
    const notifications = [
        {
            id: '1',
            time: 'TODAY, 17 JUNE',
            title: 'Received from Anna',
            amount: '+$110',
            description: 'Debit • • 4385',
            balance: '$4,098.12',
            date: '17 June 2025, 17:48 - Payments',
            type: 'payment'
        },
        {
            id: '2',
            time: 'YESTERDAY, 16 JUNE', 
            title: 'See our limited offer!',
            description: 'Would you like to visit new countries?',
            details: 'Maybe it\'s your time!',
            date: '16 June 2025, 23:08 - Travel',
            type: 'offer'
        },
        {
            id: '3',
            time: 'YESTERDAY, 16 JUNE',
            title: 'Sent to •• 2041', 
            amount: '-$14.62',
            description: 'Debit • • 4385',
            balance: '$3,987.5',
            date: '16 June 2025, 06:18 - Payments',
            type: 'payment'
        },
        {
            id: '4',
            time: '24 MARCH, 2025',
            title: 'New login into account',
            description: 'You have logged in from a new location:',
            details: 'IOS 26.0.1 - 109.255.84.7 - Spain',
            date: '24 March 2025, 15:44 - Security',
            type: 'security'
        }
    ];

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#070707" />
            
            {/* Верхняя панель */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Notifications</Text>
            </View>

            {/* Табы с иконками */}
            <View style={styles.tabsWrapper}>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.tabsContainer}
                >
                    {tabs.map(tab => (
                        <TouchableOpacity 
                            key={tab.id}
                            style={[styles.tab, activeTab === tab.id && styles.activeTab]}
                            onPress={() => setActiveTab(tab.id)}
                        >
                            <Ionicons 
                                name={tab.icon} 
                                size={18} 
                                color={activeTab === tab.id ? '#fff' : '#666'} 
                            />
                            <Text style={[styles.tabText, activeTab === tab.id && styles.activeTabText]}>
                                {tab.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Список уведомлений */}
            <ScrollView 
                style={styles.notificationsList} 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {notifications.map((notification, index) => (
                    <View key={notification.id}>
                        {/* Время группы */}
                        {index === 0 || notification.time !== notifications[index - 1].time ? (
                            <Text style={styles.timeHeader}>{notification.time}</Text>
                        ) : null}
                        
                        {/* Уведомление */}
                        <TouchableOpacity style={styles.notification}>
                            <View style={styles.notificationContent}>
                                <Text style={styles.notificationTitle}>{notification.title}</Text>
                                
                                {notification.amount && (
                                    <Text style={[
                                        styles.notificationAmount,
                                        notification.amount.startsWith('+') ? styles.amountPositive : styles.amountNegative
                                    ]}>
                                        {notification.amount}
                                    </Text>
                                )}
                                
                                <Text style={styles.notificationDescription}>{notification.description}</Text>
                                
                                {notification.balance && (
                                    <Text style={styles.notificationBalance}>{notification.balance}</Text>
                                )}
                                
                                {notification.details && (
                                    <Text style={styles.notificationDetails}>{notification.details}</Text>
                                )}
                                
                                <Text style={styles.notificationDate}>{notification.date}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}

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
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
    },
    tabsWrapper: {
        marginBottom: 16,
    },
    tabsContainer: {
        paddingHorizontal: 20,
        gap: 8,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 16,
        backgroundColor: '#1a1a1a',
    },
    activeTab: {
        backgroundColor: '#FF6B35',
    },
    tabText: {
        color: '#666',
        fontSize: 13,
        fontWeight: '500',
    },
    activeTabText: {
        color: '#fff',
    },
    notificationsList: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
    },
    timeHeader: {
        color: '#666',
        fontSize: 11,
        fontWeight: '600',
        letterSpacing: 0.5,
        marginTop: 16,
        marginBottom: 12,
    },
    notification: {
        backgroundColor: '#1a1a1a',
        padding: 16,
        borderRadius: 12,
        marginBottom: 8,
    },
    notificationContent: {
        gap: 4,
    },
    notificationTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    notificationAmount: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    amountPositive: {
        color: '#4CAF50',
    },
    amountNegative: {
        color: '#fff',
    },
    notificationDescription: {
        color: '#bdbdbd',
        fontSize: 14,
        lineHeight: 20,
    },
    notificationBalance: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        marginTop: 4,
    },
    notificationDetails: {
        color: '#bdbdbd',
        fontSize: 14,
        lineHeight: 20,
        marginTop: 2,
    },
    notificationDate: {
        color: '#666',
        fontSize: 12,
        marginTop: 8,
    },
    bottomSpacer: {
        height: 20,
    },
});