<script>
import { store } from "../store"

export default {
    props: {
        team: Object
    },


    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="match-card pb-4">
        <div class="my-card-style text-center">

            <div class="match-teams">
                <img :src="team.teams.homeTeam.logo" alt="">
                {{ team.teams.homeTeam.name }} 
                <span class="fw-bold">VS</span> 
                {{ team.teams.awayTeam.name }} 
                <img :src="team.teams.awayTeam.logo" alt="">
            </div>

            <div class="match-info">
                <div class="match-date">
                    <i class="fa-regular fa-calendar"></i>{{team.date}}
                </div>
                <div class="match-stadium">
                    <i class="fa-solid fa-plus"></i>{{team.stadium}}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my-card-style {
    display: flex;
    flex-direction: column;
    color: white;

    .match-teams {
        font-size: 1.9rem;
        font-weight: 800;
        background-color: rgba(0, 0, 0, 0.156);

        span {
            display: inline-block;
            padding: 0 30px;
            font-size: 3rem;
        }
    }

    .match-info {
        display: flex;
        justify-content: center;
        font-weight: 700;
        background-color: rgba(0, 0, 0, 0.407);

        i{
            display: inline-block;
            padding-right: 10px;
        }
        .match-date{
            padding-right: 30px;
        }
    }
}
</style>
