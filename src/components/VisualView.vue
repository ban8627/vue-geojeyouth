<template>
  <section class="visual">
    <!-- Swiper -->
    <Swiper :modules="modules" :loop="true" :autoplay="{
      delay: 2000,
      disableOnIteraction: false
      }" :effect="'fade'" :pagination="{
      el:'.sw-visual-pg',
      type:'bullets',
      clickable: true,}" class="sw-visual">
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
    onUpdated
  } from 'vue'
  import {
    Swiper,
    SwiperSlide,
  } from 'swiper/vue';
  import {
    Autoplay,
    EffectFade,
    Pagination,
  } from 'swiper';
  import 'swiper/css';
  import "swiper/css/effect-fade";
  import 'swiper/css/pagination';
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      onUpdated(() => {

      })
      return {
        modules: [
          Autoplay, Pagination, EffectFade
        ]
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
    position: relative;
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
.sw-visual-pg {
  display: inline-block;
  width: auto !important;
}
  .sw-visual-pg .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #fff;
    opacity: 0.5;
    margin-right: 10px;
  }

  .sw-visual-pg .swiper-pagination-bullet-active {
    opacity: 1.0;
  }

.sw-visual-bt {
  position: relative;
  display: inline-block;
  width: 23px;
  height: 22px;
  vertical-align: bottom;
  background: transparent;
  cursor: pointer;
  border: 0;
  color:#fff;
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
    .sw-visual a {
      background-size: contain;
    }
  }
</style>