<script>
import { store } from "../store"

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="journal-section-title text-center pt-5">
            <div class="section-logo">
                <i class="fa-regular fa-thumbs-up"></i>
            </div>
            <div class="section-title pt-3">
                <h3 class="fw-bold fs-2">Resent New & Articles</h3>
                <p>Be aware of the football world.</p>
            </div>
        </div>

        <div class="jorunal-card-list">
            <div class="row row-cols-4">
                <div class="col pb-4" v-for="singleJournal in store.articlesList">
                    <div class="card p-4 my-card-style">
                        <img :src="singleJournal.img" class="card-img-top" alt="...">
                        <div class="card-body text-center d-flex flex-column">
                            <h5 class="card-title">{{ singleJournal.title }}</h5>
                            <div class="card-info">{{ singleJournal.date }}</div>
                            <p class="card-text">{{ singleJournal.paragraph }}</p>
                            <a href="#" class="btn my-btn btn-dark">More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

::-webkit-scrollbar{
    background: rgba(255, 255, 255, 0);
}
::-webkit-scrollbar-thumb{
    border-radius: 100px;
    background-color: #9c9c9c;
}
.row{
    flex-wrap: nowrap;
    overflow: auto;

}


.section-logo {
    margin: auto;
    background-color: black;
    color: white;
    border-radius: 45%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        border: 2px dotted white;
        padding: 10px;
        border-radius: 50%;
        font-size: 2.5rem;
    }
}


.my-card-style{
    height: 100%;
    border: none;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.12);

    .my-btn{
        width: 100%;
        margin-top: auto;
        font-size: 1.2rem;
        font-weight: 500;
        border-radius: 30px;
        padding: 15px 50px;
    }

}
</style>