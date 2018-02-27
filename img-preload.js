
Component({
  properties: {
    "imgList": {
      type: Array,
      value: []
    }
  },
 
  created: function() {
    this.indexList = [];
  },

  ready: function (obj) {
    this.listLen = this.properties.imgList.length;
  },
  
  methods: {
    imgOnLoad: function(e) {
      var index = e.currentTarget.dataset.index;
      this.imgCallback(index);
    },

    imgOnError: function(e) {
      var index = e.currentTarget.dataset.index;
      this.imgCallback(index);
    },

    imgCallback: function(index) {
      if(this.indexList.indexOf(index) < 0) {
        this.indexList.push(index);
      }
      if (this.indexList.length >= this.listLen) {
        console.log("全部加载结束");
        this.triggerEvent('loadSuccess')
      }
    }
  }
})
