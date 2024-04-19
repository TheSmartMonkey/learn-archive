import { Hono } from 'hono';

type Bindings = {
  STAGE: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', (c) => {
  return c.text('Hello Hono!sss');
});

app.get('/todo/:todoId', (c) => {
  return c.json({
    stage: c.env.STAGE,
    todoId: c.req.param('todoId'),
  });
});

export default app;
