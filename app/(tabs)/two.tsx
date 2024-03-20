import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import ProjectMenu from '@/components/ProjectMenu';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}><h1>Projects</h1></Text>
      <ProjectMenu />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ECA400',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
