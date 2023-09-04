<script>


export default {
    data() {
        return {}
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="contact-info">
                        <div class="footer-logo">
                            <img src="../assets/img/logo-footer-football.png" alt="">
                        </div>
                        <div class="location-info">
                            <i class="fa-solid fa-location-dot"></i>
                            New Jersey, USA
                        </div>
                        <div class="number-info">
                            <i class="fa-solid fa-phone-volume"></i>
                            +1 (234) 567 89 10
                        </div>
                        <div class="emal-info">
                            <i class="fa-solid fa-envelope"></i>
                            example@example.com
                        </div>
                        <div class="social-media-info">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>
                <div class="col-5 pe-5">
                    <div>
                        <div class="newsletter-info pb-4">
                            <h3 class="pb-2">Join Our Newsletter</h3>
                            <p>Subscribe to be informed about important developments in our club and football world.</p>
                        </div>
                        <div>
                            <div class="email-btn mb-2">
                                <button type="button" class="btn btn-light my-btn">Your Email Address</button>
                            </div>
                            <div class="subscribe-btn">
                                <button type="button" class="btn btn-light my-btn">Subscribe &rarr;</button>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="col-2">
                    <div class="footer-links-info">
                        <h3>Education</h3>
                        <div class="footer-links">
                            <ul>
                                <li><a href="#"><span>-</span>Fixtures & Results</a></li>
                                <li><a href="#"><span>-</span>League Table</a></li>
                                <li><a href="#"><span>-</span>Players</a></li>
                                <li><a href="#"><span>-</span>Gallery</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="footer-links-info">
                        <h3>Quick Links</h3>
                        <div class="footer-links">
                            <ul>
                                <li><a href="#"><span>-</span>Home</a></li>
                                <li><a href="#"><span>-</span>Blog</a></li>
                                <li><a href="#"><span>-</span>Gallery</a></li>
                                <li><a href="#"><span>-</span>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="copyright-info text-center pt-5 fw-light">
                <i class="fa-regular fa-copyright"></i> 2022 Football Club - All rights Reserved.
            </div>

        </div>

    </footer>
</template>

<style lang="scss" scoped>
footer {
    margin-top: 60px;
    background-color: #010101;
    color: white;
    padding: 40px 0;
}

.contact-info {

    >* {
        display: flex;
    }


    img {
        width: 70px;
    }

    div {
        padding-bottom: 25px;
    }

    i {

        flex-basis: 22%;
        display: inline-block;
        font-size: 2rem;
    }

    .social-media-info i {
        margin-right: 10px;
        border: 1px solid rgb(92, 92, 92);
        display: inline-block;
        text-align: center;
        padding: 3px 0;

    }
}


.newsletter-info {
    padding-right: 150px;
}

.email-btn button {
    color: grey;
    text-align: left;

}

.my-btn {
    width: 100%;
    border-radius: 30px;
    padding: 20px 50px;
}


.footer-links-info {

    h3 {
        font-weight: 700;
    }

    ul {
        padding: 0;
        list-style: none;

    }

    a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;

    }

    span {
        display: inline-block;
        font-weight: 800;
        font-size: 1.6rem;
        padding-right: 10px;
    }
}

.copyright-info i {
    font-size: 0.8rem;
}
</style>
