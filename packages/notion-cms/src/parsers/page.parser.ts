import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionCMS } from "../notion-cms";
import { NotionDatabase } from "../notion-database";
import { Entity } from "../types";
import { AbstractParser } from "./abstract-parser";
import { PropertiesParser } from "./properties.parser";

export class PageParser<TEntityProps extends Record<string, any>> extends AbstractParser<PageObjectResponse, Entity<TEntityProps>> {
    
    parse(page: PageObjectResponse, cms: NotionCMS, database: NotionDatabase<TEntityProps>): Entity<TEntityProps> {
        const properties = cms.parserManager.parse(PropertiesParser<TEntityProps>, page.properties, database);

        return {
            id: page.id,
            cover: page.cover,
            ...properties,
            updatedAt: page.last_edited_time,
            createdAt: page.created_time
        }
    }

}