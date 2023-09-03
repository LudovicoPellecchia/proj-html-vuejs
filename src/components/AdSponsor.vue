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
        <div class="ad-banner">
            <img src="../assets/img/reklam.jpg" alt="">
        </div>
        <div class="sponsor-banner-list">
            <div class="container-fluid">
                <div class="row row-cols-6">
                    <div class="col" v-for="singleBanner in store.bannerList">
                        <div class="banner-card p-3">
                            <img :src="singleBanner.src" :key="singleBanner.id" alt="">
                        </div>
                    </div>
                </div>
            </div>


    </div>
</template>

<style lang="scss" scoped>
.ad-banner {
    padding-top: 150px;

}

.ad-banner img {
    width: 100%;
    height: 300px;
    object-fit: contain;
}

.sponsor-banner-list {
    padding-top: 52px;
    padding-bottom: 40px;
    background-color: black;

    .banner-card{
        border: 2px solid white;
        border-radius: 30px;

        img{
            width: 100%;
            object-fit: contain;
        }
    }
}
</style>
