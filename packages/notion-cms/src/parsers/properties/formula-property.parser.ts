import { NotionCMS } from "../../notion-cms";
import { NotionDatabase } from "../../notion-database";
import { FormulaProperty, Property } from "../../types";
import { PropertyParser } from "../property.parser";
import { AbstractPropertyParser } from "./abstract-property.parser";

export class FormulaPropertyParser extends AbstractPropertyParser<FormulaProperty, 'formula', unknown> {

    parse(data: Property<FormulaProperty, 'formula'>, cms: NotionCMS, database: NotionDatabase<any>) {
        return cms.parserManager.parse(PropertyParser, data.formula, database);
    }
    
}