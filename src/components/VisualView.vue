<template>
    <section class="visual">
        <!-- Swiper -->
        <Swiper 
        :modules="modules" 
        :autoplay="{
            delay: 2000,
            disableOnIteraction: false,
            }" 
        :navigation="{
            nextEl: '.sw-visual-next',
            prevEl: '.sw-visual-prev'
            }"
        :pagination="{
            el:'sw-visual-pg'

            }"
        :loop="true" 
        v-on:swiper="onSwiper" 
        v-on:slideChange="onSlideChange" 
        class="sw-visual">
            <!-- 슬라이더의 내용배치 -->
            <SwiperSlide>
                <a href="#" class="vs-1"></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" class="vs-2"></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" class="vs-3"></a>
            </SwiperSlide>
            <!-- 슬라이더 페이지네이션 -->
            <div class="sw-visual-control">
                <div class="sw-visual-pg"></div>
                <button class="sw-visual-bt">
                    <span class="material-icons-outlined">
                        pause
                    </span>
                </button>
            </div>
        </Swiper>
    </section>
</template>

<script>
    import {
        Autoplay,
        Navigation,
        Pagination
    } from 'swiper';
    import {
        Swiper,
        SwiperSlide
    } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        setup() {
            return {
                modules: [Autoplay, Navigation,Pagination]
            }
        }
    }
</script>

<style>
    /* 비주얼 영역 */
    .visual {
        position: relative;
        display: block;
        height: 477px;
    }

    .sw-visual {
        width: 100%;
        height: 100%;
    }

    .sw-visual a {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }

    .vs-1 {
        background: url('@/assets/images/banner_1_20200915_0.jpg') no-repeat center;
        background-size: cover;
    }

    .vs-2 {
        background: url('@/assets/images/banner_2_20200915_0.jpg') no-repeat center;
        background-size: cover;
    }

    .vs-3 {
        background: url('@/assets/images/banner_4_20200915_0.jpg') no-repeat center;
        background-size: cover;
    }

    .sw-visual-control {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 50px;

        display: block;
        z-index: 9;
    }

    .sw-visual-pg .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background-color: #fff;
        opacity: 0.5;
        margin-right: 10px;
    }

    .sw-visual-pg {
        float: left;
    }

    .sw-visual-pg .swiper-pagination-bullet-active {
        opacity: 1.0;
    }

    .sw-visual-bt {
        position: relative;
        display: block;
        width: 23px;
        height: 22px;
        float: left;
        background: transparent;
        cursor: pointer;
        border: 0;

        font-family: 'Material Icons';
        color: #fff;
        font-size: 10px;
    }

    .sw-visual-bt-play {
        background: url('@/assets/images/play.png') no-repeat center;
    }

    /* visual PC 버전 */
    /* visual 반응형 버전 */
    @media all and (max-width: 1400px) {
        .visual {
            height: 50vw;
        }
    }
</style>