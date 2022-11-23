import { FormulaProperty, PropertyParser } from '../../types';

const formulaPropertyParser: PropertyParser<FormulaProperty, unknown> = (
  property,
  cms,
  database
) => {
  return cms.parser.parseProperty(property[property.type], database);
};

export default formulaPropertyParser;
