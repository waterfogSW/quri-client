export interface Question {
  id: number;
  author: string;
  tags: string[];
  title: string;
  content: string;
  participants: number;
  comments: number;
  likes: number;
}
