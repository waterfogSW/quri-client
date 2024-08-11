// src/services/api.ts

import { Question } from '@/types';

// 더미 데이터 생성을 위한 헬퍼 함수
const generateDummyQuestions = (count: number): Question[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    author: `사용자${i + 1}`,
    tags: ['태그1', '태그2', '태그3'].slice(0, Math.floor(Math.random() * 3) + 1),
    title: `질문 제목 ${i + 1}`,
    content: `이것은 질문 ${i + 1}의 내용입니다. 여기에 질문에 대한 자세한 설명이 들어갑니다.`,
    participants: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 50),
    likes: Math.floor(Math.random() * 30),
  }));
};

export const fetchQuestions = async (): Promise<Question[]> => {
  // API 호출을 시뮬레이션하기 위해 지연 추가
  await new Promise(resolve => setTimeout(resolve, 1000));

  // 10개의 더미 질문 데이터 생성 및 반환
  return generateDummyQuestions(10);
};

// 필요에 따라 다른 API 함수들을 여기에 추가할 수 있습니다.
// 예: fetchQuestionById, postAnswer, likeQuestion 등
