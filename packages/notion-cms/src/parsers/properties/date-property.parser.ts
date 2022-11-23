import { DateResponse, NotionDate, PropertyParser } from '../../types';

const datePropertyParser: PropertyParser<DateResponse, NotionDate> = (
  property
) => {
  const value = property[property.type];

  return {
    start: new Date(value.start),
    end: value.end ? new Date(value.end) : null,
  };
};

export default datePropertyParser;
