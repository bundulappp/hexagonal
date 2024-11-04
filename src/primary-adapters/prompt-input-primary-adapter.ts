import { ProvideNamePrimaryPort } from '../business/greeting-service';
import promptSync from 'prompt-sync';

export function runPromptApp(greetingService: ProvideNamePrimaryPort) {
  const prompt = promptSync();

  const name = prompt('Add meg a neved: ');
  greetingService.greet(name);
}
