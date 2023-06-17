import { rest } from 'msw';
import { API_PATHS } from "../../shared/config";

export const getQuizList = [
    rest.get(`${ API_PATHS.BASE }/quizzes`, (req, res, ctx) => res(
        ctx.status(200),
        ctx.json({
            content: [
                {
                    id: 0,
                    title: 'Кто ты из вселенной Гарри Поттера',
                },
                {
                    id: 1,
                    title: 'Загадка от Жака Фреско (не мудрить)',
                },
                {
                    id: 2,
                    title: 'Какая ты жвачка',
                }
            ]
        })
    ))
];
