import { PropertiesParser, PropertyMapping } from '../types';

const propertiesParser: PropertiesParser = (properties, cms, database) => {
  const obj: Record<string, unknown> = {};
  for (const [key, property] of Object.entries(properties)) {
    const mappedPropertyIndex = Object.values(database.mapping).findIndex(
      (v) => (v as PropertyMapping).name === key
    );
    const mappedPropertyKey = Object.keys(database.mapping)[
      mappedPropertyIndex
    ];
    const parsedProperty = cms.parser.parseProperty(property, database);

    if (!mappedPropertyKey) obj[key] = parsedProperty;
    else obj[mappedPropertyKey] = parsedProperty;
  }

  return obj;
};

export default propertiesParser;
