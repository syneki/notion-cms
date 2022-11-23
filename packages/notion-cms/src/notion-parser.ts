import { NotionDatabase } from './notion-database';
import pageParser from './parsers/page.parser';
import propertiesParser from './parsers/properties.parser';
import datePropertyParser from './parsers/properties/date-property.parser';
import formulaPropertyParser from './parsers/properties/formula-property.parser';
import richTextPropertyParser from './parsers/properties/rich-text-property.parser';
import simplePropertyParser from './parsers/properties/simple-property.parser';
import timePropertyParser from './parsers/properties/time-property.parser';
import {
  PageParser,
  Parser,
  ParserType,
  PropertiesParser,
  PropertyParser,
  PropertyV2,
} from './types';

export type NotionParserOptions = {
  pageParser?: PageParser;
  propertiesParser?: PropertiesParser;
  propertyParsers?: {
    [type: string]: PropertyParser;
  };
};

export class NotionParser {
  parsers: {
    [type: string]: Parser;
    default: PropertyParser;
  } = {
    default: simplePropertyParser,
  };

  constructor(options: NotionParserOptions = {}) {
    this.addParser(ParserType.PAGE, options.pageParser ?? pageParser);
    this.addParser(
      ParserType.PROPERTIES,
      options.propertiesParser ?? propertiesParser
    );

    this.addParser('date', datePropertyParser);
    this.addParser('created_time', timePropertyParser);
    this.addParser('last_edited_time', timePropertyParser);
    this.addParser('formula', formulaPropertyParser);
    this.addParser('title', richTextPropertyParser);
    this.addParser('rich_text', richTextPropertyParser);

    for (const [type, parser] of Object.entries(
      options.propertyParsers ?? {}
    )) {
      this.addParser(type, parser);
    }
  }

  addParser(type: string, parser: Parser) {
    this.parsers[type] = parser;
  }

  parseProperty(property: PropertyV2, database: NotionDatabase) {
    return this.parse(property.type, property, database);
  }

  parse<TData, TResult>(
    type: string,
    data: TData,
    database: NotionDatabase
  ): TResult {
    let parser = this.parsers[type];
    if (!parser) parser = this.parsers.default;
    return parser(data, database.cms, database);
  }
}
