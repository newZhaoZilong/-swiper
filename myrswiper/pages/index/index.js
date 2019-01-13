//index.js
//获取应用实例
Page({
  data: {
    imgList: [
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=327838939,2679323956&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1710796834,3309957089&fm=26&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1264622034,1497870764&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2569031314,193725432&fm=26&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=220413455,2095539567&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=466374737,578912033&fm=11&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2651468456,717395043&fm=26&gp=0.jpg'
    ],
    pre:0
  },
  onLoad(){
    var a = 20;
    while(a>10){
      console.log(a);
      a--;
    }
  },
  /**
   * 根据不同的指令更新view的状态
   */
  updateState(order){

    
  },
  /**
   * 根据当前current的值移动到指定位置,这是一套连续动作
   * 由moveToNext组成
   */
  moveToCurrent(idx){
    while(this.data.current !== idx){
      this.moveToNext();
    }
  },
  /**
   * 从当前角标移动到下个角标
   */
  moveToNext(){
      this.getNextIdxs();
      this.preAnimation();
      this.startAnimation();
      this.updateCurrent;
  },
  /**
   * 获取下个阶段的所有角标
   */
  getNextIdxs(){
    var current = this.data.current;
    var pre = (current - 1 + this.imgList.length) % this.imgList.length;
    var next = (current + 1) % this.imgList.length;
    var spare = (current + 2)% this.imgList.length;
  }
})