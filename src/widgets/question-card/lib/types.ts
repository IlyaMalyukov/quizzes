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

export type {
  Answer,
  Question,
};
