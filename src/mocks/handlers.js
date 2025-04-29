import { rest } from 'msw';

export const handlers = [
  rest.get('/api/profile/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: 'John Doe',
        job: 'Software Engineer at Example Corp.'
      })
    );
  })
];