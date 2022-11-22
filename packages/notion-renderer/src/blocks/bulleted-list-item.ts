import { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionRenderer } from "../notion-renderer";
import { AbstractBlock } from "./abstract-block";

export class BulletedListItem extends AbstractBlock {
    type = 'bulleted_list_item';

    public render(data: BulletedListItemBlockObjectResponse, renderer: NotionRenderer): string {
        return `<li>${renderer.render(...data.bulleted_list_item.rich_text)}</li>`;
    }

}