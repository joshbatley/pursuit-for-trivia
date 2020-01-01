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

// interface QuestionsData {
//   response_code: number;
//   results: Question[];
// }

type QuestionRes = Question[] | null;
