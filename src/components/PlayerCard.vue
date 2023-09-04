<script>
import { store } from "../store"

export default {
    props: {
        player: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="my-card-style">
        <img :src="player.image" class="card-img-top player-image" alt="...">
        <div class="card-body">
            <div class="player-info text-center fw-bold">
                <div class="fs-5 text-white">{{ player.shirtNumber }}</div>
                <div>{{ player.name }} - {{player.position}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my-card-style{
    border: none;
    border-radius: 30px;
    position: relative;
    overflow: hidden;

    img{
        
        transform: scale(1);
        transition: transform 0.5s;

    }
}

.my-card-style:hover{

    img{
        transform: scale(1.08);
        transition: transform 0.5s ;
    }
}

.player-info{
    background-color: black;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 15px;
    position: absolute;
    bottom: 0;
    width: 100%;


    div:last-child{
    color: rgb(175, 175, 175);
}
    
}
</style>