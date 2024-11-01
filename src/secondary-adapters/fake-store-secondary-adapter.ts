import { StoreGreetingSecondaryPort } from '../business/greeting-service';

export class FakeStoreSecondaryAdapter implements StoreGreetingSecondaryPort {
  save(greeting: string) {
    console.log(`STORE: ${greeting}`);
  }
}
