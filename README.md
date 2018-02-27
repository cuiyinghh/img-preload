# img-preload
微信小程序：图片预加载组件

## 使用方法

### 父组件wxml
```javascript
<imgPreload imgList="{{imgList}}" bind:loadSuccess="imgLoadCb"></imgPreload>
```

### 父组件js
```javascript
Page({
  data: {
    imgList: [
      "https://www.pexels.com/assets/heaa019b3d0e8b.jpg",
      "https://static.pexels.com/photos/895898/pexels-photo-895898.jpeg"
    ]
  },
  //图片全部加载完成回调
  imgLoadCb: function () {
    console.log("图片已经全部加载完成了");
  }
})
```
