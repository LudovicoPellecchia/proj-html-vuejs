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
                <div class="col-lg-6">
                    <div class="table-title pb-4">League Table</div>
                    <div class="standing-table">
                        <table>
                            <thead>
                                <tr class="table-stats p-3">
                                    <th class="th-lenght">TEAM</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>PTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(singleTeam, index) in sortLeagueStandings">
                                    <td v-if="index <= 8">{{ index + 1 }}<img :src="singleTeam.logo" alt="">{{
                                        singleTeam.name }}</td>
                                    <td v-if="index <= 8">{{ singleTeam.wins }}</td>
                                    <td v-if="index <= 8">{{ singleTeam.draws }}</td>
                                    <td v-if="index <= 8">{{ singleTeam.losses }}</td>
                                    <td v-if="index <= 8" class="fw-bold">{{ singleTeam.totalPoints }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="view-more-btn">View Full League Table</div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="table-title pb-4"> Fixtures And Results</div>
                    <div class="fixture-results-table">
                        <table>
                            <thead>
                                <tr v-for="singleMatch in store.upcomingMatchs">
                                    <td> <img :src="singleMatch.teams.homeTeam.logo" alt="">
                                        {{ singleMatch.teams.homeTeam.name }}
                                        <span class="fw-bold ps-3 pe-3">VS</span>
                                        {{ singleMatch.teams.awayTeam.name }}
                                        <img :src="singleMatch.teams.awayTeam.logo" alt="">
                                    </td>
                                </tr>
                            </thead>
                        </table>
                        <div class="view-more-btn">View Full Fixtures</div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tables-section {
    padding-top: 30px;

    .standing-table, .fixture-results-table{
        border: 1px solid  #F5F5F5;
        height: 100%;
    }
}

.table-title {
    font-weight: 800;
    font-size: 2rem;
    text-align: center;
}

.table-stats {
    background-color: black;

    th {
        background-color: #212121;
        color: white;
    }

    .th-lenght {
        padding: 20px;
        width: 60%;
    }
}

table {
    height: 100%;
    width: 100%;
    margin-bottom: 0;
    background-color: #F5F5F5;

    img {
        padding: 0 10px;
        width: 72px;
    }

    tr {
        vertical-align: baseline;

        td {
            padding-left: 10px;
            font-size: 1.2rem;
        }
    }
}

.view-more-btn {
    padding: 20px;
    background-color: black;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    width: 100%;
}
</style>
