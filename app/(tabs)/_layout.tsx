import React from 'react';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { colors } from '../../src/theme/colors';

function TabIcon({ emoji, color }: { emoji: string; color: string }) {
  return <Text style={{ fontSize: 22, color }}>{emoji}</Text>;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.tertiaryText,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.separator,
          borderTopWidth: 0.5,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="career"
        options={{
          title: 'Career',
          tabBarIcon: ({ color }) => <TabIcon emoji={'\uD83D\uDCBC'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="relationships"
        options={{
          title: 'People',
          tabBarIcon: ({ color }) => <TabIcon emoji={'\uD83D\uDC65'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Life',
          tabBarIcon: ({ color }) => <TabIcon emoji={'\u2764\uFE0F'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          title: 'Activities',
          tabBarIcon: ({ color }) => <TabIcon emoji={'\u26A1'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="identity"
        options={{
          title: 'Identity',
          tabBarIcon: ({ color }) => <TabIcon emoji={'\uD83D\uDE4D'} color={color} />,
        }}
      />
    </Tabs>
  );
}
