import { NotionDatabase } from "../notion-database";
import { Property, PropertyTypes } from "../types";
import { AbstractParser } from "./abstract-parser";
import { TimePropertyParser } from "./properties/time-property.parser";
import { RichTextPropertyParser } from "./properties/rich-text-property.parser";
import { SimplePropertyParser } from "./properties/simple-property.parser";
import { DatePropertyParser } from "./properties/date-property.parser";
import { FormulaPropertyParser } from "./properties/formula-property.parser";
import { NotionCMS } from "../notion-cms";

export class PropertyParser<TEntityProps extends Record<string, unknown>> extends AbstractParser<Property<unknown, PropertyTypes>, unknown> {

    parse(property: Property<unknown, PropertyTypes>, cms: NotionCMS, database: NotionDatabase<TEntityProps>): unknown {
        switch (property.type) {
            case 'date':
                return cms.parserManager.parse(DatePropertyParser, property, database);
                        
            case 'created_time':            
            case 'last_edited_time':
                return cms.parserManager.parse(TimePropertyParser, property, database)
            
            case 'formula':
                return cms.parserManager.parse(FormulaPropertyParser, property, database)
            
            case 'title':
            case 'rich_text':
                return cms.parserManager.parse(RichTextPropertyParser, property, database);

            case 'people':
                return cms.parserManager.parse(SimplePropertyParser, property, database);
            
            // case 'relation': @TODO
            // case 'rollup': @TODO
            // case 'files': @TODO
            
            default:
                return cms.parserManager.parse(SimplePropertyParser, property, database);
        }
    }

}