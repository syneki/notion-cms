import { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionRenderer } from "../notion-renderer";
import { AbstractBlock } from "./abstract-block";

export class Paragraph extends AbstractBlock<ParagraphBlockObjectResponse> {

    type = 'paragraph';

    public render(data: ParagraphBlockObjectResponse, renderer: NotionRenderer) {
        return `<p>${renderer.render(...data.paragraph.rich_text)}</p>`
    }

}