import { router } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function Home() {
    return (
        <SafeAreaView className="h-full bg-red-600">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="flex justify-center items-center min-h-[85vh]">
                    <Text className="text-white font-bold text-6xl">
                        imarket
                    </Text>
                    <Text className="text-white -my-2.5">
                        the best products are here
                    </Text>
                </View>
                <View className="absolute w-screen bg-white bottom-0 rounded-t-xl p-6">
                    <View className="flex flex-col">
                        <CustomButton
                            title="i already have an account"
                            onPress={() => {
                                router.push('/login');
                            }}
                        />
                        <CustomButton
                            title="create an account"
                            outlined={true}
                            onPress={() => {
                                router.push('/signup');
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
