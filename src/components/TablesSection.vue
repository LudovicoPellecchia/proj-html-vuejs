<script>
import { store } from "../store"

export default {
    data() {
        return {
            store,
        }
    },

    computed: {
        sortLeagueStandings() {
            let teams = this.store.teamList     
            return teams.sort((a, b) => b.pts - a.pts)
        }
    },
}
</script>

<template>
    <div class="tables-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-lg-8">
                        <div class="table-title">League Table</div>
                        <table class="table">
                            <thead>
                                <tr class="table-stats">
                                    <th class="th-lenght">TEAM</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>PTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(singleTeam, index) in sortLeagueStandings">
                                    <td>{{ index + 1}}<img :src="singleTeam.logo" alt="">{{ singleTeam.name }}</td>
                                    <td>{{ singleTeam.wins }}</td>
                                    <td>{{ singleTeam.draws }}</td>
                                    <td>{{ singleTeam.losses }}</td>
                                    <td class="fw-bold">{{ singleTeam.totalPoints }}</td>
                                </tr>
                            </tbody>
                        </table>

                        <table></table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tables-section {
    padding-top: 30px;
}

.table-title {
    font-weight: 800;
    font-size: 2rem;
    text-align: center;
}

.table-stats {
    background-color: black;

    th {
        background-color: black;
        color: white;
    }

    .th-lenght{
        width: 60%;
    }
}

table img{
    padding: 0 10px;
    width: 60px;
}
</style>
