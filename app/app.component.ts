import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tile } from './bean/tile';
import { TileCounter } from './bean/tileCounter';
import { Meld } from './bean/meld';
import { CommonModule, NgFor } from '@angular/common';

// 暴力破解...
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  /** ================== Variables ================== */
  /** 定義所有麻將牌種類 */
  tileCounter: TileCounter[] = [
    { seq: 1, name: '一萬', type: 'character', image: '../assets/images/1c.jpg', counter: 0},
    { seq: 2, name: '二萬', type: 'character', image: '../assets/images/2c.jpg', counter: 0},
    { seq: 3, name: '三萬', type: 'character', image: '../assets/images/3c.jpg', counter: 0},
    { seq: 4, name: '四萬', type: 'character', image: '../assets/images/4c.jpg', counter: 0},
    { seq: 5, name: '五萬', type: 'character', image: '../assets/images/5c.jpg', counter: 0},
    { seq: 6, name: '六萬', type: 'character', image: '../assets/images/6c.jpg', counter: 0},
    { seq: 7, name: '七萬', type: 'character', image: '../assets/images/7c.jpg', counter: 0},
    { seq: 8, name: '八萬', type: 'character', image: '../assets/images/8c.jpg', counter: 0},
    { seq: 9, name: '九萬', type: 'character', image: '../assets/images/9c.jpg', counter: 0},
    { seq: 10, name: '一條', type: 'bamboo', image: '../assets/images/1b.jpg', counter: 0},
    { seq: 11, name: '二條', type: 'bamboo', image: '../assets/images/2b.jpg', counter: 0},
    { seq: 12, name: '三條', type: 'bamboo', image: '../assets/images/3b.jpg', counter: 0},
    { seq: 13, name: '四條', type: 'bamboo', image: '../assets/images/4b.jpg', counter: 0},
    { seq: 14, name: '五條', type: 'bamboo', image: '../assets/images/5b.jpg', counter: 0},
    { seq: 15, name: '六條', type: 'bamboo', image: '../assets/images/6b.jpg', counter: 0},
    { seq: 16, name: '七條', type: 'bamboo', image: '../assets/images/7b.jpg', counter: 0},
    { seq: 17, name: '八條', type: 'bamboo', image: '../assets/images/8b.jpg', counter: 0},
    { seq: 18, name: '九條', type: 'bamboo', image: '../assets/images/9b.jpg', counter: 0},
    { seq: 19, name: '一餅', type: 'dot', image: '../assets/images/1d.jpg', counter: 0},
    { seq: 20, name: '二餅', type: 'dot', image: '../assets/images/2d.jpg', counter: 0},
    { seq: 21, name: '三餅', type: 'dot', image: '../assets/images/3d.jpg', counter: 0},
    { seq: 22, name: '四餅', type: 'dot', image: '../assets/images/4d.jpg', counter: 0},
    { seq: 23, name: '五餅', type: 'dot', image: '../assets/images/5d.jpg', counter: 0},
    { seq: 24, name: '六餅', type: 'dot', image: '../assets/images/6d.jpg', counter: 0},
    { seq: 25, name: '七餅', type: 'dot', image: '../assets/images/7d.jpg', counter: 0},
    { seq: 26, name: '八餅', type: 'dot', image: '../assets/images/8d.jpg', counter: 0},
    { seq: 27, name: '九餅', type: 'dot', image: '../assets/images/9d.jpg', counter: 0},
    { seq: 28, name: '東', type: 'wind', image: '../assets/images/east.jpg', counter: 0},
    { seq: 29, name: '南', type: 'wind', image: '../assets/images/south.jpg', counter: 0},
    { seq: 30, name: '西', type: 'wind', image: '../assets/images/west.jpg', counter: 0},
    { seq: 31, name: '北', type: 'wind', image: '../assets/images/north.jpg', counter: 0},
    { seq: 32, name: '中', type: 'dragon', image: '../assets/images/red.jpg', counter: 0},
    { seq: 33, name: '發', type: 'dragon', image: '../assets/images/green.jpg', counter: 0},
    { seq: 34, name: '白', type: 'dragon', image: '../assets/images/white.jpg', counter: 0}
  ];

  /** 定義所有順子/刻子的牌型 */
  melds: Meld[] = [
  { combo: [1, 1, 1] },
  { combo: [2, 2, 2] },
  { combo: [3, 3, 3] },
  { combo: [4, 4, 4] },
  { combo: [5, 5, 5] },
  { combo: [6, 6, 6] },
  { combo: [7, 7, 7] },
  { combo: [8, 8, 8] },
  { combo: [9, 9, 9] }, 
  { combo: [10, 10, 10] },
  { combo: [11, 11, 11] },
  { combo: [12, 12, 12] },
  { combo: [13, 13, 13] },
  { combo: [14, 14, 14] },
  { combo: [15, 15, 15] },
  { combo: [16, 16, 16] },
  { combo: [17, 17, 17] },
  { combo: [18, 18, 18] },
  { combo: [19, 19, 19] }, 
  { combo: [20, 20, 20] },
  { combo: [21, 21, 21] },
  { combo: [22, 22, 22] },
  { combo: [23, 23, 23] },
  { combo: [24, 24, 24] },
  { combo: [25, 25, 25] },
  { combo: [26, 26, 26] },
  { combo: [27, 27, 27] },
  { combo: [28, 28, 28] },
  { combo: [29, 29, 29] }, 
  { combo: [30, 30, 30] },
  { combo: [31, 31, 31] },
  { combo: [32, 32, 32] },
  { combo: [33, 33, 33] },
  { combo: [34, 34, 34] },
  { combo: [1, 2, 3] },
  { combo: [2, 3, 4] },
  { combo: [3, 4, 5] },
  { combo: [4, 5, 6] },
  { combo: [5, 6, 7] },
  { combo: [6, 7, 8] },
  { combo: [7, 8, 9] },
  { combo: [10, 11, 12] },
  { combo: [11, 12, 13] },
  { combo: [12, 13, 14] },
  { combo: [13, 14, 15] },
  { combo: [14, 15, 16] },
  { combo: [15, 16, 17] },
  { combo: [16, 17, 18] },
  { combo: [19, 20, 21] },
  { combo: [20, 21, 22] },
  { combo: [21, 22, 23] },
  { combo: [22, 23, 24] },
  { combo: [23, 24, 25] },
  { combo: [24, 25, 26] },
  { combo: [25, 26, 27] }
];













