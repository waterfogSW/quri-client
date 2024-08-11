import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

function LogoTitle() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.logoText}>Quri</Text>
    </View>
  );
}

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: () => <LogoTitle />,
        headerStyle: { backgroundColor: '#f4f4f4' },
        tabBarStyle: { backgroundColor: '#f4f4f4' },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="(tabs)/my-questions"
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="help-circle" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/home"
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/profile"
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
