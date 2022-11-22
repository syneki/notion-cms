import { BlockObjectResponse, PageObjectResponse, QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";
import { ParserManager } from "./managers/parsers.manager";
import { NotionCMS } from "./notion-cms";
import { PageParser } from "./parsers/page.parser";
import { Entity, EntityMapping, ListResult } from "./types";

export type NotionDatabaseOptions<TEntityProps> = {
    databaseId: string;
    cms: NotionCMS;
    mapping: EntityMapping<TEntityProps>;
}

export class NotionDatabase<TEntityProps extends Record<string, any>> {

    databaseId: string;
    cms: NotionCMS;
    mapping: EntityMapping<TEntityProps>

    constructor(
        options: NotionDatabaseOptions<TEntityProps>
    ) {
        this.databaseId = options.databaseId
        this.cms = options.cms;
        this.mapping = options.mapping
    }

    async list(
        filter?: QueryDatabaseParameters['filter'],
        pageSize = 10,
        cursor?: string
    ): Promise<ListResult<Entity<TEntityProps>>> {
        const res = await this.cms.client.databases.query({
            database_id: this.databaseId,
            filter,
            start_cursor: cursor,
            page_size: pageSize
        })

        const entities = res.results.map(page => this.cms.parserManager.parse(PageParser<TEntityProps>, page, this))

        return {
            data: entities
        }
    }

    async get(id: string): Promise<Entity<TEntityProps>> {
        const res = await this.cms.client.pages.retrieve({
            page_id: id
        })

        return this.cms.parserManager.parse(PageParser<TEntityProps>, res, this)
    }

    async findFirst(filter?: QueryDatabaseParameters['filter']): Promise<Entity<TEntityProps>> {
        const posts = await this.list(filter, 1);
        return posts.data[0]
    }

    async getContent(id: string): Promise<string> {
        if (!this.cms.renderer) throw new Error('You must configure a renderer to retreive page content');

        const result = await this.cms.client.blocks.children.list({
            block_id: id
        }).then(r => r.results) as BlockObjectResponse[]

        return this.cms.renderer.render(...result)
    }
}