import { Client } from '@notionhq/client';
import { ClientOptions } from '@notionhq/client/build/src/Client';
import { NotionRenderer } from '@syneki/notion-renderer';
import { NotionParser } from './notion-parser';

export type NotionCMSOptions = ClientOptions & {
  renderer?: NotionRenderer;
  parser?: NotionParser;
};

export class NotionCMS {
  client: Client;
  renderer: NotionRenderer;
  parser: NotionParser;

  constructor(options: NotionCMSOptions) {
    this.client = new Client(options);
    this.renderer = options.renderer ?? new NotionRenderer();
    this.parser = options.parser ?? new NotionParser();
  }
}
