import { GreetingService } from './business/greeting-service';
import { runPromptApp } from './primary-adapters/prompt-input-primary-adapter';
import { TxtStoreSecondaryAdapter } from './secondary-adapters/txt-store-secondary-adapter';

const txtStoreAdapter = new TxtStoreSecondaryAdapter();
const greetingService = new GreetingService(txtStoreAdapter);
runPromptApp(greetingService);
