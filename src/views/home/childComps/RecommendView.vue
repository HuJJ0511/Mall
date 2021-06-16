<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link" class="items">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommends:{
      type:Array,
      default(){  
       return []
    }
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    width: 100%;
    border-bottom: 10px solid #eee;
    align-items: center;
    padding: 10px 0 20px;
  }
  .recommend-item{
    flex: 1;
  }
  .items{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .recommend-item img{
    width: 90%;
    margin-bottom: 10px;
  }
</style>