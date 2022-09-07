<template>
  <section class="visual">
    <!-- Swiper -->
    <Swiper :modules="modules" :loop="true" :autoplay="{
      delay: 2000,
      disableOnIteraction: false
      }" :effect="'fade'" :pagination="{
      el:'.sw-visual-pg',
      type:'bullets',
      clickable: true}" @swiper="swVisual" class="sw-visual">
      <swiper-slide v-for="(obj,index) in visualData" :key="index">
        <a :href="obj.vlink" :style="{backgroundImage:'url(' + require(`@/assets/images/${obj.vbg}`) + ')'}"></a>
      </swiper-slide>
      <!-- 슬라이더 페이지네이션 -->
      <div class="sw-visual-control">
        <div class="sw-visual-pg"></div>
        <button class="sw-visual-bt">
          <!-- 슬라이더 클릭시 play / start -->
          <span class="material-icons-outlined" @click="controlSlide">
            <!-- 클릭시 아이콘 모양을 바꾸기 위함 -->
            <!-- 구글 아이콘인 경우만 해당 -->
            {{slideState}}
          </span>
        </button>
      </div>
    </Swiper>
  </section>
</template>

<script>
  import {
    ref,
    computed
  } from 'vue'
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import {
    Autoplay,
    EffectFade,
    Pagination,
  } from 'swiper';
  import 'swiper/css';
  import "swiper/css/effect-fade";
  import 'swiper/css/pagination';

  import {
    useStore
  } from 'vuex'
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      // Swiper 를 저장하려는 용도
      const slide = ref(null);
      // Swiper 객체를 저장하기 위한 용도
      const swVisual = (swiper) => {
        // ref 라서 .value 로 저장이 됨
        slide.value = swiper
      }
      const slideState = ref('pause')
      const controlSlide = () => {
        if (slide.value.autoplay.running) {
          slide.value.autoplay.stop()
          slideState.value = 'play_arrow'
        } else {
          slide.value.autoplay.start()
          slideState.value = 'pause'
        }
      }

      const store = useStore();
      store.dispatch('fetchGetVisual');
      const visualData = computed(() => store.getters.getVisualData)
      return {
        modules: [
          Autoplay, Pagination, EffectFade
        ],
        swVisual,
        controlSlide,
        slideState,
        visualData
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
    background-repeat: no-repeat;
    background-size: cover;
  }

  /* .vs-1 {
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
  } */

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
    color: #fff;
  }

  .sw-visual-bt-play {
    background: url('@/assets/images/play.png') no-repeat center;
  }

  /* visual PC 버전 */
  /* visual 반응형 버전 */
  @media all and (max-width: 1400px) {
    .visual {
      height: 40vw;
    }

    .sw-visual a {
      background-size: 140%;
      background-position: center;
    }
  }

  @media all and (max-width: 1000px) {
    .visual {
      height: 50vw;
    }

    .sw-visual a {
      background-size: 140% 90%;
      background-position: 50% 60%;
    }
  }
</style>