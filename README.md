# img-preload
微信小程序：图片预加载组件

## 使用方法

### 父组件wxml
<imgPreload imgList="{{imgList}}" bind:loadSuccess="imgLoadCb"></imgPreload>

### 父组件js
Page({
  data: {
    imgList: [
      "http://img.zuoyebang.cc/zyb_1090d694f2997dc2a36352ca978638bb.jpg@f_png",
      "http://img.zuoyebang.cc/zyb_db90eeeb6da647b62ccc0499a872daa8.jpg@f_png"
    ]
  },
  //图片全部加载完成回调
  imgLoadCb: function () {
    console.log("图片已经全部加载完成了");
  }
})
  
