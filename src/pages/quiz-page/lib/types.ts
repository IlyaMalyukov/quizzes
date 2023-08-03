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

type Result = {
  id: number;
  value: string;
  points_to_achieve: number;
  img: string,
}

type Quiz = {
  id: string;
  title: string;
  questions: Question[];
  results: Result[];
};

export type {
  Answer,
  Question,
  Quiz,
};
