<template>
    <section class="banner">
        <div class="inner clearfix">
            <div class="banner-left">
                <h2>배너모음</h2>
                <div class="banner-control">
                    <button class="sw-banner-prev">
                        <i class="fas fa-angle-left"></i>
                    </button>
                    <button class="sw-banner-pause">
                        <span class="material-icons">
                            play_arrow
                        </span>
                    </button>
                    <button class="sw-banner-next">
                        <i class="fas fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div class="banner-right">
                <div class="swiper-container sw-banner">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><a href="#" class="banner-0"></a></div>
                        <div class="swiper-slide"><a href="#" class="banner-1"></a></div>
                        <div class="swiper-slide"><a href="#" class="banner-2"></a></div>
                        <div class="swiper-slide"><a href="#" class="banner-3"></a></div>
                        <div class="swiper-slide"><a href="#" class="banner-4"></a></div>
                        <div class="swiper-slide"><a href="#" class="banner-5"></a></div>
                        <div class="swiper-slide"><a href="#" class="banner-6"></a></div>
                        <div class="swiper-slide"><a href="#" class="banner-7"></a></div>
                        <div class="swiper-slide"><a href="#" class="banner-8"></a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style>
    /* 배너 영역 */
    .banner {
        position: relative;
        display: block;
        background-color: #f6f6f6;
        padding: 25px 0;
    }

    /* .banner .inner {} */

    .banner-left {
        position: relative;
        display: block;
        float: left;
        width: 170px;
        margin-top: 13px;
    }

    .banner-left h2 {
        position: relative;
        display: block;
        font-size: 20px;
        color: #3d3d3d;
        font-weight: 600;
    }

    .banner-control {
        position: absolute;
        right: 0;
        top: 3px;
        display: block;
        width: 73px;
        height: 25px;
        border: 1px solid #ececec;
    }

    .sw-banner-prev {
        position: relative;
        display: block;
        width: 24px;
        height: 23px;
        background-color: #fff;
        border: 0;
        border-right: 1px solid #ececec;
        text-align: center;
        color: #979797;
        line-height: 23px;
        cursor: pointer;
        float: left;
    }

    .sw-banner-pause {
        position: relative;
        display: block;
        width: 24px;
        height: 23px;
        float: left;

        border: 0;
        border-right: 1px solid #ececec;
        background-color: #fff;
        text-align: center;
        line-height: 23px;
        cursor: pointer;
    }

    .sw-banner-pause span {
        display: block;
        color: #979797;
        font-size: 16px;
    }

    .sw-banner-next {
        position: relative;
        display: block;
        float: left;

        width: 23px;
        height: 23px;
        text-align: center;
        line-height: 23px;
        cursor: pointer;
        border: 0;
        color: #979797;
        background-color: #fff;
    }

    .banner-right {
        position: relative;
        display: block;
        float: right;
        width: 83.6%;
    }

    .sw-banner a {
        position: relative;
        display: block;
        height: 57px;
        border: 1px solid #e9e9e9;
    }

    .banner-0 {
        background: url('@/assets/images/img_banner01.gif') no-repeat center;
        background-size: cover;
    }

    .banner-1 {
        background: url('@/assets/images/img_banner02.gif') no-repeat center;
        background-size: cover;
    }

    .banner-2 {
        background: url('@/assets/images/img_banner03.gif') no-repeat center;
        background-size: cover;
    }

    .banner-3 {
        background: url('@/assets/images/img_banner04.gif') no-repeat center;
        background-size: cover;
    }

    .banner-4 {
        background: url('@/assets/images/img_banner05.gif') no-repeat center;
        background-size: cover;
    }

    .banner-5 {
        background: url('@/assets/images/img_banner06.gif') no-repeat center;
        background-size: cover;
    }

    .banner-6 {
        background: url('@/assets/images/img_banner07.gif') no-repeat center;
        background-size: cover;
    }

    .banner-7 {
        background: url('@/assets/images/img_banner08.gif') no-repeat center;
        background-size: cover;
    }

    .banner-8 {
        background: url('@/assets/images/img_banner09.gif') no-repeat center;
        background-size: cover;
    }

    /* 배너 PC 영역 */
    /* 배너 반응형 */
    @media all and (max-width: 1400px) {
        .banner .inner {
            width: 97%;
        }
    }

    @media all and (max-width:1100px) {
        .banner-right {
            width: 100%;
            margin-top: 20px;
        }
    }
</style>