import { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionRenderer } from "../notion-renderer";
import { AbstractBlock } from "./abstract-block";

export class Code extends AbstractBlock<CodeBlockObjectResponse> {
    type = 'code';

    public render(data: CodeBlockObjectResponse, renderer: NotionRenderer): string {
        return `<pre><code class="language-${data.code.language}">${renderer.render(...data.code.rich_text)}</code></pre>`
    }

}