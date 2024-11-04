import { FakeStoreSecondaryAdapter } from './secondary-adapters/fake-store-secondary-adapter';
import { GreetingService } from './business/greeting-service';
import { runPromptApp } from './primary-adapters/prompt-input-primary-adapter';

const storeAdapter = new FakeStoreSecondaryAdapter();
const greetingService = new GreetingService(storeAdapter);
runPromptApp(greetingService);
