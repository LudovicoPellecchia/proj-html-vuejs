<script>
import PlayerCard from "./PlayerCard.vue"
import { store } from "../store"

export default {
    components: {
        PlayerCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="player-info-section">
        <div class="container">
            <h2 class="text-center text-white fw-bold">Players</h2>
            <div class="row row-cols-4">
                <div class="col" v-for="singlePlayer in store.players">
                    <PlayerCard :player="singlePlayer"></PlayerCard>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.player-info-section {
    background-image: url(../assets/img/player.jpg);
}

h2{
    padding: 40px 0;
}
</style>
