import { NotionCMS } from "../notion-cms";
import { NotionDatabase } from "../notion-database";
import { AbstractParser } from "../parsers/abstract-parser"
import { Type } from "../types";

export class ParserManager {

    constructor(private cms: NotionCMS) {}

    parsers: {
        [name: string]: AbstractParser<unknown, unknown>
    } = {}

    setParser(name: string, Parser: Type<AbstractParser<unknown, unknown>>) {
        this.parsers[name] = new Parser();
    }

    parse<TData, TResult>(Parser: Type<AbstractParser<TData, TResult>>, data: TData, database: NotionDatabase<any>): TResult {
        const parser = (this.parsers[Parser.name] ?? new Parser()) as AbstractParser<TData, TResult>;
        return parser.parse(data, this.cms, database);
    }
}