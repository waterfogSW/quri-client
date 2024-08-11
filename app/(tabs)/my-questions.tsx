import React from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import QuestionCard from '@/components/QuestionCard';
import { useQuestions } from '@/hooks/useQuestions';
import { Question } from '@/types';

export default function HomeScreen() {
  const { questions, loading, error, refetchQuestions } = useQuestions();

  const renderItem = ({ item }: { item: Question }) => (
    <QuestionCard
      question={ item }
      onAnswerPress={ () => {
        // 여기에 답변하기 버튼 눌렀을 때의 로직 구현
        console.log('Answer pressed for question:', item.id);
      } }
    />
  );

  if (loading) {
    return (
      <View style={ styles.centered }>
        <ActivityIndicator size="large" color="#0000ff"/>
      </View>
    );
  }

  if (error) {
    return (
      <View style={ styles.centered }>
        <Text style={ styles.errorText }>오류가 발생했습니다: { error.message }</Text>
      </View>
    );
  }

  return (
    <View style={ styles.container }>
      <FlatList
        data={ questions }
        renderItem={ renderItem }
        keyExtractor={ (item) => item.id.toString() }
        contentContainerStyle={ styles.listContainer }
        refreshControl={
          <RefreshControl
            refreshing={ loading }
            onRefresh={ refetchQuestions }
          />
        }
        ListEmptyComponent={
          <Text style={ styles.emptyText }>질문이 없습니다.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  listContainer: {
    padding: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
});
