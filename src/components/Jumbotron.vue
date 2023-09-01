<script>
export default {
    data() {
        return{
            
        }
    }
}
</script>

<template>
    <div class="jumbotron container">
        <div class="container-title text-center">
            <h1 class="jumbo-title">Footbal Club Sport Club</h1>
            <h5 class="text-white pb-4">Private football matches</h5>
            <div class="btn-wrapper">
                <button type="button" class="btn btn-outline-light my-btn">Learn More &rarr;</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.jumbotron{
    width: 100%;

    .container-title{
        padding: 100px 0;
        margin: auto;
        width: 50%;
    }
}

.jumbo-title {
    font-size: 4.7rem;
    font-weight: 800;
    color: white;
}
.jumbo-title h5 {
    font-weight: 800;
}

.my-btn{
    font-size: 1.2rem;
    font-weight: 500;
    border: 2px solid white;
    border-radius: 30px;
    padding: 15px 50px ;
}
</style>
