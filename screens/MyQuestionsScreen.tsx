import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyQuestionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>내 질문</Text>
      <Text style={styles.description}>여기에 사용자가 작성한 질문 목록이 표시됩니다.</Text>
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
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
