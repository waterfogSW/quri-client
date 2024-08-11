import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfilePicture from '@/components/ProfilePicture';

export default function ProfileScreen() {
  return (
    <View style={ styles.container }>
      <ProfilePicture size="large"/>
      <Text style={ styles.title }>내 프로필</Text>
      <Text style={ styles.description }>여기에 사용자 정보가 표시됩니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
