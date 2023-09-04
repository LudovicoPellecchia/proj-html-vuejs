<script >
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';


export default{
  components:{
    TheHeader,
    TheMain,
    TheFooter
  },
  data(){
    return{

    }
  }
}
</script>

<template>
<TheHeader></TheHeader>
<TheMain></TheMain>
<TheFooter></TheFooter>
</template>

<style >

::-webkit-scrollbar{
    background: rgba(255, 255, 255, 0);
}
::-webkit-scrollbar-thumb{
    border-radius: 100px;
    background-color: rgb(195, 195, 195);

}

::-webkit-scrollbar-thumb:hover{
  background-color: #525151;
}

</style>
