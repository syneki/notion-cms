import { NotionRenderer } from "../notion-renderer";
import { Block } from "../types";

export abstract class AbstractBlock<T extends Block | unknown = unknown> {
    abstract type: string;

    public abstract render(data: T, renderer: NotionRenderer): string;
}