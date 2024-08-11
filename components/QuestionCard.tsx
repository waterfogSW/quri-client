import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Question } from '../types';
import ProfilePicture from './ProfilePicture';
import { Feather } from '@expo/vector-icons';

interface QuestionCardProps {
  question: Question;
  onAnswerPress: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswerPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.authorInfo}>
          <ProfilePicture size="small" />
          <Text style={styles.authorName}>{question.author}</Text>
        </View>
      </View>

      <View style={styles.tagContainer}>
        {question.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.title}>{question.title}</Text>
      <Text style={styles.content} numberOfLines={3}>{question.content}</Text>

      <View style={styles.footer}>
        <View style={styles.stats}>
          <Feather name="users" size={16} color="#6B7280" />
          <Text style={styles.statText}>{question.participants}</Text>

          <Feather name="message-square" size={16} color="#6B7280" />
          <Text style={styles.statText}>{question.comments}</Text>

          <Feather name="thumbs-up" size={16} color="#6B7280" />
          <Text style={styles.statText}>{question.likes}</Text>
        </View>

        <View style={styles.answerSection}>
          <TouchableOpacity style={styles.answerButton} onPress={onAnswerPress}>
            <Text style={styles.answerButtonText}>답변하기</Text>
          </TouchableOpacity>
          <Text style={styles.pointsText}>+50 포인트</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorName: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  tag: {
    backgroundColor: '#EBF5FF',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: '#3B82F6',
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 4,
    marginRight: 12,
    color: '#6B7280',
    fontSize: 12,
  },
  answerSection: {
    alignItems: 'flex-end',
  },
  answerButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  answerButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  pointsText: {
    color: '#3B82F6',
    fontWeight: '600',
    fontSize: 12,
    marginTop: 4,
  },
});

export default QuestionCard;
