var app = new Vue({
  el: "#app",
  data: {
    newList: {id: 0, name: "", status: "unknown"},
    idCount: 4,
    Lists: [
       { id: 1, name: '洗濯', status: '低', bgColor: 'aqua'},
       { id: 2, name: '掃除', status: '中', bgColor: 'yellow'},
       { id: 3, name: '仕事', status: '高', bgColor: 'pink'}
    ]
  },
  methods: {
    shuffle: function() {
      this.Lists = _.shuffle(this.Lists);
    },
    add_List: function() {
      this.newList['id'] = this.idCount;
      this.newList['bgColor'] = this.set_bgColor(this.newList['status']);
      //console.log(this.newList);
      this.Lists.push(this.newList);
      this.newList = {};
      this.idCount++;
    },
    delete_List: function(index) {
      this.Lists.splice(index, 1);
    },
    edit_List: function(index) {
      
    },
    All_delete: function() {
      this.Lists = [];
    },
    set_bgColor: function(status) {
      switch(status) {
        case '低':  return 'aqua';
        case '中':  return 'yellow';
        case '高':  return 'high';
        case '緊急':  return  'red';
        default: return 'lightgrey';
      }
    }
  }
});