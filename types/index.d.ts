declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}

interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuestionsData {
  response_code: number;
  results: Question[];
}

type QuestionRes = Question[];

// Config
interface Settings {
  maxLives: number;
  maxTime: number;
}

type API = 'questionURL' | 'categoryURL' | 'tokenURL';

interface CategoriesData {
  trivia_categories: { id: number; name: string; }[];
}

interface TokenData {
  response_code: number;
  response_message?: string;
  token: string;
}

type QuestionType = 'boolean' | 'multiple';
type QuestionDifficulty = 'easy' | 'medium' | 'hard';

interface FetchQuestionsArgs {
  category?: number;
  type?: QuestionType;
  encoding?: string;
  difficulty?: QuestionDifficulty;
}
