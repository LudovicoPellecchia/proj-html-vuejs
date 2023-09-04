<script>
import NavBar from './NavBar.vue';
import Jumbotron from './Jumbotron.vue';


export default {
    components: {
        NavBar,
        Jumbotron
    },
    data() {
        return {
            currentIndex: 0,

            backgroundImg: [
                'src/assets/img/slider1-1.jpg',
                'src/assets/img/slider2-1.jpg',
                'src/assets/img/slider3.jpg',
                'src/assets/img/slider4.jpg'
            ]
        }
    },

    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1 ) % this.backgroundImg.length
            return this.currentIndex
        },

        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.backgroundImg.length) % this.backgroundImg.length
        }
    },

    computed:{
        currentBg(){
            return this.backgroundImg[this.currentIndex]
        }
    }
}
</script>

<template>
    <header :style="{ 'background-image': 'url(' + currentBg + ')' }">
        <NavBar></NavBar>
        <Jumbotron></Jumbotron>
        <div class="arrows">
            <div  @click="prevSlide"><i class="fa-solid fa-chevron-left left-btn"></i></div>
            <div @click="nextSlide"><i class="fa-solid fa-chevron-right right-btn"></i></div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-image: url(../assets/img/slider1-1.jpg);
    background-size: cover;
    background-position: center;
    width: 100%;
    padding-bottom: 70px;
    position: relative;
}

.arrows {
    div {
        border: none;

        i {
            cursor: pointer;
            display: inline-block;
            color: white;
            position: absolute;
            padding: 10px;
            font-size: 3rem;
            display: flex;
        }

        .right-btn {
            margin-right: 20px;
            top: 50%;
            right: 0
        }

        .left-btn {
            margin-left: 20px;
            top: 50%;
            left: 0
        }
    }
}
</style>
