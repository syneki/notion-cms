import { NotionCMS } from "../notion-cms";
import { NotionDatabase } from "../notion-database";

export abstract class AbstractParser<TData, TResult> {
    abstract parse(data: TData, cms: NotionCMS, database: NotionDatabase<any>): TResult
}