import { PageParser, ParserType } from '../types';

const pageParser: PageParser = (page, cms, database) => {
  const properties: Record<string, unknown> = cms.parser.parse(
    ParserType.PROPERTIES,
    page.properties,
    database
  );

  return {
    id: page.id,
    cover:
      page.cover && database.cms.parser.parseProperty(page.cover, database),
    ...properties,
    updatedAt: page.last_edited_time,
    createdAt: page.created_time,
  };
};

export default pageParser;