/** ================== Function ================== */
  /**
   * 名稱: joinToNowTiles
   * 功用: 按下+按鈕後，把選取的牌添加進手牌
   * 變數: TileCounter -選取到的物件
   * 回傳: void
   */
  joinToNowTiles(tile: TileCounter): void {
    if (this.isNowTilesOver16()) {
      this.editHtml('result', '<img src="../assets/images/boy_boring.png" /><b>唉唷!鄉親! 你的手牌超過16張了</b>');
    } else if (this.isSingleTileOver4(tile) && tile.type !== 'suit') {
      this.editHtml('result', '<img src="../assets/images/boy_boring.png" /><b>唉唷!鄉親! 你的'+tile.name+'超過4張了</b>');
    } else {
      tile.counter++;
    }
  }

  /**
   * 名稱: removeFromNowTiles
   * 功用: 按下-按鈕後，把選取的牌從手牌移除
   * 變數: TileCounter -選取到的物件
   * 回傳: void
   */
  removeFromNowTiles(tile: TileCounter): void {
    this.editHtml('result', '<img src="../assets/images/boy_smile.png" /><b>鄉親! 伯夷來幫你看看聽什麼</b>');

    if (tile.counter > 0)
      tile.counter--;
  }

  /**
   * 名稱: nowTileCounter
   * 功用: 計算目前手牌數
   * 變數: 
   * 回傳: number -回傳目前手牌張數
   */
  nowTileCounter(): number {
    let counter: number = 0;
    this.tileCounter.forEach((element) => counter = counter + element.counter);

    return counter;
  }

  /**
   * 名稱: isNowTilesOver16
   * 功用: 判斷目前手牌張數是否超過16張
   * 變數: 
   * 回傳: boolean -超過回傳true; 否則回傳false
   */
  isNowTilesOver16(): boolean {
    if (this.nowTileCounter() >= 16) return true;
    return false;
  }

  /**
   * 名稱: isSingleTileOver4
   * 功用: 判斷目前單一種牌種張數是否超過4張
   * 變數: TileCounter -牌種
   * 回傳: boolean -超過回傳true; 否則回傳false
   */
  isSingleTileOver4(tile: TileCounter): boolean {
    if (tile.counter >= 4){
      return true;
    }

    return false;
  }


  /**
   * 名稱: reload
   * 功用: 重整(排序)手牌 -由小到大
   * 變數: 
   * 回傳: void
   */
  reload(): void {
    this.tileCounter.sort((a, b) => a.seq - b.seq);
  }

  /**
   * 名稱: listenWhat
   * 功用: 邏輯核心, 判斷聽牌
   * 變數: 
   * 回傳: void
   */
  listenWhat(): void {
    if( this.isHand() ){
      this.editHtml('result', '烙格，你相公了...');
    } else {
      let nowTiles: Tile[] = this.transferTile(this.tileCounter.filter(e => e.counter > 0));// 目前手牌(橫向展開)
      let copySeqQueue: number[] = this.transferSeq(nowTiles);// 目前手牌(只取seq)
      let listen: number[] = [];// 聽牌
      let noRepeatTile: number[] = Array.from(new Set(this.transferSeq(nowTiles))).sort((a, b) => a - b);// 不重複的手牌
      let triplets: Tile[] = this.tileCounter.filter(e => e.counter >= 3);// 手牌擁有刻子計數器
      let eyes: Tile[] = this.tileCounter.filter(e => e.counter >= 2);// 手牌擁有眼牌計數器

      if( triplets.length > 0 ){ //假設有刻子
        for( let i=0;i < triplets.length;i++ ){ 
          copySeqQueue = this.transferSeq(nowTiles).slice();

          // 先扣刻子的三張牌
          copySeqQueue = this.removeItem(copySeqQueue, triplets[i].seq);
          copySeqQueue = this.removeItem(copySeqQueue, triplets[i].seq);
          copySeqQueue = this.removeItem(copySeqQueue, triplets[i].seq);

          // 存扣完刻子後的牌型, 以利後面重跑
          let tempSeq = copySeqQueue.slice();
          
          // 存目前的手牌
          let nowSeq = this.transferSeq(nowTiles).slice();

          for( let j=0;j < noRepeatTile.length;j++ ) {
            // 每次都要重置到扣完刻子的牌型
            copySeqQueue = tempSeq.slice();

            // 為了找出所有聽牌可能, 必須一次以一張牌為定點做搜尋
            copySeqQueue = this.removeItem(copySeqQueue, noRepeatTile[j]);

            for( let k=0;k < this.melds.length;k++ ){
              if( copySeqQueue.length == 0 ){
                listen.push(noRepeatTile[j]);
                copySeqQueue = nowSeq.slice();
                break;
              } 
              
              // 若符合成刻子的牌型, 就扣掉, 繼續往下判斷
              if( this.isInclude(copySeqQueue, this.melds[k].combo) ){
                copySeqQueue = this.removeItem(copySeqQueue, this.melds[k].combo[0]);
                copySeqQueue = this.removeItem(copySeqQueue, this.melds[k].combo[1]);
                copySeqQueue = this.removeItem(copySeqQueue, this.melds[k].combo[2]);
                
                k = 0;
              } 
            }
          }
        }
      }
      
      
      if( eyes.length > 0 ){ //假設有眼
        for( let i=0;i < eyes.length;i++ ){ 
          // 每次都先重置
          copySeqQueue = this.transferSeq(nowTiles).slice();
          
          // 先扣2張眼睛扣掉
          copySeqQueue = this.removeItem(copySeqQueue, eyes[i].seq);
          copySeqQueue = this.removeItem(copySeqQueue, eyes[i].seq);
          
          // 存扣完眼睛後的牌型, 以利後面重跑
          let tempSeq = copySeqQueue.slice();

          // 存目前的手牌
          let nowSeq = this.transferSeq(nowTiles).slice();
          
          for( let j=0;j < noRepeatTile.length;j++ ){
            // 每次都要重置到扣完眼睛的牌型
            copySeqQueue = tempSeq.slice();
          
            // 為了找出所有聽牌可能, 必須一次以一張牌為定點做搜尋
            copySeqQueue = this.removeItem(copySeqQueue, noRepeatTile[j]);
            
            for( let k=0;k < this.melds.length;k++ ) {
              if( copySeqQueue.length == 1 ){
                // 剩一張的時候, 把一開始扣的那張加回來做判斷
                copySeqQueue.push(noRepeatTile[j]);
                // 從小排到大
                copySeqQueue.sort( (a, b) => a - b);

                if( (copySeqQueue[1] - copySeqQueue[0] == 1) && (this.getType(copySeqQueue[1]) == this.getType(copySeqQueue[0])) ){ //代表是連續牌, 有機會組成順子
                  if( copySeqQueue[1] == 9 || copySeqQueue[1] == 18 || copySeqQueue[1] == 27 ){ //如果是9萬/9餅/9條, 則聽邊章
                    listen.push(copySeqQueue[1]-2);
                  } else if ( copySeqQueue[0] == 1 || copySeqQueue[0] == 10 || copySeqQueue[0] == 19 ) { //如果是1萬/1餅/1條, 則聽邊章
                    listen.push(copySeqQueue[0]+2);
                  } else { //聽雙頭
                    listen.push(copySeqQueue[0]-1);
                    listen.push(copySeqQueue[1]+1);
                  }
                  // 判斷完重置
                  copySeqQueue = nowSeq.slice();
                  break;
                } else if ( copySeqQueue[1] == copySeqQueue[0] ) { //如果兩張牌一樣, 聽對對
                  listen.push(copySeqQueue[0]);
                  listen.push(eyes[i].seq);
                } else if ( (copySeqQueue[1] - copySeqQueue[0] == 2) && (this.getType(copySeqQueue[1]) == this.getType(copySeqQueue[0]))) { //如果兩張牌差2, 且花色一樣 表示聽中洞
                  listen.push(copySeqQueue[1]-1);
                }
                // 判斷完重置
                copySeqQueue = nowSeq.slice();
                break;
              }
                
              if (this.isInclude(copySeqQueue, this.melds[k].combo)) {
                copySeqQueue = this.removeItem(copySeqQueue, this.melds[k].combo[0]);
                copySeqQueue = this.removeItem(copySeqQueue, this.melds[k].combo[1]);
                copySeqQueue = this.removeItem(copySeqQueue, this.melds[k].combo[2]);

                // 每次找到就重找, 因為可能會有111222333的狀況, 找完123必須得再重複找123
                k = 0;
              }    
            }
          }
        }

        // 假設複數牌不當眼的狀況
        let nowSeq = this.transferSeq(nowTiles).slice();
        for(let i=0;i < noRepeatTile.length;i++) {
          // 每次都要重置牌型
          copySeqQueue = nowSeq.slice();
          
          // 為了找出所有聽牌可能, 必須一次以一張牌為定點做搜尋
          copySeqQueue = this.removeItem(copySeqQueue, noRepeatTile[i]);
          
          for(let j=0;j < this.melds.length;j++) {
            if(copySeqQueue.length == 0) { //如果都沒剩牌，表示單吊被當作定點搜尋的那張
              listen.push(noRepeatTile[i]);
              copySeqQueue = nowSeq.slice();
              break;
            } 

            if (this.isInclude(copySeqQueue, this.melds[j].combo)) {
              copySeqQueue = this.removeItem(copySeqQueue, this.melds[j].combo[0]);
              copySeqQueue = this.removeItem(copySeqQueue, this.melds[j].combo[1]);
              copySeqQueue = this.removeItem(copySeqQueue, this.melds[j].combo[2]);

              // 每次找到就重找, 因為可能會有111222333的狀況, 找完123必須得再重複找123
              j = 0;
            } 
          }
        }
      } else { //全部牌都長不一樣
        let nowSeq = this.transferSeq(nowTiles).slice();
        for(let i=0;i < noRepeatTile.length;i++) {
          copySeqQueue = nowSeq.slice();
          
          // 為了找出所有聽牌可能, 必須一次以一張牌為定點做搜尋
          copySeqQueue = this.removeItem(copySeqQueue, noRepeatTile[i]);

          for( let j=0;j < this.melds.length;j++ ) {
            if(copySeqQueue.length == 0) {
              listen.push(noRepeatTile[i]);
              copySeqQueue = nowSeq.slice();
              break;
            } 

            if (this.isInclude(copySeqQueue, this.melds[j].combo)) {
              copySeqQueue = this.removeItem(copySeqQueue, this.melds[j].combo[0]);
              copySeqQueue = this.removeItem(copySeqQueue, this.melds[j].combo[1]);
              copySeqQueue = this.removeItem(copySeqQueue, this.melds[j].combo[2]);

              // 每次找到就重找, 因為可能會有111222333的狀況, 找完123必須得再重複找123
              j = 0;
            } 
          }
        }
      }

      listen = Array.from(new Set(listen)).sort((a, b) => a - b);// 去重複 且 從小排到大
      listen = this.trimOver4(listen);// 去掉聽牌但手牌已經拿4張的可能
      let listenTile: string = '';

      if(listen.length > 0) {
        listenTile = '<img src="../assets/images/boy_smile.png" /><b>鄉親! 恭喜哦! 你聽</b>';
        for (let i=0;i < listen.length;i++) {
          listenTile = listenTile + '<img src="' + this.getImage(listen[i]) + '" width="35px" height="45px" />';
        }

        this.editHtml('result', listenTile);
      } else {
        listenTile = '<img src="../assets/images/boy_boring.png" /><b>鄉親! 沒聽欸! 殘念!</b>';
        this.editHtml('result', listenTile);
      }
    }
  }

  /**
   * 名稱: isHand
   * 功用: 判斷是不是相公, 其實就是判斷目前選的手牌可不可以形成聽牌的數量
   * 變數: 
   * 回傳: boolean -不符合回傳true; 否則回傳false
   */
  isHand(): boolean {
    if (this.nowTileCounter()%3 !== 1) {
      return true
    }
    return false;
  }

  /**
   * 名稱: transferTile
   * 功用: 轉換手牌, 將counter橫向展開
   * 變數: TileCounter[]
   * 回傳: Tile[]
   */
  transferTile(tile: TileCounter[]): Tile[] {
    let afterTile: Tile[] = [];
    tile.forEach(e => {
      for(let i = 1;i <= e.counter;i++){
        afterTile.push(e);
      }
    });

    return afterTile;
  }

  /**
   * 名稱: transferSeq
   * 功用: 轉換手牌, 只取seq出來判斷, 跟transferTile()有點重工了
   * 變數: Tile[]
   * 回傳: number[]
   */
  transferSeq(tile: Tile[]): number[] {
    let result: number[] = [];
    tile.forEach(e => {
      result.push(e.seq);
    });

    return result;
  }


  /**
   * 名稱: isInclude
   * 功用: 判斷是否是可以組成刻子/順子牌型
   * 變數: number[], meld
   * 回傳: boolean
   */
  isInclude(tile: number[], meld: number[]): boolean {
    let isTriplet: boolean = meld[0] == meld[1] && meld[1] == meld[2] ? true: false;
    let copy = tile.slice();
    
    if (isTriplet) { //如果是刻子
      if ( meld.length <= copy.filter(e => e == meld[0]).length ) {
        return true;
      } else {
        return false;
      }
    } else { //如果是順子
      for(let i=0;i < meld.length;i++){
        if ( !copy.includes(meld[i]) ) {
          return false;
        }
      }

      return true;
    }
  }

  /**
   * 名稱: reset
   * 功用: 按下重置按鈕, 會重置手牌
   * 變數: 
   * 回傳: void
   */
  reset(): void {
    this.tileCounter.forEach(e => {
      e.counter = 0;
    })

    this.editHtml('result', '<img src="../assets/images/boy_smile.png" /><b>鄉親! 伯夷來幫你看看聽什麼</b>');
  }


  /**
   * 名稱: removeItem
   * 功用: 移除某張牌
   * 變數: number[]
   * 回傳: number[]
   */
  removeItem(tile: number[], target: number): number[] {
    let result = tile.slice();
    let index = result.indexOf(target);
    if (index > -1) { 
      result.splice(index, 1); 
    }

    return result;
  }

  /**
   * 名稱: getType
   * 功用: 取得花色
   * 變數: number
   * 回傳: string
   */
  getType(seq: number): string{
    let after = this.tileCounter.filter(e => e.seq == seq);
    return after[0].type;
  }

  /**
   * 名稱: getImg
   * 功用: 取得圖片
   * 變數: number
   * 回傳: string
   */
  getImage(seq: number): string{
    let after = this.tileCounter.filter(e => e.seq == seq);
    return after[0].image;
  }

  /**
   * 名稱: editHtml
   * 功用: 異動html內容
   * 變數: string -id: 語法, htmlContent: 修改內容
   * 回傳: void
   */
  editHtml(id: string, htmlContent: string): void{
    const container = document.getElementById(id);
    if (container) {
      container.innerHTML = htmlContent;
    }
  }

  /**
   * 名稱: trimOver4
   * 功用: 確認聽牌是否存在自己手牌且超過四張，這張聽牌就扣掉
   * 變數: number[]
   * 回傳: void
   */
  trimOver4(tile: number[]): number[]{
    let result = tile.slice();
    let nowTile = this.transferSeq(this.transferTile(this.tileCounter.filter(e => e.counter > 0)));
    tile.forEach(t => {
      if(nowTile.filter(n => n == t).length == 4){
        result = this.removeItem(result, t);
      }
    });

    return result;
  }
}
