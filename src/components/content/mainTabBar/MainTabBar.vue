<template>
  <div>
    <TabBar>
      <TabBaritem path="/home">
        <img src="@/assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </TabBaritem>
      <TabBaritem path="/category">
        <img src="@/assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </TabBaritem>
      <TabBaritem path="/cart">
        <img src="@/assets/img/tabbar/cart.svg" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/cart_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </TabBaritem>
      <TabBaritem path="/profile">
        <img src="@/assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <img src="@/assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </TabBaritem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBaritem from '@/components/common/tabbar/TabBaritem'

export default {
  name:'MainTabBar',
  components: {
    TabBar,
    TabBaritem
  }
}
</script>

<style>

</style>