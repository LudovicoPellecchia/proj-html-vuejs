<script>

export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <nav class="navbar my-nav">
        <div class="container">
            <div class="nav-top">
                <div class="nav-logos">
                    <div class="sponsor-logos  w-100">
                        <img src="../assets/img/sponsor1.png" alt="">
                        <img src="../assets/img/sponsor2.png" alt="">
                    </div>
                    <div class="main-logos w-100 text-center">
                        <img src="../assets/img/logo-football.png" alt="">
                    </div>
                    <div class="social-icons w-100 text-end">
                        <i class="fa-brands fa-facebook-f icon-style"></i>
                        <i class="fa-brands fa-instagram icon-style"></i>
                        <i class="fa-brands fa-twitter icon-style"></i>
                    </div>
                </div>
            </div>
            <div class="nav-bottom">
                <div class="nav-links">
                    <a class="nav-link " aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Fixtures & Results</a>
                    <a class="nav-link" href="#">League Table</a>
                    <a class="nav-link">Players</a>
                    <a class="nav-link">Gallery</a>
                    <a class="nav-link">Blog</a>
                    <a class="nav-link">Contact</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.my-nav {
    color: white;
    background-color: rgba(0, 0, 0, 0.351);

    .nav-top {
        width: 100%;
    }

    .nav-logos {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }

    .nav-bottom {
        padding: 2rem 0 0 0;
        width: 100%;


        .nav-links{
            text-align: center;
        }
        .nav-links a {
            font-size: 1.1rem;
            font-weight: 800;
            display: inline-block;
            color: white;
            text-transform: uppercase;
            margin-right: 3rem;
            padding-bottom: 10px;
            border-bottom: 0px solid white;
        }



    }
}

.icon-style {
    display: inline-block;
    font-size: 2rem;
    padding-right: 15px;
}
</style>
