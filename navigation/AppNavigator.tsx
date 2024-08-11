import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MyQuestionsScreen from '../screens/MyQuestionsScreen';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyQuestions" component={MyQuestionsScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
