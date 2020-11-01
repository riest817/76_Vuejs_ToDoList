var app = new Vue({
  el: "#app",
  data: {
    newList: {},
    Lists: [
       { name: '洗濯'},
       { name: '掃除'},
       { name: '仕事'},
       { name: '勉強'}
    ]
  },
  methods: {
    shuffle: function() {
      this.Lists = _.shuffle(this.Lists);
    },
    add_List: function() {
      this.Lists.push(this.newList);
      this.newList = {};
    },
    delete_List: function(index) {
      this.Lists.splice(index, 1);
    },
    All_delete: function() {
      this.Lists = null;
    }
  }
});