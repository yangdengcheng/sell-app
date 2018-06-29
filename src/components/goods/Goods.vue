<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(good,index) in goods" :key="index" class="menu-item">
          <span class="text border-1px">
            <span v-show="good.type > 0" class="icon" :class="classMap[good.type]"></span>
            {{ good.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="food-wrapper">

    </div>
  </div>
</template>

<script>
    const ERR_OK = 0;
    export default {
      data() {
        return {
          goods: []
        };
      },
      props: {
        seller: Object
      },
      created() {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        this.$http.get('/api/goods').then((response) => {
          response = response.body;
          if (response.errno === ERR_OK) {
            this.goods = response.data;
          };
        });
      }

    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 16px
          vertical-align middle
          border-1px(rgba(7,17,27,0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
</style>
