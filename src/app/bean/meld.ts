// 牌面類型定義
export class Meld {
    combo: number[];// 當順子/刻子的牌型
    
    constructor(combo: number[]) {
        this.combo = combo;
    }
}