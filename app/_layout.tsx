import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { 
                    height: 70, 
                    paddingBottom: 12,
                    paddingTop: 8,
                    backgroundColor: '#070707',
                    borderTopColor: '#1a1a1a',
                    borderTopWidth: 1,
                },
                tabBarActiveTintColor: '#FF6B35',
                tabBarInactiveTintColor: '#9b9b9b',
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '500',
                    marginTop: 4,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons 
                            name={focused ? "home" : "home-outline"} 
                            size={24} 
                            color={color} 
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="payments"
                options={{
                    title: 'Payments',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons 
                            name={focused ? "card" : "card-outline"} 
                            size={24} 
                            color={color} 
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'History',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons 
                            name={focused ? "time" : "time-outline"} 
                            size={24} 
                            color={color} 
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="analytics"
                options={{
                    title: 'Analytics',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons 
                            name={focused ? "stats-chart" : "stats-chart-outline"} 
                            size={24} 
                            color={color} 
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="notification"
                options={{
                    title: 'Notifications',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons 
                            name={focused ? "notifications" : "notifications-outline"} 
                            size={24} 
                            color={color} 
                        />
                    ),
                }}
            />
            
        </Tabs>
    );
}