<template>
  <div class="tab_control">
    <div v-for="(item,index) in titles" class="tab_control-item" :class="{active: index===currentIndex}" @click="itemClick(index)" :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    titles:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex: 0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
  .tab_control{
    display:flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    background-color: #fff;
  }

  .tab_control-item{
    flex: 1;
  }

  .tab_control-item span{
    padding: 5px;
  }

  .active{
    color: var(--color-high-text);
  }

  .active span{
    border-bottom: 2px solid var(--color-tint);
  }
</style>