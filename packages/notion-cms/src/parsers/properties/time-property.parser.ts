import { PropertyParser } from '../../types';

const timePropertyParser: PropertyParser<string, Date> = (property) => {
  const value = property[property.type];
  return value ? new Date(value) : null;
};

export default timePropertyParser;
