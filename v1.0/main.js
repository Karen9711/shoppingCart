var cart = new Vue({
  el:'#cart',
  data:{
    items:[
      {
        name:'西红柿',
        price:1,
        count:1,
      },
      {
        name:'燕麦片',
        price:32.1,
        count:1,
      },
      {
        name:'美达施膳食纤维',
        price:128,
        count:1,
      },
      {
        name:'蔓越莓干',
        price:68,
        count:1,
      },
    ]
  },
  computed:{
    totalPrice:function(){
      var total=0;
      for(var i=0;i<this.items.length;i++){
        total += this.items[i].price * this.items[i].count;
      }
      return parseFloat(total.toFixed(2));
    },
  },
  methods:{
    substractItem:function(index){
      if(this.items[index].count<=1){
      }
      else{
        this.items[index].count--;
      }
    },
    addItem:function(index){
      this.items[index].count++;
    },
    removeItem:function(index){
      this.items.splice(index,1);
    }
  }
});
