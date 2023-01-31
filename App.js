import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Task  from "./screens/Task";
import  NewTask  from "./screens/NewTask";
import  Profile  from "./screens/Profile";

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lista" component={Task}/>
        <Tab.Screen name="Novo Item" component={NewTask}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
