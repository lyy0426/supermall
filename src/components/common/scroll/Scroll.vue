<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll  from 'better-scroll'
// import Pullup from '@better-scroll/pull-up'

//  BetterScroll .use(Pullup)

export default {
  name:'Scroll',
  data() {
    return {
      scroll:{}
    }
  },
  props: {
    probeType: {
      type:Number,
      default:0
    },
    pullUpLoad: {
      type:Boolean,
      default:false
    }
  },
  mounted() {
    setTimeout(this.initScroll, 20)
  },
  methods: {
    initScroll() {
      //创建BetterScroll 对象
    this.scroll = new BScroll (this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    //监听滚动的位置
    this.scroll.on('scroll',position => {
      this.$emit('scroll',position)
    })
    //监听上拉事件
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  },
    refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      },
      finishPullUp() {
		    this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
      },
      scrollTo(x, y, time) {
		    this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      }
  },
}
</script>

<style>

</style>