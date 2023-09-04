<script>
import { store } from "../store";
import MatchsList from "./MatchsList.vue";
import PlayerList from "./PlayerList.vue";
import TablesSection from "./TablesSection.vue";
import AdSponsor from "./AdSponsor.vue";
import JournalSection from "./JournalSection.vue";

export default {
    components: {
        MatchsList,
        PlayerList,
        TablesSection,
        AdSponsor,
        JournalSection
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <div class="match-preview-section">
            <div class="container">
                <div class="match-team text-center d-flex justify-content-center align-items-center">
                    <div class="team-wrapper">
                        <h4 class="team-name">Instanbul Sports</h4>
                        <img src="../assets/img/club-1.png" alt="">
                    </div>
                    <h2>VS</h2>
                    <div class="team-wrapper">
                        <img src="../assets/img/club-2.png" alt="">
                        <h4 class="team-name">United Fs Club</h4>
                    </div>
                </div>

                <div class="match-info d-flex align-items-center justify-content-center pt-4">
                    <div class="match-date"> <i class="fa-regular fa-calendar"></i>
                        May 21, 2022 18:05 pm</div>
                    <div class="match-stadium"> <i class="fa-solid fa-plus"></i>
                        Expert Stadium</div>
                </div>

                <div class="match-details-btn text-center mt-4">
                    <button type="button" class="btn btn-dark my-btn">View Match Details</button>
                </div>
            </div>
        </div>
        <MatchsList></MatchsList>
        <PlayerList></PlayerList>
        <TablesSection></TablesSection>
        <AdSponsor></AdSponsor>
        <JournalSection></JournalSection>

    </main>

</template>

<style lang="scss" scoped>
.match-preview-section {
    padding: 30px 0;
}

.match-preview-section h2 {
    font-weight: 800;
    font-size: 4rem;
    padding: 0 40px;
}

.team-wrapper {
    display: flex;
    align-items: center;

    h4 {
        font-size: 1.9rem;
        font-weight: 800;
    }
}

.match-info {
    font-weight: 800;

    i {
        font-size: 0.7rem;
    }

    .match-date {
        padding-right: 30px;
    }
}
.my-btn {
        font-size: 1.2rem;
        font-weight: 500;
        border-radius: 30px;
        padding: 15px 50px;
    }
</style>
