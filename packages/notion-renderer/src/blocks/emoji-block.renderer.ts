import { createBlockRenderer } from '../utils/create-block-renderer';

type EmojiBlock = {
  type: 'emoji';
  emoji: string;
};

export default createBlockRenderer<EmojiBlock>('emoji', (data) => data.emoji);
