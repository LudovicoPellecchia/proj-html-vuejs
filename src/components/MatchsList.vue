<script>
import MatchCard from './MatchCard.vue';

export default {
    components:{
        MatchCard
    },
    data() {
        return
    }
}
</script>

<template>
    <div class="upcoming-matchs-section">
        <div class="container">
            <MatchCard></MatchCard>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.upcoming-matchs-section{
    background-image: url(../assets/img/saha.jpg);
    background-size: cover;
    background-position: center;
    height: 800px;
}

</style>
