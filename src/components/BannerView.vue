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
            <span class="material-icons" @click="controlSlide">
              {{slideState}}
            </span>
          </button>
          <button class="sw-banner-next">
            <i class="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div class="banner-right">
        <Swiper :modules="modules" :loop="true" :autoplay="{delay: 2000,
          disableOnIteraction: false}" :navigation="{prevEl:'.sw-banner-prev', nextEl:'.sw-banner-next'}" :slidesPerView="3" :spaceBetween="20" :breakpoints="{
      '1400': {
        slidesPerView: 6,
      },
      '1260': {
        slidesPerView: 5,
      },
      '1000': {
        slidesPerView: 4,
      },
      '860': {
        slidesPerView: 3,
      },
    }" 
    @swiper="swBanner"
    class="sw-banner">
          <swiper-slide v-for="(obj,index) in bannerData" :key="index">
            <a :href="obj.blink" :alt="obj.balt" :style="{backgroundImage:'url('+require(`@/assets/images/${obj.bbg}`)  +')'}"></a>
          </swiper-slide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script>
import {ref,computed} from 'vue'
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import {
    Autoplay,
    Pagination,
    Navigation
  } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import {useStore} from 'vuex'
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      // Swiper 참조
      const slide = ref(null);

      const swBanner = (swiper)=>{
        // Swiper 개체를 저장
        slide.value = swiper;
      }
      // Swiper 의 start , stop 제어
      const slideState = ref('pause');
      const controlSlide=()=>{
        if(slide.value.autoplay.running){
          slide.value.autoplay.stop()
          slideState.value = 'play_arrow'
        }else {
          slide.value.autoplay.start()
          slideState.value = 'pause'
        }
        // console.log(slide.value.autoplay)
        // slide.value.autoplay.running = true;
        // slide.value.autoplay.running = false;
      }
      const store = useStore()
      const bannerData = computed(()=>store.getters.getBannerData)
      store.dispatch('fetchGetBanner')
      return {
        modules: [
          Autoplay, Pagination, Navigation
        ],
        swBanner,
        controlSlide,
        slideState,
        bannerData
      }
    }
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