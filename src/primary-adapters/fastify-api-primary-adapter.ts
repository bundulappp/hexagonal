import fastify from 'fastify';
import { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts';
import { ProvideNamePrimaryPort } from '../business/greeting-service';
const schema = {
  body: {
    type: 'object',
    properties: {
      name: { type: 'string', minLength: 2 },
    },
    required: ['name'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        name: { type: 'string' },
      },
    },
  },
} as const;

export default function createApp(
  options = {},
  greetingService: ProvideNamePrimaryPort
) {
  const app = fastify(options).withTypeProvider<JsonSchemaToTsProvider>();

  app.get('/hello', async () => {
    return { hello: 'World!' };
  });

  app.post(
    '/greet',
    {
      schema: schema,
    },
    async (request, reply) => {
      const { name } = request.body;

      const greetings = greetingService.greet(name);

      reply.code(201).send({ greeting: greetings });
    }
  );

  return app;
}
