import { rest } from 'msw';
import { API_PATHS } from "@/shared/config";
import { quizzesFullData } from "../data/quizzesFullData";

export const getQuizById = [
    rest.get(`${ API_PATHS.BASE }/quiz/:id`, (req, res, ctx) => {
        const quizId = req.params.id;

        return res(
            ctx.status(200),
            ctx.json({
                data: { ...quizzesFullData[quizId] },
            })
        )
    }),
];
