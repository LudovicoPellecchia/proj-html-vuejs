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
            <div class="text-center mt-5 mb-3">
                <button type="button" class="btn btn-dark my-btn">View All Players</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.player-info-section {
    padding-bottom: 20px;
    background-image: url(../assets/img/player.jpg);
}

h2 {
    padding: 40px 0;
}

.my-btn {
    background-color: black;
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 30px;
    padding: 20px 50px;
    border: 1px solid white;
}
</style>
