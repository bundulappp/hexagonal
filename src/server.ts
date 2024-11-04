import { GreetingService } from './business/greeting-service';
import createApp from './primary-adapters/fastify-api-primary-adapter';
import { JsonStoreSecondaryAdapter } from './secondary-adapters/json-store-secondary-adapter';

const PORT = 4400;
const jsonStoreAdapter = new JsonStoreSecondaryAdapter();
const greetingService = new GreetingService(jsonStoreAdapter);
const options = {
  logger: {
    level: 'debug',
    transport: { target: 'pino-pretty' },
  },
};

const app = createApp(options, greetingService);

app.listen({ port: PORT }, (error, address) => {
  if (error) {
    app.log.error(error);
    process.exit(1);
  }
  app.log.info(`Server is started successfully.`);
});
