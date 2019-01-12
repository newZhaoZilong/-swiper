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
    setTimeout(()=>{
      this.setData({
        isChange: !this.data.isChange
      })
    },2000);
  },
  /**
   * 根据不同的指令更新view的状态
   */
  updateState(order){

    
  }
})