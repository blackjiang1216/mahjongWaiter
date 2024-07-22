// 牌面類型定義
export class Tile {
    seq: number; // id 唯一值
    name: string;// 牌種名稱
    type: string;// 牌的類型
    image: string;// 圖片路徑
    
    constructor(seq: number, name: string,  type: string, image: string) {
        this.seq = seq;
        this.name = name;
        this.type = type;
        this.image = image;
    }
}