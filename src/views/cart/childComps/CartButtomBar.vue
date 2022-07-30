<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :isChecked="isSelectAll"  class="check-button" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import CheckButton from '@/components/content/checkButton/CheckButton.vue'
export default {
  components: { 
    CheckButton,
   },
  name: "CartButtomBar",
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return "￥" + this.cartList.filter((item) => {
        return item.checked
      }).reduce((prev,item) => {
        return prev + item.price * item.count
      },0).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).reduce((prev,item) => {
        return prev + item.count
      },0)
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false
      // return !(this.cartList.filter(item => !item.checked).length)
      return !this.cartList.find(item => !item.checked)
    }
  },
  methods: {
    checkClick() {
      if(this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false)
      }else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick() {
      if(!this.isSelectAll) {
        this.$toast.show('请选择购买的商品')
      }
    },
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background-color: #eee;
     position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    line-height: 40px;
    display: flex;
  }

  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 70px;
  }

  .check-button {
    width: 22px;
    height: 22px;
    line-height: 20px;
    margin-right: 5px;
  }

  .price {
    margin-left: 20px;
    flex:1
  }

  .calculate {
    width: 120px;
    background-color: red;
    color: #eee;
    text-align: center;
  }

</style>