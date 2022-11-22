import { Client } from "@notionhq/client";
import { ClientOptions } from "@notionhq/client/build/src/Client";
import { NotionRenderer } from "@syneki/notion-renderer";
import { ParserManager } from "./managers/parsers.manager";

export type NotionCMSOptions = ClientOptions & {
    renderer?: NotionRenderer
}

export class NotionCMS {

    client: Client
    renderer?: NotionRenderer
    parserManager: ParserManager

    constructor(options: NotionCMSOptions) {
        this.client = new Client(options);
        this.renderer = options.renderer;
        this.parserManager = new ParserManager(this);
    }

}