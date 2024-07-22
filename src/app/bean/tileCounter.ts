import { Tile } from './tile';

// 手牌計數器定義
export class TileCounter extends Tile{
    counter: number; //一種牌目前張數(ex: 一筒目前有1張; counter = 1)
    constructor(seq: number, name: string,  type: string, image: string, counter: number) {
        super(seq, name, type, image);
        this.counter = counter;
    }

}