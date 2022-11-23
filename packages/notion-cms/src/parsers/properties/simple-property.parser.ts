import { PropertyParser } from '../../types';

const simplePropertyParser: PropertyParser = (data) => {
  return data[data.type];
};

export default simplePropertyParser;
