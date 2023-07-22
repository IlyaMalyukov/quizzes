type Answer = {
  id: number;
  value: string;
  points: number;
};

type Question = {
  id: number;
  title: string;
  img: string;
  answers: Answer[];
};

type Quiz = {
  id: string;
  title: string;
  questions: Question[];
};

export type {
  Answer,
  Question,
  Quiz,
};
