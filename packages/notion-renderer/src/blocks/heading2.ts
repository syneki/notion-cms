import { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionRenderer } from "../notion-renderer";
import { AbstractBlock } from "./abstract-block";

export class Heading2 extends AbstractBlock<Heading2BlockObjectResponse> {

    type = 'heading_2';

    public render(data: Heading2BlockObjectResponse, renderer: NotionRenderer) {
        return `<h2>${renderer.render(...data.heading_2.rich_text)}</h2>`
    }

}