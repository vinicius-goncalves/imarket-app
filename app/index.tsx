import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function Root() {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-4xl">iMarket</Text>
            <Text className="text-sm text-gray-700">Welcome to the iMarket!</Text>
            <View className="my-2">
                <Link href="/home" className="border border-red-500 p-2">
                    Access Home
                </Link>
            </View>
        </View>
    );
}
