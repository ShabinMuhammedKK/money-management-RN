import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Tabs } from 'expo-router'
import { TabBar } from '@/components/TabBar';

const TabLayout = () => {
  return (
    <Tabs tabBar={props => <TabBar {...props}/>}>
        <Tabs.Screen name='index' options={{title:"Home"}} />
        <Tabs.Screen name='expenses' options={{title:"Dashboard"}}/>
        <Tabs.Screen name='profile' options={{title:"Profile"}}/>
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})