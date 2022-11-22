import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionCMS } from "../../notion-cms";
import { NotionDatabase } from "../../notion-database";
import { Property, PropertyRichTextTypes } from "../../types";
import { AbstractPropertyParser } from "./abstract-property.parser";

export class RichTextPropertyParser<TType extends PropertyRichTextTypes> extends AbstractPropertyParser<RichTextItemResponse[], TType, string> {

    parse(data: Property<RichTextItemResponse[], TType>, cms: NotionCMS): string | null | undefined {
        const value = data[data.type];
        if (!value) return;

        if (!cms.renderer) return value.map(b => b.plain_text).join('');
        return cms.renderer.render(...value)
    }

}