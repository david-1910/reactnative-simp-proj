import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';

export default function Notification() {
    const [activeTab, setActiveTab] = useState('All');
    
    const tabs = ['All', 'Payments', 'System', 'Delivery', 'Travel'];
    
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
                <Text style={styles.time}>9:41</Text>
                <Text style={styles.headerTitle}>Notifications</Text>
                <View style={styles.placeholder} />
            </View>

            {/* Табы */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
                <View style={styles.tabs}>
                    {tabs.map(tab => (
                        <TouchableOpacity 
                            key={tab}
                            style={[styles.tab, activeTab === tab && styles.activeTab]}
                            onPress={() => setActiveTab(tab)}
                        >
                            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {/* Список уведомлений */}
            <ScrollView style={styles.notificationsList} showsVerticalScrollIndicator={false}>
                {notifications.map((notification, index) => (
                    <View key={notification.id}>
                        {/* Время группы */}
                        {index === 0 || notification.time !== notifications[index - 1].time ? (
                            <Text style={styles.timeHeader}>{notification.time}</Text>
                        ) : null}
                        
                        {/* Уведомление */}
                        <View style={styles.notification}>
                            <View style={styles.notificationContent}>
                                <Text style={styles.notificationTitle}>{notification.title}</Text>
                                
                                {notification.amount && (
                                    <Text style={styles.notificationAmount}>{notification.amount}</Text>
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
                        </View>
                    </View>
                ))}

                {/* Нижняя навигация */}
                <View style={styles.bottomNav}>
                    <TouchableOpacity style={styles.navItem}>
                        <Text style={styles.navText}>Home</Text>
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
        paddingBottom: 15,
    },
    time: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    placeholder: {
        width: 24,
    },
    tabsContainer: {
        marginBottom: 10,
    },
    tabs: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    tab: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginRight: 10,
        borderRadius: 15,
    },
    activeTab: {
        backgroundColor: '#FF6B35',
    },
    tabText: {
        color: '#666',
        fontSize: 14,
        fontWeight: '500',
    },
    activeTabText: {
        color: '#fff',
    },
    notificationsList: {
        flex: 1,
        paddingHorizontal: 20,
    },
    timeHeader: {
        color: '#666',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 20,
        marginBottom: 10,
    },
    notification: {
        backgroundColor: '#1a1a1a',
        padding: 15,
        borderRadius: 12,
        marginBottom: 10,
    },
    notificationContent: {
        flex: 1,
    },
    notificationTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    notificationAmount: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    notificationDescription: {
        color: '#bdbdbd',
        fontSize: 14,
        marginBottom: 3,
    },
    notificationBalance: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 3,
    },
    notificationDetails: {
        color: '#bdbdbd',
        fontSize: 14,
        marginBottom: 5,
    },
    notificationDate: {
        color: '#666',
        fontSize: 12,
        marginTop: 5,
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
});