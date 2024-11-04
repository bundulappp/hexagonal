import { StoreGreetingSecondaryPort } from '../business/greeting-service';
import fs from 'fs';

export class TxtStoreSecondaryAdapter implements StoreGreetingSecondaryPort {
  save(greeting: string) {
    fs.appendFileSync('greetings.txt', `${greeting}\n`, 'utf-8');
  }
}
