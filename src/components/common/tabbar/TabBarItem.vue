<template>
  <div id="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // isActive: true
        }
    },
    props:{ 
        path: String,
        activeColor:{
            type: String,
            defualt : ""
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path).catch(err=>{})
        }
    }
}
</script>

<style>
    #tab-bar-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 49px;
        font-size: 14px;
     }
     #tab-bar-item img{
         height: 24px;
         width: 24px;
         vertical-align: middle;
    }
    /* .active{
        color: rgb(255, 87, 119);
    } */
</style>