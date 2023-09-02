<script>
import MatchCard from './MatchCard.vue';
import {store} from "../store"

export default {
    components: {
        MatchCard
    },
    data() {
        return{
            store
        }
    }
}
</script>

<template>
    <div class="upcoming-matchs-section">
        <div class="container">
            <h2 class="text-center text-white fw-bold pt-4 pb-4">Upcoming Matchs</h2>
            <div class="matchs-list" v-for="singleMatch in store.upcomingMatchs">
                <MatchCard :team="singleMatch"></MatchCard>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.upcoming-matchs-section {
    background-image: url(../assets/img/saha.jpg);
    background-size: cover;
    background-position: center;
    padding:20px 0;
}
</style>
