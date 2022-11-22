import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { AbstractBlock } from "./abstract-block";

export class Text extends AbstractBlock<TextRichTextItemResponse> {
    type = 'text';

    public render(data: TextRichTextItemResponse) {
        let result = data.plain_text;

        if (data.annotations.bold) {
            result = `<b>${result}</b>`
        }

        if (data.annotations.italic) {
            result = `<i>${result}</i>`
        }

        if (data.annotations.strikethrough) {
            result = `<s>${result}</s>`
        }

        if (data.annotations.underline) {
            result = `<u>${result}</u>`
        }

        if (data.annotations.code) {
            result = `<code>${result}</code>`
        }

        if (data.annotations.color) {
            // TODO
        }

        return result;
    }

}