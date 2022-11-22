import { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionRenderer } from "../notion-renderer";
import { AbstractBlock } from "./abstract-block";

export class Heading3 extends AbstractBlock<Heading3BlockObjectResponse> {

    type = 'heading_3';

    public render(data: Heading3BlockObjectResponse, renderer: NotionRenderer) {
        return `<h3>${renderer.render(...data.heading_3.rich_text)}</h3>`
    }

}