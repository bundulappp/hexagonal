import { join } from 'node:path';
import { StoreGreetingSecondaryPort } from '../business/greeting-service';
import { writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
export class JsonStoreSecondaryAdapter implements StoreGreetingSecondaryPort {
  async save(greeting: string) {
    const content = await readFile(
      join(__dirname, '../../', 'data.json'),
      'utf-8'
    );

    let parsedContent = JSON.parse(content);
    parsedContent = [...parsedContent, greeting];

    writeFileSync(
      join(__dirname, '../../', 'data.json'),
      JSON.stringify(parsedContent)
    );
  }
}
