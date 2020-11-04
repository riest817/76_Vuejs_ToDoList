var app = new Vue({
  el: "#app",
  data: {
    newList: {id: 0, name: "", status: "unknown"},
    idCount: 4,
    Lists: [
       { id: 1, name: '洗濯', status: '低', bgColor: 'aqua'},
       { id: 2, name: '掃除', status: '中', bgColor: 'yellow'},
       { id: 3, name: '仕事', status: '高', bgColor: 'pink'}
    ],
    editNum: -1
  },
  methods: {
    shuffle: function() {
      this.Lists = _.shuffle(this.Lists);
    },
    add_List: function() {
      if ( this.editNum === -1 ) {
        this.newList['id'] = this.idCount;
        this.newList['bgColor'] = this.set_bgColor(this.newList['status']);
        //console.log(this.newList);
        this.Lists.push(this.newList);
        this.newList = {};
        this.idCount++;
      } else {
        this.newList['id'] = this.Lists[this.editNum]['id'];
        this.newList['bgColor'] = this.set_bgColor(this.newList['status']);
        this.Lists.splice(this.editNum, 1, this.newList); 
        this.newList = {};
        this.editNum = -1;
        submit.value = "追加";  // DOMを直接を操作
        submit.style.backgroundColor = "white"; //DOM
      }
    },
    delete_List: function(index) {
      this.Lists.splice(index, 1);
    },
    edit_List: function(index) {
      this.editNum = index;
      console.log(this.editNum);
      document.getElementById( "content" ).value = this.Lists[this.editNum]['name'];  // DOM操作は禁じ手
      document.getElementById( "status" ).value = this.Lists[this.editNum]['status']; // 同様
      this.newList['name'] = this.Lists[this.editNum]['name'];
      this.newList['status'] = this.Lists[this.editNum]['status'];
      submit.value = "編集完了";    //DOM
      submit.style.backgroundColor = "lightblue"; // DOM
      //this.add_List();
    },
    All_delete: function() {
      this.Lists = [];
    },
    set_bgColor: function(status) {
      switch(status) {
        case '低':  return 'aqua';
        case '中':  return 'yellow';
        case '高':  return 'pink';
        case '緊急':  return  'red';
        default: return 'lightgrey';
      }
    }
  }
});

// Vue.component('edit-form', {
//   data() { 
//     return {
//         msg: 'hello ELOOP!'
//     }
//   },
//   template: `<button @click="delete_List(index)" class="btn-delete">編集取消</button>
//               <button @click="edit_List(index)" class="btn-edit">編集完了</button>
//               <p>ID:{{ List.id }}&emsp;優先度:
//                 <select name="status_select" v-model="Lists[index].status">
//                   <option value='低'>低</option>
//                   <option value='中'>中</option>
//                   <option value='高'>高</option>
//                   <option value='緊急'>緊急</option>
//                 </select>
//               </p>     
//               <p>内容：<input type="text" v-model="Lists[index].name" size="30" maxlength="20"></p>`,
              
// })