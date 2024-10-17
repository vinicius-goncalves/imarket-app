import { Tabs } from 'expo-router';
import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import icons from '../../constants/icons';

interface TabIconProps {
    name: string;
    icon: ImageSourcePropType;
    focused: boolean;
}

function TabIcon({ name, icon, focused }: TabIconProps) {
    return (
        <View className="flex-1 justify-center items-center">
            <Image
                source={icon as ImageSourcePropType}
                resizeMode="contain"
                className={`${focused ? 'opacity-100' : 'opacity-30'} w-6 h-6`}
            />
            <Text className="text-[13px]">{name}</Text>
        </View>
    );
}

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { height: 60 },
                tabBarActiveTintColor: '#ff0000',
                tabBarInactiveTintColor: '#ff0000',
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            name="Home"
                            icon={icons.home}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            name="Profile"
                            icon={icons.search}
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
