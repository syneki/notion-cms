import { AbstractBlock } from "./abstract-block";

type EmojiBlock = {
    type: 'emoji'
    emoji: string
}

export class Emoji extends AbstractBlock<EmojiBlock> {
    type = 'emoji';

    public render(data: EmojiBlock): string {
        return data.emoji
    }

}