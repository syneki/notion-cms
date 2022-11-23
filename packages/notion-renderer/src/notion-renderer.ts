import { BLOCK_RENDERERS } from './globals';
import { Block, BlockRenderer, BlockRendererFunc } from './types';

export class NotionRenderer {
  blocks: Record<string, BlockRendererFunc<any>> = {};

  constructor(...renderers: BlockRenderer<any>[]) {
    [...BLOCK_RENDERERS, ...renderers].map((Block) =>
      this.addBlockRenderer(Block)
    );
  }

  addBlockRenderer<T extends Block>(renderer: BlockRenderer<T>) {
    this.blocks[renderer.type] = renderer;
  }

  render(...blocks: Block[]) {
    return blocks
      .map((block) => {
        const renderer = this.blocks[block.type];
        if (!renderer)
          throw new Error(`There is no renderer for block ${block.type}`);
        return renderer(block, this);
      })
      .join('');
  }
}
