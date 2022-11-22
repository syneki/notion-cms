import { Heading1BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionRenderer } from "../notion-renderer";
import { AbstractBlock } from "./abstract-block";

export class Heading1 extends AbstractBlock<Heading1BlockObjectResponse> {

    type = 'heading_1';

    public render(data: Heading1BlockObjectResponse, renderer: NotionRenderer) {
        return `<h1>${renderer.render(...data.heading_1.rich_text)}</h1>`
    }

}