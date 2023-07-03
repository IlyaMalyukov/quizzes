import { getQuizList } from "./getQuizList";
import { getQuizById } from "./getQuizById";

export const handlers = [
    ...getQuizList,
    ...getQuizById,
];
