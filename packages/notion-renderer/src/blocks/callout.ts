import { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionRenderer } from "../notion-renderer";
import { AbstractBlock } from "./abstract-block";

export class Callout extends AbstractBlock<CalloutBlockObjectResponse> {
    type = 'callout';

    public render(data: CalloutBlockObjectResponse, renderer: NotionRenderer) {
        return `<blockquote>${data.callout.icon && renderer.render(data.callout.icon)} ${renderer.render(...data.callout.rich_text)}</blockquote>`
    }

}