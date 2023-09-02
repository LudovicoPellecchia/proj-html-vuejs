<script>
import NavBar from './NavBar.vue';
import Jumbotron from './Jumbotron.vue';


export default {
    components:{
        NavBar,
        Jumbotron
    },
    data() {
        return
    }
}
</script>

<template>
    <header>
        <NavBar></NavBar>
        <Jumbotron></Jumbotron>
    </header>
</template>

<style lang="scss" scoped>

header{
    background-image: url(../assets/img/slider1-1.jpg);
    background-size: cover;
    background-position: center;
    width: 100%;
}





</style>
