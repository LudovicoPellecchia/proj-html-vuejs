<script>
import { store } from "../store"

export default {
    data() {
        return {
            store,
            standing:[]
        }
    },

    computed: {
        getLeagueStandings(){
            let teams = this.store.teamStat           
            teams.sort((a,b) => b.pts - a.pts)
            return this.standing.push(teams)

        }

    }
}
</script>

<template>

<div class="tables-section">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="col-lg-8">
                    <div class="table-title">League Table</div>
                    <div class="card">
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr class="table-stats">
                                        <th>TEAM</th>
                                        <th>W</th>
                                        <th>D</th>
                                        <th>L</th>
                                        <th>PTS</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <table></table>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>

.tables-section{
    padding-top: 30px;
}
.table-title{
    font-weight: 800;
    font-size: 2rem;
    text-align: center;
}

.table-stats{
    background-color: black;

    th{
        background-color: black;
        color: white;
    }
}



</style>
