import { PropertyParser } from '../../types';

const filePropertyParser: PropertyParser<{ url: string }, string> = (data) => {
  const value = data[data.type];
  return value ? value.url : null;
};

export default filePropertyParser;
