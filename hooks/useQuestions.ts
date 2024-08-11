import {useState, useEffect, useCallback} from 'react';
import {fetchQuestions} from '@/services/api';
import {Question} from '@/types';

export const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadQuestions = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchQuestions();
      setQuestions(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const refetchQuestions = useCallback(() => {
    loadQuestions();
  }, [loadQuestions]);

  return {questions, loading, error, refetchQuestions};
};
