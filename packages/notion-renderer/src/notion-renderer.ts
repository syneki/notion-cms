import { AbstractBlock } from "./blocks/abstract-block"
import { BLOCKS } from "./globals";
import { Block } from "./types";

export class NotionRenderer {

    blocks: Record<string, AbstractBlock> = {}

    constructor(Blocks: (new () => AbstractBlock)[] = []) {
        [...BLOCKS, ...Blocks].map(Block => this.addBlock(Block));
    }

    addBlock(Block: (new () => AbstractBlock)) {
        const block = new Block();
        this.blocks[block.type] = block;
    }

    render(...blocks: Block[]) {
        return blocks.map(block => {
            const renderer = this.blocks[block.type];
            if (!renderer) throw new Error(`There is no renderer for block ${block.type}`);    
            return renderer.render(block, this);
        }).join('')
    }

}