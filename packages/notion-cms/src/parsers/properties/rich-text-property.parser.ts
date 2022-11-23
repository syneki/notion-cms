import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { PropertyParser } from '../../types';

const richTextPropertyParser: PropertyParser<RichTextItemResponse[], string> = (
  property,
  cms
) => {
  const value = property[property.type];
  if (!value) return;

  if (!cms.renderer) return value.map((b) => b.plain_text).join('');
  return cms.renderer.render(...value);
};

export default richTextPropertyParser;
