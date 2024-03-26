import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!sss');
});

app.get('/todo/:todoId', (c) => {
  return c.json({
    message: c.req.param()
  });
});

export default app;
