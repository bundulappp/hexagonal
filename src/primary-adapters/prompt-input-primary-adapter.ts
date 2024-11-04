import { ProvideNamePrimaryPort } from '../business/greeting-service';
import promptSync from 'prompt-sync';
import fs from 'fs';

export function runPromptApp(greetingService: ProvideNamePrimaryPort) {
  const prompt = promptSync();

  const name = prompt('Add meg a neved: ');
  const greeting = greetingService.greet(name);

  fs.appendFileSync('greetings.txt', `${greeting}\n`, 'utf-8');
}
