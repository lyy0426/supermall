<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <cart-list></cart-list>

    <cart-buttom-bar></cart-buttom-bar>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import NavBar from '@/components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList.vue'
import CartButtomBar from './childComps/CartButtomBar.vue'

export default {
  components: { 
    NavBar,
    CartList,
    CartButtomBar,
  },
  name:'Cart',
  computed: {
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: VAR(--color-tint);
    color: #fff;
  }
</style>