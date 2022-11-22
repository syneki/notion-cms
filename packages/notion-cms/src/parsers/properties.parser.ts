import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionCMS } from "../notion-cms";
import { NotionDatabase } from "../notion-database";
import { PropertyMapping } from "../types";
import { AbstractParser } from "./abstract-parser";
import { PropertyParser } from "./property.parser";

export class PropertiesParser<TEntityProps extends Record<string, any>> extends AbstractParser<PageObjectResponse['properties'], TEntityProps> {
    parse(data: PageObjectResponse['properties'], cms: NotionCMS, database: NotionDatabase<any>): TEntityProps {
        const obj: Record<string, unknown> = {}

        for (const [key, property] of Object.entries(data)) {
            const mappedPropertyIndex = Object.values(database.mapping).findIndex((v) => (v as PropertyMapping).name === key)
            const mappedPropertyKey = Object.keys(database.mapping)[mappedPropertyIndex];
    
            const parsedProperty = cms.parserManager.parse(PropertyParser, property, database)
    
            if (!mappedPropertyKey) obj[key] = parsedProperty
            else obj[mappedPropertyKey] = parsedProperty
        }
    
        return obj as TEntityProps
    }
}